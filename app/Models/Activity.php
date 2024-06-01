<?php

namespace App\Models;

use App\Http\Requests\ActivityRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class Activity extends Model
{
    use HasFactory;

    protected $table = "activities";
    protected $fillable = ["building", "place", "date", "schedule"];
    protected $hidden = ["created_at", "updated_at"];

    function insertarActividad(ActivityRequest $request): RedirectResponse
    {
        $edificio = $request->input("edificio");
        $sitio = $request->input("sitio");
        $fecha = (object) $request->input("fecha");
        $horario = (object)  $request->input("horario");

        $horario = ($horario->hour < 10 ? "0" . $horario->hour : $horario->hour) .
            ":" . ($horario->minute < 10 ? "0" . $horario->hour : $horario->minute);

        $fecha = "$fecha->year-" . ($fecha->month < 10 ? "0" . $fecha->month : $fecha->month) .
            "-" . ($fecha->day < 10 ? "0" . $fecha->day : $fecha->day);

        $this->create(["building" => $edificio, "place" => $sitio, "date" => $fecha, "schedule" => $horario]);
        return redirect("/");
    }

    function obtenerActividades(int $edificio, string $fecha): JsonResponse
    {
        $actividades = $this->where(["date" => $fecha, "building" => $edificio])->get();
        foreach ($actividades as $a) {
            $a->date = date("d/m/Y", strtotime($a->date));
            $a->place = Place::select("name")->where("id", $a->place)->first();
        }
        return response()->json($actividades);
    }

    function eliminarActividad(Request $request): RedirectResponse
    {
        $this->where("id", $request->input("actividad"))->delete();
        return redirect("/");
    }
}
