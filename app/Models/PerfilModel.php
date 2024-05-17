<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;

class PerfilModel
{
   use HasFactory;

   function editarImagen(int $id_usuario, string $imagen): void
   {
      User::where(["id" => $id_usuario])
         ->update(["image" => "images/" . $imagen]);
   }
}
