<?php

namespace App\Models\Products;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Discount\DiscountCategorie;
use App\Models\Products\Product;

class Categorie extends Model
{
    use SoftDeletes;
    protected $fillable=[
        "name",
        "imagen",
        "icono",
    ];

    public function setCreatedAtAttribute($value){
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["created_at"]= Carbon::now();
    }
    public function setUpdateAtAttribute($value){
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["updated_at"]= Carbon::now();
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function discountcategories()
    {
        return $this->hasMany(DiscountCategorie::class);
    }
}
