<?php

use App\Http\Controllers\AdivaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__ . '/auth.php';

Route::get("/", [AdivaController::class, "mostrarInicio"])->name("inicio");

Route::get("/iniciar_sesion", [AdivaController::class, "iniciarSesion"])->name("login");
Route::post("/iniciar_sesion/verificar_usuario", [UsuarioController::class, "verificarUsuario"])->name("iniciar.sesion");

Route::middleware("auth:sanctum")->group(function () {
   Route::post("/cerrar_sesion", [UsuarioController::class, "cerrarSesion"])->name("cerrar.sesion");
   Route::get("/perfil", [AdivaController::class, "mostrarPerfilUsuario"])->name("perfil");
});
