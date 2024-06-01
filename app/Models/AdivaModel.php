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
   private Incident $incident;
   private Chat $chat;
   private User $user;


   function __construct()
   {
      $this->building = new Building();
      $this->floor = new Floor();
      $this->department = new Department();
      $this->place = new Place();
      $this->incident = new Incident();
      $this->chat = new Chat();
      $this->user = new User();
   }

   function seleccionarVistaInicial(): InertiaResponse|RedirectResponse
   {
      $usuario = Auth::user();

      try {
         if ($usuario->building === null) return redirect("/buscar-comunidad");
      } catch (Exception $exception) {
      }

      if (($usuario !== null)) {
         $comunidad = $this->building->find($usuario->building);
         $comunidad->places = $this->place->where("building", $comunidad->id)->orderby("name")->get();
         $comunidad->incidents = $this->incident
            ->selectRaw("DAY(created_at) day, MONTH(created_at) month, YEAR(created_at) year, comment, id, user_name")
            ->where("building", $usuario->building)->whereMonth("created_at", date("m"))->get();
         $comunidad->admin = $this->user->where('building', $comunidad->id)
            ->where('admin', true)
            ->exists();

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
      $this->building->where("id", $id)->update(["floors" => $pisos, "departments" => $departamentos]);
      $this->floor->insertarPisos($id, $pisos, $departamentos);
   }

   function acutalizarDatosEdificio(int $id, int $pisos, int $departamentos): void
   {
      $edificio = $this->building->find($id);
      $nuevosPisos = $edificio->floors + $pisos;
      $nuevosDepartamentos = $edificio->departments + $departamentos;
      $this->building->where("id", $id)->update(["floors" => $nuevosPisos, "departments" => $nuevosDepartamentos]);
      $this->floor->actualizarPisos($id, $nuevosPisos, $nuevosDepartamentos);
   }

   function actualizarAdministrador($usuario): void
   {
      $this->user->where("id", $usuario)->update([
         "admin" => true, "admin_time" => date('Y-m-d', strtotime('+1 month'))
      ]);
   }

   function expulsarUsuario($usuario): void
   {
      $this->user->where("id", $usuario)->update(["building" =>  null]);
      $this->department->where("user", $usuario)->update(["user" => null]);
   }
}
