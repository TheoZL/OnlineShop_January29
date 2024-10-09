<?php

namespace App\Models\Sale;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale_Status extends Model
{

    protected $table = 'sale_status';

    protected $fillable = [
        "id",
        "descripcion",
    ];

    public function sales()
    {
        return $this->hasMany(Sale::class, 'status');
    }
}
