<?php

namespace App\Http\Controllers;

use App\Models\GoogleModel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController
{
    function iniciarSesion(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    function obtenerUsuario(): RedirectResponse
    {
        $usuario_google = Socialite::driver('google')->user();
        GoogleModel::autenticarUsuario($usuario_google);
        return redirect("/");
    }

    function cerrarSesion(): RedirectResponse
    {
        Auth::logout();
        return redirect("/");
    }
}
