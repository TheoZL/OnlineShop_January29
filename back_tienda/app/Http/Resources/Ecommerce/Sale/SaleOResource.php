<?php

namespace App\Http\Resources\Ecommerce\Sale;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Ecommerce\Sale\SaleStatusResource;

class SaleOResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->resource->id,
            "user" => [
                "id" => $this->resource->user->id,
                "full_name" => $this->resource->user->name. ' '.$this->resource->user->lastname,
            ],
            "method_payment" => $this->resource->method_payment,
            "currency_total" => $this->resource->currency_total,
            "currency_payment" => $this->resource->currency_payment,
            "total" => $this->resource->total, 
            "price_dolar" => $this->resource->price_dolar,
            "n_transaccion" => $this->resource->n_transaccion,
            "created_at" => $this->resource->created_at->format("Y/m/d"),
            "status" => new SaleStatusResource($this->resource->sale_status),
            "items" => $this->resource->sale_details->map(function($detail){  //map para que recorra toda la lista de items
                return [
                    "id" => $detail->id,
                    "title" => $detail->product->title,
                    "type_discount" => $detail->type_discount,
                    "discount" => $detail->discount,
                    "cantidad" => $detail->cantidad,
                    "product_size_id" => $detail->product_size_id,
                    "product_size" => $detail->product_size ? [
                        "id" => $detail->product_size->id,
                        "name" => $detail->product_size->name
                    ] : NULL,
                    "imagen" =>  env("APP_URL")."storage/".$detail->product->imagen,
                    "product_color_size_id" => $detail->product_color_size_id,
                    "product_color_size" => $detail->product_color_size ? [
                        "id" => $detail->product_color_size->id,
                        "name" => $detail->product_color_size->product_color->name
                    ] : NULL,
                    "code_cupon" => $detail->code_cupon,
                    "code_discount" => $detail->code_discount,
                    "precio_unitario" => $detail->precio_unitario,
                    "subtotal" => $detail->subtotal,
                    "total" => $detail->total,
                ];
            })
        ];
    }
}
