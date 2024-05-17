<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\User as GoogleUser;

class GoogleModel
{
   use HasFactory;

   function autenticarUsuario(GoogleUser $datos): bool
   {
      $usuario = User::updateOrCreate([
         "google_id" => $datos->id
      ], [
         "name" => $datos->name,
         "email" => $datos->email,
      ]);

      Auth::login($usuario);

      return $usuario->building_id === null;
   }
}
