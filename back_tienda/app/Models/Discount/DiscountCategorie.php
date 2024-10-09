<?php

namespace App\Models\Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use App\Models\Products\Categorie;

class DiscountCategorie extends Model
{
    protected $fillable = [
        "discount_id",
        "categorie_id",
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

    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }
}
