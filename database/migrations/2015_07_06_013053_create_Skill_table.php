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
            $table->integer('skill_type_id')->unsigned();
            $table->string('skill');
            $table->integer('rating');
            $table->string('Description');
            $table->boolean('isIcon');
            $table->string('path');
            $table->timestamps();
        });
        Schema::table('skills', function($table) {
            $table->foreign('skill_type_id')->references('id')->on('skillTypes');
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
