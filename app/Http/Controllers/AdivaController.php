<?php

namespace App\Http\Controllers;

use App\Models\AdivaModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class AdivaController
{
    function mostrarVistaInicial(): InertiaResponse
    {
        return AdivaModel::seleccionarVistaInicial();
    }

    function mostrarPoliticas(): InertiaResponse
    {
        return Inertia::render("Politicas");
    }
}
