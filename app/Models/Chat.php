<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class Chat extends Model
{
    use HasFactory;

    protected $table = "chats";
    protected $fillable = ["building", "user", "comment"];
    protected $hidden = ["created_at", "updated_at"];

    function insertarMensaje(Request $request): RedirectResponse
    {
        $mensaje = $this->create([
            "building" => $request->input("edificio"),
            "user" => $request->input("usuario"),
            "comment" => $request->input("comentario")
        ]);
        return redirect("/");
    }

    function obtenerMensajes(string $edificio): JsonResponse
    {
        $mensajes = $this->where("building", $edificio)->get();
        foreach ($mensajes as $m) {
            $m->image = (User::where("id", $m->user)->select(["image"])->first())->image;
        }
        return response()->json($mensajes);
    }
}
