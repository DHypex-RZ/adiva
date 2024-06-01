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

   function insertarPisos(int $edificio, int $pisos, int $departamentos): void
   {
      for ($i = 1; $i <= $pisos; $i++) {
         $this->create(["building" => $edificio, "floor" => $i]);
         Department::insertarDepartamentos($edificio, $i, $departamentos);
      }
   }

   function actualizarPisos(int $edificio, int $pisos, int $departamentos): void
   {
      $this->where("building", $edificio)->delete();
      for ($i = 1; $i <= $pisos; $i++) {
         $this->create(["building" => $edificio, "floor" => $i]);
         Department::actualizarDepartamentos($edificio, $i, $departamentos);
      }
   }

   function obtenerPisos(int $edificio): Collection
   {
      $pisos = $this->where("building", $edificio)->get();

      foreach ($pisos as $p) {
         $p->department = Department::where("floor", $p->floor)->get();
         foreach ($p->department as $d) {
            $d->user = User::where("id", $d->user)->select(["image", "name", "id"])->first();
         }
      }

      return $pisos;
   }
}
