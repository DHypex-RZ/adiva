<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
   use HasFactory;

   protected $table = "floors";
   protected $fillable = ["building", "floor"];
   protected $hidden = ["created_at", "updated_at"];

   static function insertarPisos(int $edificio, int $pisos, $departamentos): void
   {
      for ($i = 1; $i <= $pisos; $i++) {
         Floor::create(["building" => $edificio, "floor" => $i]);
         Department::insertarDepartamentos($edificio, $i, $departamentos);
      }
   }

   function obtenerPisos(int $edificio): Collection
   {
      $pisos = Floor::where("building", $edificio)->get();

      foreach ($pisos as $p) {
         $p->department = Department::where("floor", $p->floor)->get();
         foreach ($p->department as $d) {
            $d->user = User::where("id", $d->user)->select(["image", "name"])->first();
         }
      }

      return $pisos;
   }
}
