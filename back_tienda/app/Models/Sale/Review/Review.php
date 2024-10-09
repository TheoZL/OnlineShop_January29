<?php

namespace App\Models\Sale\Review;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use Carbon\Carbon;
use App\Models\Products\Product;
use App\Models\Sale\SaleDetail;

class Review extends Model
{
    protected $fillable = [
        "product_id",
        "user_id",
        "sale_detail_id",
        "message",
        "rating"
    ];

    public function setCreatedAtAttribute($value)
    {
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["created_at"] = Carbon::now();
    }

    public function setUpdatedAtAttribute($value)
    {
        date_default_timezone_set("America/Costa_Rica");
        $this->attributes["updated_at"] = Carbon::now();
    }

        //relaciones
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function sale_detail()
    {
        return $this->belongsTo(SaleDetail::class);
    }
}
