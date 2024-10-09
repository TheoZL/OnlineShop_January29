<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Models\Role;
use App\Models\Client\AddressUser;


class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Los atributos que son asignables en grupo.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'lastname',
        'state',
        'type_user',
        'email',
        'password',
        'avatar',
        'birthday',
        'gender',
        'phone'
    ];


    public function setPasswordAttribute($password)
    {
        if ($password)
        {
            $this->attributes["password"] = bcrypt($password);
        }
    }

    public function setIdAttribute($id)
    {
        if ($password)
        {
            $this->attributes["id"] = bcrypt($id);
        }
    }

    //
    //Se agregan estas funciones para poder agregar datos extra al token como numero de telefono o demas, esto para transportar al front

    /**
     * Obtiene el identificador que se almacenará en el reclamo de asunto del JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    //se crea la relacion con la tabla de roles
    public function role()
    {
        //se retrona la clase Role de Role.php
        return $this->belongsTo(Role::class, 'type_user');
        
    }




    /**
     * Devuelve una matriz del valor clave que contenga cualquier notificación personalizada que se agregará al JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Los atributos que deben ocultarse para la serialización.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     *  Los atributos que deben emitirse.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //función para el filtro en la busqueda de usuarios
    public function scopefilterAdvance($query,$state,$search){
        if($state){
            $query->where('state',$state);
        }
        if($search){
            $query->where("name","like","%".$search."%")->orWhere("lastname","like","%".$search."%");
        }
        return $query;
    }

    public function address()
    {
        return $this->hasMany(AddressUser::class);
    }
}
