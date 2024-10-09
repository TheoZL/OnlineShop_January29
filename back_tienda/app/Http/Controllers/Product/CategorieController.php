<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products\Categorie;
use Illuminate\Support\Facades\Storage;

class CategorieController extends Controller
{   
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     //función para listar todas las categorias 
    public function index(Request $request)
    {
        $search = $request->search;
        $categories = Categorie::where("name","like","%".$search."%")->orderBy("id","desc",)->get();
        return response()->json([
            "categorias"=> $categories, 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //función para guardar una categoria 
    public function store(Request $request)
    {   //agrega un codigo que es la imagen de la categoria
        if($request->hasFile("imagen_file")){
            $path = Storage:: putFile("categorias",$request->file("imagen_file"));
            $request->request->add(["imagen"=> $path]);
        }
        $categorie = Categorie:: create($request->all());
        return response()->json([
            "categorie"=> $categorie,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //función para actualizar una categoria
    public function update(Request $request, $id)
    {   //busca la categoria
        $categorie = Categorie:: findOrFail($id);
        //si encuantra la categoria la elimina
        if($request->hasFile("imagen_file")){
            if($categorie->imagen){
                Storage::delete($categorie->imagen);
            } //agrega la nueva categoria
            $path = Storage:: putFile("categorias",$request->file("imagen_file"));
            // añade una nueva ruta de imagen
            $request->request->add(["imagen"=> $path]);
        } //actualiza la ruta de imagen
        $categorie->update($request->all());
        return response()->json([
            "categorie"=> $categorie,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //función para eliminar una categoria
    public function destroy($id)
    {   
        try {
            //busca la categoria
            $categorie = Categorie::findOrFail($id);
            //elimina la categoria
            $categorie->delete();

            return response()->json(["message"=> 200]);
        }
        catch (Exception $e){
            return response()->json(["message"=> 500]);
        }
    }

}
