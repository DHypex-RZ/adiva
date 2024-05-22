<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

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
}
