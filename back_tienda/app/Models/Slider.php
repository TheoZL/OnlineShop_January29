<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Slider extends Model
{
    use SoftDeletes;
    protected $fillable = [
        "name",
        "imagen",
        "url",
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
}
