<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
   use HasFactory, Notifiable;

   /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
   protected $fillable = [
      'name',
      'email',
      'password',
      'google_id',
      'image'
   ];

   /**
    * The attributes that should be hidden for serialization.
    *
    * @var array<int, string>
    */
   protected $hidden = ['password', 'remember_token', "created_at", "updated_at"];

   /**
    * Get the attributes that should be cast.
    *
    * @return array<string, string>
    */
   protected function casts(): array
   {
      return [
         'email_verified_at' => 'datetime',
         'password' => 'hashed',
      ];
   }

   function asiganarDepartamentoUsuario(Request $request): RedirectResponse
   {
      User::where("id", $request->input("usuario"))->update(["department" => true]);
      Department::where("id", $request->input("departamento"))->update(["user" => $request->input("usuario")]);
      return redirect("/");
   }

   function editarPerfil(Request $request): RedirectResponse
   {
      $usuario = Auth::user();

      if ($request->hasFile("imagen")) {
         $imagen = $request->file("imagen");
         $archivo = "user-$usuario->email.jpg";
         $imagen->storeAs("images", $archivo, "public_uploads");
      } else $archivo = $usuario->image;

      !empty($request->input("nombre")) ? $nombre = $request->input("nombre") : $nombre = $usuario->name;
      User::where(["id" => $usuario->id])->update(["image" => $archivo, "name" => $nombre]);

      return redirect("/");
   }
}
