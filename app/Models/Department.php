<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
   use HasFactory;

   protected $table = "departments";
   protected $fillable = ["building", "floor", "department", "user"];
   protected $hidden = ["created_at", "updated_at"];

   static function insertarDepartamentos(int $edificio, int $piso, int $departamentos): void
   {
      for ($i = 1; $i <= $departamentos; $i++)
         Department::create(["building" => $edificio, "floor" => $piso, "department" => $i]);
   }

   static function actualizarDepartamentos(int $edificio, int $piso, int $departamentos): void
   {
      $dataAnterior = Department::where(["building" => $edificio, "floor" => $piso])
         ->select(["user", "floor", "department"])->get();
      Department::where(["building" => $edificio, "floor" => $piso])->delete();
      for ($i = 1; $i <= $departamentos; $i++) {
         Department::create(["building" => $edificio, "floor" => $piso, "department" => $i]);
      }
      foreach ($dataAnterior as $d) {
         Department::where(["building" => $edificio, "floor" => $d->floor, "department" => $d->department])
            ->update(["user" => $d->user]);
      }
   }
}
