<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsuarioController extends Controller
{

   public function cerrarSesion(): RedirectResponse
   {
      Auth::logout();
      return to_route("inicio");
   }

   public function verificarUsuario()
   {

   }
}
