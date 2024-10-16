<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
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
    public function index(Request $request)
    {
        $state = $request->get("state");
        $search = $request->get("search");

        //where("state",$state)
        //->where("name","like","%".$search)->orWhere("surname","like","%".$search."%")->

        //condiciones para la busqueda de usuarios
        $users= User::filterAdvance($state,$search)->where("type_user",2)->orderby("id","desc")->paginate(20);

        return response()->json([
            "total"=> $users->total(),
            "users"=> $users,
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
        //se verifica si existe algun usuario con el mismo correo y retorna 400
        $user = User::where("email",$request->email)->first();
        if($user){
            return response()->json(["message" => 400 ]);
        //si no existe se crea el usuario y se retorna 200
        }else{
            $user = User::create($request->all());
            return response()->json(["message" => 200, "user" => $user]);
        }
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
        //se verifica si existe algun usuario con el mismo correo siempre que el id que se envia sea diferente
        $user = User::where("email",$request->email)->where("id","<>",$id)->first();
        if($user){
            return response()->json(["message" => 400 ]);
        //si no existe se crea el usuario y se retorna 200
        }else{
            $user = User::findOrFail($id);
            $user->update($request->all());
            return response()->json(["message" => 200, "user" => $user]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)    
    {   
        //busca al usurio por medio del Id
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(["message" => 200]);
    }
}
