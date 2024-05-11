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

    function seleccionarVistaInicial(): InertiaResponse|RedirectResponse
    {
        $usuario = Auth::user();


        try {
            if ($usuario->building_id === null) return redirect("/buscar-comunidad");
        } catch (Exception $exception) {    }

        return Inertia::render(($usuario !== null) ? 'Adiva' : 'Presentacion');
    }

    function tratarDatosComunidad(string $cp, string $tipo, string $direccion, string $numero): void
    {
        $edificio = Building::firstOrCreate(["cp" => $cp, "type" => $tipo, "address" => $direccion, "number" => $numero]);
        User::where("id", Auth::user()->getAuthIdentifier())->update(["building_id" => $edificio->id]);
    }
}
