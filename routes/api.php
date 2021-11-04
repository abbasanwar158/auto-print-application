<?php

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

Route::get('/users', [App\Http\Controllers\api\UserController::class, 'index']);
Route::post('/user/new', [App\Http\Controllers\api\UserController::class, 'store']);
Route::post('/user/update/{id}', [App\Http\Controllers\api\UserController::class, 'update']);
Route::delete('/user/delete/{id}', [App\Http\Controllers\api\UserController::class, 'destroy']);
Route::get('/user/{id}', [App\Http\Controllers\api\UserController::class, 'show']);
