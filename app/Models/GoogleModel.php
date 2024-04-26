<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Contracts\User as GoogleUser;

class GoogleModel extends Model
{
    use HasFactory;

    static function autenticarUsuario(GoogleUser $datos): void
    {
        $usuario = User::updateOrCreate([
            "google_id" => $datos->id
        ], [
            "name" => $datos->name,
            "email" => $datos->email
        ]);

        Auth::login($usuario);
    }
}
