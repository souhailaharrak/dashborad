<?php
use App\Http\Controllers\TacheController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::resource('/tache',tacheController::class);

Route::get('tache',[TacheController::class,'index']);
Route::post('tache/store',[TacheController::class,'store']);
Route::put('tache/update/{id}',[TacheController::class,'update']);
Route::delete('tache/delete/{id}',[TacheController::class,'destroy']);