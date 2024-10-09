<?php

namespace App\Models\Sale;

use App\Models\User;
use Carbon\Carbon;
use App\Models\Products\Product;
use App\Models\Sale\Review\Review;
use App\Models\Products\ProductSize;
use Illuminate\Database\Eloquent\Model;
use App\Models\Products\ProductColorSize;
use Illuminate\Database\Eloquent\SoftDeletes;

class SaleDetail extends Model
{
    use SoftDeletes;
    protected $fillable = [
        "sale_id",
        "product_id",
        "type_discount",
        "discount",
        "cantidad",
        "product_size_id",
        "product_color_size_id",
        "code_cupon",
        "code_discount",
        "precio_unitario",
        "subtotal",
        "total",
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

    public function client()
    {
        return $this->belongsTo(User::class,"user_id");
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function product_size()
    {
        return $this->belongsTo(ProductSize::class);
    }
    public function product_color_size()
    {
        return $this->belongsTo(ProductColorSize::class);
    }

    public function review()
    {
        return $this->hasOne(Review::class);
    }
}
