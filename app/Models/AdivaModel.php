<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class AdivaModel
{
   use HasFactory;

   private Building $building;
   private Floor $floor;
   private Department $department;
   private Place $place;


   function __construct()
   {
      $this->building = new Building();
      $this->floor = new Floor();
      $this->department = new Department();
      $this->place = new Place();
   }

   function seleccionarVistaInicial(): InertiaResponse|RedirectResponse
   {
      $usuario = Auth::user();

      try {
         if ($usuario->building === null) return redirect("/buscar-comunidad");
      } catch (Exception $exception) {
      }

      if (($usuario !== null)) {
         $comunidad = $this->building->where(["id" => $usuario->building])->first();
         $comunidad->places = $this->place->where("building", $comunidad->id)->orderby("name")->get();
         return Inertia::render('Adiva', ["comunidad" => $comunidad]);
      } else return Inertia::render('Presentacion');
   }

   function tratarDatosComunidad(string $cp, string $tipo, string $direccion, string $numero): void
   {
      $edificio = $this->building->firstOrCreate([
         "cp" => $cp,
         "type" => $tipo,
         "address" => $direccion,
         "number" => $numero,
      ]);
      User::where("id", Auth::user()->getAuthIdentifier())->update(["building" => $edificio->id]);
   }

   function insertarDatosEdificio(int $id, int $pisos, int $departamentos): void
   {
      Building::where("id", $id)->update(["floors" => $pisos, "departments" => $departamentos]);
      Floor::insertarPisos($id, $pisos, $departamentos);
   }
}
