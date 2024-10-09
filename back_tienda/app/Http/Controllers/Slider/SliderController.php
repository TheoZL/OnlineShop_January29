<?php

namespace App\Http\Controllers\Slider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
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
    public function index()
    {
        //se referencia el slider 
        $sliders = Slider::orderBy("id","desc")->get();
        //retorna los sliders
        return response()->json([
            "sliders" => $sliders,
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
    public function store(Request $request)
    {
        //se sube la imagen al store
        if($request->hasFile("imagen_file")){
            $path = Storage::putFile("sliders",$request->file("imagen_file"));
            $request->request->add(["imagen" => $path]);
        }
        //se crea el slider en la base de datos
        $slider = Slider::create($request->all());
        //retorna el slider creado
        return response()->json([
            "slider" => $slider,
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
    public function update(Request $request, $id)
    {

        $slider = Slider::findOrFail($id);
        //si la imagen existe se reescribe
        if($request->hasFile("imagen_file")){
            if($slider->imagen){
                Storage::delete($slider->imagen);
            }
            //se actualiza el slider
            $path = Storage::putFile("sliders",$request->file("imagen_file"));
            //restorn el slider actualizado
            $request->request->add(["imagen" => $path]);
        }
        $slider->update($request->all());
        return response()->json([
            "slider" => $slider,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //se elimina el slider
        $slider = Slider::findOrFail($id);
        $slider->delete();
        //respuesta 200 para ok
        return response()->json(["message" => 200]);
    }
}