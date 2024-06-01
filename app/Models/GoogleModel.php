<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\User as GoogleUser;
use Illuminate\Http\Request;

class GoogleModel
{
   use HasFactory;

   function autenticarUsuario(GoogleUser $datos): bool
   {
      $usuario = User::where('google_id', $datos->id)->first();

      if (!$usuario) {
         $usuario = User::create([
            "google_id" => $datos->id,
            "name" => $datos->name,
            "email" => $datos->email,
         ]);
      }

      User::where('building', $usuario->building)
         ->whereNotNull('admin_time')
         ->whereDate('admin_time', "<=", now()->toDateString())
         ->update(['admin' => false, 'admin_time' => null]);

      Auth::login($usuario);

      return $usuario->building === null;
   }

   function eliminarCuenta(Request $request)
   {
      User::where(["id" => $request->input("id"), "email" => $request->input("email")])->delete();
   }
}
