<?php

namespace App\Http\Resources\Ecommerce\Product;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductEResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // logica para controlar descuento descuento
        $discount_g = null;
        if($this->resource->discount_p && $this->resource->discount_c){
            $discount_g =$this->resource->discount_p;
        }else{
            if($this->resource->discount_p && !$this->resource->discount_c){
                $discount_g =$this->resource->discount_p;
            }else{
                if(!$this->resource->discount_p && $this->resource->discount_c){
                    $discount_g =$this->resource->discount_c;
                }
            }
        }

        return [
            "id" => $this->id,
            "title" => $this->resource->title,
            "categorie_id" => $this->resource->categorie_id,
            "categorie" => [
                "id" => $this->resource->categorie->id,
                "icono" => $this->resource->categorie->icono,
                "name" => $this->resource->categorie->name,
            ],
            "slug" => $this->resource->slug,
            "sku" => $this->resource->sku,
            "price_colones" => $this->resource->price_colones,
            "price_usd" => $this->resource->price_usd,
            "resumen" => $this->resource->resumen,
            "description" => $this->resource->description,
            "imagen" => env("APP_URL")."storage/".$this->resource->imagen,
            "stock" => $this->resource->stock,
            "checked_inventario" => $this->resource->type_inventario,
            "reviews_count" => $this->resource->reviews_count,
            "avg_rating" => round($this->resource->avg_rating),
            //"discount_p" => $this->resource->discount_p,
            //"discount_c" => $this->resource->discount_c,
            "discount_g" => $discount_g,
            "images" => $this->resource->images->map(function($img){
                return [
                    "id" => $img->id,
                    "file_name" => $img->file_name,
                    "imagen" => env("APP_URL")."storage/".$img->imagen,
                    "size" => $img->size,
                    "type" => $img->type,
                ];
            }),
            "sizes" => $this->resource->sizes->map(function($size){
                return [
                    "id" => $size->id,
                    "name" => $size->name,
                    "total" => $size->product_size_colors->sum("stock"),
                    "variaciones" => $size->product_size_colors->map(function($var){
                        return [
                            "id" => $var->id,
                            "product_color_id" => $var->product_color_id,
                            "product_color" => $var->product_color,
                            "stock" => $var->stock,
                        ];
                    }),
                ];
            }),
        ];
    }
}
