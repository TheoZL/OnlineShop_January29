<?php

namespace App\Models\Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Products\Product;
use Carbon\Carbon;

class DiscountProduct extends Model
{
    protected $fillable = [
        "discount_id",
        "product_id",
    ];

    public function setCreatedAtAttribute($value)
    {
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["created_at"]= Carbon::now();
    }
    public function setUpdatedAtAttribute($value)
    {
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["updated_at"]= Carbon::now();
    }

    public function discount()
    {
        return  $this->belongsTo(Discount::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
