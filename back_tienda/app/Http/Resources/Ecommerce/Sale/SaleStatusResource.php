<?php

namespace App\Http\Resources\Ecommerce\Sale;

use Illuminate\Http\Resources\Json\JsonResource;

class SaleStatusResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "descripcion" => $this->descripcion,
        ];
    }
}
