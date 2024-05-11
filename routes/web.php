<?php

use App\Http\Controllers\AdivaController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\PerfilController;
use Illuminate\Support\Facades\Route;

Route::get("/", [AdivaController::class, "mostrarVistaInicial"]);

Route::get('/google_auth/redirect', [GoogleController::class, "iniciarSesion"]);
Route::get('/google_auth/callback', [GoogleController::class, "obtenerUsuario"]);
Route::get('/google_auth/logout', [GoogleController::class, "cerrarSesion"]);

Route::post("/subir-imagen", [PerfilController::class, "subirImagen"]);

Route::get("/politica-privacidad-y-cookies", [AdivaController::class, "mostrarPoliticas"]);
Route::get("/buscar-comunidad", [AdivaController::class, "buscarComunidad"]);
Route::post("/asignar-comunidad", [AdivaController::class, "asignarComunidad"]);
