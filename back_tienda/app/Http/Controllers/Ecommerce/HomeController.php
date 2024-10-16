<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Products\Product;
use App\Models\Products\Categorie;
use App\Http\Resources\Ecommerce\Product\ProductEResource;

use App\Models\Sale\Review\Review;
use Illuminate\Support\Facades\DB;
use App\Models\Products\ProductSize;
use App\Models\Products\ProductColor;


class HomeController extends Controller
{
    public function home()
    {
        //obtener todos los slider 
        $sliders = Slider::orderBy("id","desc")->get();
        //obtener todas las categorias, filtrando a max 4
        $categories = Categorie::withCount("products")->having("products_count",">",0)->orderBy("id","desc")->take(4)->get();
        //se agrupan los productos a sus respectivas categorias
        $group_categories_product = collect([]);
        // dd($categories);
        foreach ($categories as $key => $categorie) {
            //se traen 3 productos de cada categoria
            $products = $categorie->products->take(3);
            //array de categoria con sub array de productos
            $group_categories_product->push([
                "id" => $categorie->id,
                "name" => $categorie->name,
                "products" => $products->map(function($product) {

                    $discount_g = null;
                    if($product->discount_p && $product->discount_c){
                        $discount_g =$product->discount_p;
                    }else{
                        if($product->discount_p && !$product->discount_c){
                            $discount_g =$product->discount_p;
                        }else{
                            if(!$product->discount_p && $product->discount_c){
                                $discount_g =$product->discount_c;
                            }
                        }
                    }

                    return [
                        "id" => $product->id,
                        "title" => $product->title,
                        "slug" => $product->slug,
                        "price_colones" => $product->price_colones,
                        "price_usd" => $product->price_usd,
                        "imagen" => env("APP_URL")."storage/".$product->imagen,
                        "reviews_count" => $product->reviews_count,
                        "avg_rating" => round($product->avg_rating),
                    ];
                }),
            ]);
        }
        //trae 4 productos de manera aletoria
        $products_aletorio_a = Product::inRandomOrder()->limit(4)->get();
        //trae 8 productos de manera aletoria
        $products_aletorio_b = Product::inRandomOrder()->limit(8)->get();

        return response()->json([
            //trae los sliders para visualizacion
            "sliders" => $sliders->map(function($slider){
                return [
                    "id" => $slider->id,
                    "url" => $slider->url,
                    "name" => $slider->name,
                    "imagen" => env("APP_URL")."storage/".$slider->imagen,
                ];
            }),
            "group_categories_product" => $group_categories_product,
            "products_aletorio_a" => $products_aletorio_a->map(function($product){
                return ProductEResource::make($product);
            }),
            "products_aletorio_b" => $products_aletorio_b->map(function($product){
                return ProductEResource::make($product);
            }),
        ]);

    }
    //NOTA, CAMBIAR LAS COMENTADAS CUANDO SE CORRIGA EL GROUP BY DE LA BD EN EL SERVIDOR
    public function detail_product($slug_product)
    {
        $product = Product::where("slug",$slug_product)->first();
        if(!$product){
            return response()->json(["message" => 403]);
        }
        //se traen productos de la misma categoria, siempre que el id no sea el mismo del producto mostrado
        $product_relateds = Product::where("id","<>",$product->id)->where("categorie_id",$product->categorie_id)->orderBy("id","asc")->get();

        //$reviews = Review::where("product_id",$product->id)->orderBy("id","desc")->paginate(13);
        $reviews = Review::where("product_id",$product->id)->paginate(13);
        //Cuenta la cantidad de rating
        //$reviews_count = Review::select("rating",DB::raw("count(*) as total"))->where("product_id",$product->id)->groupBy("rating")->orderBy("id","desc")->get();
        $reviews_count = Review::select("rating",DB::raw("count(*) as total"))->where("product_id",$product->id)->groupBy("rating")->get();

        return response()->json(["message" => 200 ,
            "product_detail" => ProductEResource::make($product),
            "product_relateds" => $product_relateds->map(function($product){
                return ProductEResource::make($product);
            }),
            "reviews" => $reviews->map(function($review){
                return [
                    "id" => $review->id,
                    "user" => [
                        "id" => $review->user->id,
                        "full_name" => $review->user->name . '  ' .  $review->user->surname,
                        "avatar" => env("APP_URL")."storage/".$review->user->avatar,
                    ],
                    "message" => $review->message,
                    "rating" => $review->rating,
                    "created_at" => $review->created_at->format("Y/m/d"),
                ];
            }),
            "reviews_count" => $reviews_count,
        ]);
    }

    public function list_product(Request $request)
    {
        $categories = $request->categories;
        $review = $request->review;
        $min_price = $request->min_price;
        $max_price = $request->max_price;
        $size_id = $request->size_id;
        $color_id = $request->color_id;
        $search_product = $request->search_product;
        // ->inRandomOrder() withCount("reviews")->
        $products = Product::filterAdvance($categories,$review,$min_price,$max_price,$size_id,$color_id,$search_product)->get();

        return response()->json(["products" => $products->map(function($product){
            return  ProductEResource::make($product);
        })]);

    }

    public function config_initial_filter()
    {
        $categories = Categorie::withCount("products")->orderBy("id","desc")->get();

        $reviews = Review::select("rating", DB::raw("count(*) as total"))
                ->groupBy("rating")
                ->orderBy("rating", "desc")
                ->get();


                $sizes = ProductSize::select("name", DB::raw("count(*) as total"))
                ->groupBy("name")
                ->orderBy("name", "desc")
                ->get();

        $colores = ProductColor::withCount("product_color_sizes")->orderBy("id","desc")->get();
        return response()->json(["colores" => $colores,"sizes" => $sizes, "categories" => $categories , "reviews" => $reviews]);
    }

}
