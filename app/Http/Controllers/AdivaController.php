<?php

namespace App\Http\Controllers;

use App\Http\Requests\ComunidadRequest;
use App\Models\AdivaModel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class AdivaController
{
   private AdivaModel $adivaModel;

   public function __construct()
   {
      $this->adivaModel = new AdivaModel();
   }

   function mostrarVistaInicial(): InertiaResponse|RedirectResponse
   {
      return $this->adivaModel->seleccionarVistaInicial();
   }

   function mostrarPoliticas(): InertiaResponse
   {
      return Inertia::render("Politicas");
   }

   function buscarComunidad(): InertiaResponse|RedirectResponse
   {
      if (Auth::user()->building !== null) return redirect("/");
      else return Inertia::render("Comunidad");
   }

   function asignarComunidad(ComunidadRequest $request): RedirectResponse
   {
      $data = [
         $request->input("cp"), $request->input("tipo"),
         $request->input("direccion"), $request->input("numero")
      ];
      $this->adivaModel->tratarDatosComunidad(...$data);
      return redirect("/");
   }


   function insertarDatosEdificio(Request $request): RedirectResponse
   {
      $data = [$request->input("edificio"), $request->input("pisos"), $request->input("departamentos")];
      if ($request->input("actualizando")) $this->adivaModel->acutalizarDatosEdificio(...$data);
      else $this->adivaModel->insertarDatosEdificio(...$data);
      return redirect("/");
   }

   function asiganarAdminstrador(Request $request): RedirectResponse
   {
      $idUsuario = $request->input("user");
      $this->adivaModel->actualizarAdministrador($idUsuario);
      return redirect("/");
   }

   function expulsarUsuario(Request $request): RedirectResponse
   {
      $this->adivaModel->expulsarUsuario($request->input("usuario"));
      return redirect("/");
   }
}
