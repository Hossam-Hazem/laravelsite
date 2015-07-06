<?php

namespace App\Http\Controllers;

use Request;
use App\Project;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Skill;

class HomeController extends Controller
{

    /**
     * view homepage
     */
    public function index()
    {
        $schoolprojects = Project::SchoolProject()->latest();
        $myprojects = Project::MyProject()->latest();
        $skills=Skill::all();

        return view('home',compact('skills'));
    }
    public function createSkill(){
        return view('home.createSkill');
    }

    public function storeSkill()
    {
        $input = Request::all();
        $Skill= Skill::create($input);
        return redirect('newskill');
    }



}
