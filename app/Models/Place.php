<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Place extends Model
{
   use HasFactory;

   protected $table = "places";
   protected $fillable = ["building", "name"];
   protected $hidden = ["created_at", "updated_at"];

   function insertarSitio(Request $request): RedirectResponse
   {
      $this->create(["building" => $request->input("edificio"), "name" => $request->input("nombre")]);
      return redirect("/");
   }

   function eliminarSitio(Request $request): RedirectResponse
   {
      if (Auth::user()->getAuthIdentifier() == $request->input("admin")) {
         $this->where("id", $request->input("sitio"))->delete();
         Activity::where(["place" => $request->input("sitio"), "building" => $request->input("comunidad")])
            ->delete();
      }
      return redirect("/");
   }
}
