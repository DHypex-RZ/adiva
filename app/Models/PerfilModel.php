<?php

namespace App\Models;

use Illuminate\Http\UploadedFile;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use App\Models\User;

class PerfilModel extends Model
{
    use HasFactory;

    static function editarImagen(Authenticatable $usuario, string $imagen): void
    {
        User::where(["id" => $usuario->getAuthIdentifier()])
            ->update(["image" => "images/" . $imagen]);
    }
}
