<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Product\CategorieController;
use App\Http\Controllers\Product\ProductImagensController;
use App\Http\Controllers\Product\ProductGeneralController;
use App\Http\Controllers\Slider\SliderController;
use App\Http\Controllers\cupones\CuponesController;//ojo
use App\Http\Controllers\Product\ProductSizeColorsController;
use App\Http\Controllers\Ecommerce\HomeController;
use App\Http\Controllers\Ecommerce\Cart\CartShopController;
use App\Http\Controllers\Discount\DiscountController;
use App\Http\Controllers\Ecommerce\Client\AddressUserController;
use App\Http\Controllers\Ecommerce\Profile\ProfileController;
use App\Http\Controllers\Ecommerce\Profile\ReviewController;
use App\Http\Controllers\Ecommerce\Cart\WishListController;
use App\Http\Controllers\Sales\SalesController;
use App\Http\Controllers\Ecommerce\Sale\SaleController;
use App\Http\Controllers\ForgotPasswordController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//se crean los route para los controladores que interactuan con el jwt.
Route::group(['prefix' => 'users'], function($router) {
    //declaracion de rutas /api/users
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'loginAdmin']);
    Route::post('/login_ecommerce', [JWTController::class, 'loginEcommerce']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
    Route::post('/reset-password', [ForgotPasswordController::class, 'resetPassword'])->name('password.update');
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
    //declaracion de rutas /api/users/admin/*
    Route::group(['prefix' => 'admin'], function($router) {
        Route::get('/all', [UserController::class, 'index']);
        Route::post('/register', [UserController::class, 'store']);
        Route::put('/update/{id}', [UserController::class, "update"]);
        Route::delete('/delete/{id}', [UserController::class, "destroy"]);
    }); 
});


//rutas de productos
Route::group(['prefix' => 'products'], function($router) {
    Route::get('/show_product/{id}', [ProductGeneralController::class, 'show']);
    Route::get('/all', [ProductGeneralController::class, 'index']);
    Route::get('/get_info', [ProductGeneralController::class, 'get_info']);
    Route::post('/add', [ProductGeneralController::class, 'store']);
    Route::post('/update/{id}', [ProductGeneralController::class, 'update']);
    Route::delete('/delete/{id}',[ProductGeneralController::class, 'destroy']);
    //Rutas de galeria de imagenes
    Route::group(['prefix' => 'imgs'], function() {
        Route::post('/add', [ProductImagensController::class, 'store']);
        Route::delete('/delete/{id}', [ProductImagensController::class, 'destroy']);
    });
    //Rutas del inventario
    Route::group(['prefix' => 'inventario'], function() {
        Route::post('/add', [ProductSizeColorsController::class, 'store']); 
        Route::put('/update_size/{id}', [ProductSizeColorsController::class, 'update_size']);
        Route::delete('/delete_size/{id}', [ProductSizeColorsController::class, 'destroy_size']);
        //
        Route::put('/update/{id}', [ProductSizeColorsController::class, 'update']);
        Route::delete('/delete/{id}', [ProductSizeColorsController::class, 'destroy']);
    });
    //Rutas para las categorias
    Route::get('/categories/all', [CategorieController::class, 'index']);
    Route::post('/categories/add', [CategorieController::class, 'store']);
    Route::post('/categories/update/{id}', [CategorieController::class, 'update']);  
    Route::delete('/categories/delete/{id}', [CategorieController::class, 'destroy']);  
});

//Rutas de los SLIDERs
Route::group(['prefix' => 'sliders'], function($router) {
    Route::get('/all', [SliderController::class, 'index']);
    Route::post('/add', [SliderController::class, 'store']);
    Route::post('/update/{id}', [SliderController::class, 'update']);  
    Route::delete('/delete/{id}', [SliderController::class, 'destroy']);  
});

//Rutas de Cupones
Route::group(['prefix' => 'cupones'], function($router) {
    Route::get('/all', [CuponesController::class, 'index']);
    Route::get('/config_all', [CuponesController::class, 'config_all']);
    Route::get('/show/{id}', [CuponesController::class, 'show']);
    Route::post('/add', [CuponesController::class, 'store']);
    Route::post('/update/{id}', [CuponesController::class, 'update']);  
    Route::delete('/delete/{id}', [CuponesController::class, 'destroy']);  
});

//ecommerce
Route::group(["prefix" => "ecommerce"], function($router) {
    Route::get('/home', [HomeController::class, 'home']);
    Route::post('/list-products', [HomeController::class, 'list_product']);
    Route::get('/detail-product/{slug}', [HomeController::class, 'detail_product']);
    Route::get('/config_initial_filter', [HomeController::class, 'config_initial_filter']);
    Route::group(["prefix" => "cart"], function() {
        Route::get('/applycupon/{cupon}', [CartShopController::class, 'apply_cupon']);
        Route::resource('add', CartShopController::class);
    });

    //Wishlist
    Route::resource("/wishlist",WishListController::class);  
    
    //checkout
    Route::group(["prefix" => "checkout"], function() {
        Route::resource('/address_user', AddressUserController::class);
        Route::post('/sale', [SaleController::class, 'store']);
    });

    //profile
    Route::group(["prefix" => "profile"], function() {
        Route::get('/home', [ProfileController::class, 'index']);
        Route::post('/profile_update', [ProfileController::class, 'profile_update']); 
        Route::resource('/reviews', ReviewController::class);
    });
});

Route::post("sales/all", [SalesController::class, 'sale_all']);
Route::get("sale_mail/{id}", [SaleController::class, 'send_email']);

//Rutas de Descuestos
Route::group(['prefix' => 'descuentos'], function($router) {
    Route::get('/all', [DiscountController::class, 'index']);
    Route::get('/show/{id}', [DiscountController::class, 'show']);
    Route::post('/add', [DiscountController::class, 'store']);
    Route::put('/update/{id}', [DiscountController::class, 'update']);  
    Route::delete('/delete/{id}', [DiscountController::class, 'destroy']);
});



