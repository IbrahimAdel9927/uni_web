<?php

use App\Http\Controllers\api\authcontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use app\Http\Controllers\api\authcontroller;
use App\Http\Controllers\studentcontroller;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/usersignup', [authcontroller::class, 'signup']);

Route::post('/userlogin', [authcontroller::class, 'login']);

Route::post('/students', [studentcontroller::class, 'create']);

Route::get('/students',[StudentController::class,'show']);

Route::put('/students',[StudentController::class,'update']);

Route::delete('/students/{id}',[StudentController::class,'delete']);
