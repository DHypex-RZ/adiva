<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class AdivaController extends Controller
{
   function mostrarInicio(): InertiaResponse
   {
      return Inertia::render("Inicio");
   }

   public function mostrarPerfilUsuario()
   {

   }

   public function iniciarSesion()
   {

   }
}
