<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class Incident extends Model
{
    use HasFactory;

    protected $table = "incidents";
    protected $fillable = ["building", "comment", "created_at", "user_name"];
    protected $hidden = ["updated_at"];

    function insertarIncidente(Request $request): RedirectResponse
    {
        $this->create([
            "building" => $request->input("edificio"),
            "comment" => $request->input("incidente"),
            "user_name" => $request->input("nombre")
        ]);
        return redirect("/");
    }

    function eliminarIncidente(Request $request): RedirectResponse
    {
        $this->where("id", $request->input("incidente"))->delete();
        return redirect("/");
    }
}
