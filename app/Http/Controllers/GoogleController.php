<?php

namespace App\Http\Controllers;

use App\Models\GoogleModel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController
{
   private GoogleModel $googleModel;

   public function __construct()
   {
      $this->googleModel = new GoogleModel();
   }
   function iniciarSesion(): RedirectResponse
   {
      return Socialite::driver('google')->redirect();
   }

   function obtenerUsuario(): RedirectResponse
   {
      $usuario_google = Socialite::driver('google')->user();
      $nuevoUsuario = $this->googleModel->autenticarUsuario($usuario_google);
      return redirect($nuevoUsuario ? "/buscar-comunidad" : "/");
   }

   function cerrarSesion(): RedirectResponse
   {
      Auth::logout();
      return redirect("/");
   }
}
