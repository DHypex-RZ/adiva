<?php

use App\Http\Controllers\AdivaController;
use App\Http\Controllers\GoogleController;
use Illuminate\Support\Facades\Route;

Route::get("/", [AdivaController::class, "mostrarVistaInicial"]);

Route::get('/google_auth/redirect', [GoogleController::class, "iniciarSesion"]);
Route::get('/google_auth/callback', [GoogleController::class, "obtenerUsuario"]);
Route::get('/google_auth/logout', [GoogleController::class, "cerrarSesion"]);
