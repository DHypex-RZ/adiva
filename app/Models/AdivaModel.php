<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class AdivaModel extends Model
{
    use HasFactory;

    static function seleccionarVistaInicial(): InertiaResponse
    {
        return Inertia::render(Auth::user() !== null ? 'Adiva' : 'Presentacion');
    }
}
