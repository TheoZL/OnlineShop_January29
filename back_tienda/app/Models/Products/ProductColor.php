<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ProductColor extends Model
{
    use SoftDeletes;
    protected $fillable= [
        "name",
        "code",
    ];

    public function setCreatedAtAttribute($value){
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["created_at"] = Carbon::now();
    }

    public function setUpdatedAtAttribute($value){
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["updated_at"] = Carbon::now();
    }

    public function product_color_sizes()
    {
        return $this->hasMany(ProductColorSize::class);
    }

}
