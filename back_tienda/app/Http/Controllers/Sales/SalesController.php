<?php

namespace App\Http\Controllers\Sales;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Ecommerce\Sale\SaleOCollection;
use App\Models\Products\Categorie;
use App\Models\Sale\Sale;

class SalesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function sale_all(Request $request)
    {
        $search = $request->search;
        $categorie_id = $request->categorie_id;
        $start_date = $request->start_date;
        $end_date = $request->end_date;

        $orders = Sale::filterAdvance($search,$categorie_id,$start_date,$end_date)->orderBy("id","desc")->get();
        $categories = Categorie::orderBy("id","desc")->get();
        return response()->json(["categories" => $categories,"orders" => SaleOCollection::make($orders)]);
    }
}
