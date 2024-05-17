<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
   use HasFactory;

   protected $table = "floors";
   protected $fillable = ["building", "floor"];
   protected $hidden = ['password', 'remember_token'];

   static function insertarPisos(int $edificio, int $pisos, $departamentos)
   {
      for ($i = 1; $i <= $pisos; $i++) {
         Floor::create(["building" => $edificio, "floor" => $i]);
         Department::insertarDepartamentos($edificio, $i, $departamentos);
      }
   }

   function obtenerPisos(int $edificio)
   {
      $pisos = Floor::where("building", $edificio)->get();

      foreach ($pisos as $p) {
         $p->department = Department::where("floor", $p->floor)->get();
         foreach ($p->department as $d) {
            $d->user = User::where("id", $d->user)->select(["image", "email"])->first();
         }
      }

      return $pisos;
   }
}
