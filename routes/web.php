<?php

use App\Http\Controllers\AdivaController;
use App\Http\Controllers\GoogleController;
use App\Models\Floor;
use App\Models\Place;
use App\Models\User;
use App\Models\Activity;
use App\Models\Chat;
use App\Models\Incident;
use Illuminate\Support\Facades\Route;

Route::get("/", [AdivaController::class, "mostrarVistaInicial"]);
Route::get("/politica-privacidad-y-cookies", [AdivaController::class, "mostrarPoliticas"]);
Route::get("/buscar-comunidad", [AdivaController::class, "buscarComunidad"])->middleware("auth");
Route::post("/asignar-comunidad", [AdivaController::class, "asignarComunidad"])->middleware("auth");
Route::post("/info-comunidad", [AdivaController::class, "insertarDatosEdificio"])->middleware("auth");

Route::get("/pisos/{edificio}", [Floor::class, "obtenerPisos"])->middleware("auth");
Route::post("/mudarse", [User::class, "asiganarDepartamentoUsuario"])->middleware("auth");
Route::post("/editar-perfil", [User::class, "editarPerfil"])->middleware("auth");
Route::post("/sitios", [Place::class, "insertarSitio"]);
Route::post("/actividades", [Activity::class, "insertarActividad"])->middleware("auth");
Route::get("/actividades/{edificio}/{fecha}", [Activity::class, "obtenerActividades"])->middleware("auth");
Route::post("/incidentes", [Incident::class, "insertarIncidente"])->middleware("auth");
Route::get("/incidentes/{edificio}", [Incident::class, "obtenerIncidentes"])->middleware("auth");
Route::post("/mensajes", [Chat::class, "insertarMensaje"])->middleware("auth");
Route::get("/mensajes/{edificio}", [Chat::class, "obtenerMensajes"])->middleware("auth");

Route::get('/google_auth/redirect', [GoogleController::class, "iniciarSesion"])->name("login");
Route::get('/google_auth/callback', [GoogleController::class, "obtenerUsuario"]);
Route::get('/google_auth/logout', [GoogleController::class, "cerrarSesion"])->middleware("auth");
