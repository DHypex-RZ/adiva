<?php

use App\Http\Controllers\AdivaController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\PerfilController;
use App\Models\Floor;
use App\Models\Place;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get("/", [AdivaController::class, "mostrarVistaInicial"]);
Route::get("/politica-privacidad-y-cookies", [AdivaController::class, "mostrarPoliticas"]);
Route::get("/buscar-comunidad", [AdivaController::class, "buscarComunidad"])->middleware("auth");
Route::post("/asignar-comunidad", [AdivaController::class, "asignarComunidad"])->middleware("auth");
Route::post("/info-comunidad", [AdivaController::class, "insertarDatosEdificio"])->middleware("auth");

Route::get("/pisos/{edificio}", [Floor::class, "obtenerPisos"])->middleware("auth");
Route::post("/mudarse", [User::class, "asiganarDepartamentoUsuario"])->middleware("auth");
Route::post("/sitios", [Place::class, "insertarSitio"]);

Route::get('/google_auth/redirect', [GoogleController::class, "iniciarSesion"])->name("login");
Route::get('/google_auth/callback', [GoogleController::class, "obtenerUsuario"]);
Route::get('/google_auth/logout', [GoogleController::class, "cerrarSesion"])->middleware("auth");

Route::post("/subir-imagen", [PerfilController::class, "subirImagen"])->middleware("auth");
