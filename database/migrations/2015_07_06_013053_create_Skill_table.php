<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSkillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('skills', function (Blueprint $table) {
            $table->increments('id');
            $table->string('skill');
            $table->integer('rating');
            $table->string('type');
            $table->boolean('isIcon');
            $table->string('path');
            $table->timestamps();
            $table->integer('skillType_id');
            $table->foreign('skillType_id')->references('id')->on('skillTypes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('skills');
    }
}