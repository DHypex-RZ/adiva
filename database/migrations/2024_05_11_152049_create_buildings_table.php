<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('buildings', function (Blueprint $table) {
            $table->id();
            $table->string('cp');
            $table->string('type');
            $table->string('address');
            $table->string('number');
            $table->tinyInteger('floors')->nullable();
            $table->tinyInteger('departments')->nullable();
            $table->timestamps();
        });

        Schema::create('floors', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger("floor");
            $table->foreignId("building")->references("id")->on("buildings");
            $table->timestamps();
        });

        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger("department");
            $table->unsignedTinyInteger("floor");
            $table->foreignId("building")->references("id")->on("buildings");
            $table->unsignedBigInteger("user")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buildings');
        Schema::dropIfExists('floors');
        Schema::dropIfExists('departments');
    }
};
