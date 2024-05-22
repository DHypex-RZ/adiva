<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class Place extends Model
{
   use HasFactory;

   protected $table = "places";
   protected $fillable = ["building", "name"];
   protected $hidden = ["created_at", "updated_at"];

   function insertarSitio(Request $request): RedirectResponse
   {
      Place::create(["building" => $request->input("edificio"), "name" => $request->input("nombre")]);
      return redirect("/");
   }
}
