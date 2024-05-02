<?php

namespace App\Http\Controllers;

use App\Models\PerfilModel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Auth;
use Inertia\Response as InertiaResponse;

class PerfilController
{
    function subirImagen(Request $request): RedirectResponse
    {
        $usuario = Auth::user();
        $imagen = $request->file("imagen");
        $archivo = "user-$usuario->email.jpg";
        $imagen->storeAs("images", $archivo, "public_uploads");
        PerfilModel::editarImagen($usuario, $archivo);
        return redirect("/");
    }
}
