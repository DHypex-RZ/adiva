<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
   use HasFactory;

   protected $table = "buildings";
   protected $fillable = ["cp", "type", "address", "number", "floors", "departments"];
   protected $hidden = ["created_at", "updated_at"];
}
