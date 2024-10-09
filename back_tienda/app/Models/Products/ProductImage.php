<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ProductImage extends Model
{
    use SoftDeletes;
    protected $fillable=[
        "file_name",
        "imagen",
        "size",
        "type",
        "product_id",
    ]; //Se definen los campos que se van a utilizar

    //se definen las fechas y hores del crear y actualizar
    public function setCreatedAtAttribute($value){
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["created_at"] = Carbon::now();
    }

    public function setUpdatedAtAttribute($value){
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["updated_at"] = Carbon::now();
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }

}
