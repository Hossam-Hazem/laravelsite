<?php

namespace App\Http\Controllers;

use Request;
use App\Project;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Skill;
use App\Rating;

class HomeController extends Controller
{

    /**
     * view homepage
     */
    public function index()
    {
        $schoolprojects = Project::SchoolProject()->latest()->get();
        $myprojects = Project::MyProject()->latest()->get();
        $skills=Skill::all();

        return view('home',compact('skills','schoolprojects','myprojects'));
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
    public function storeRating(){
        if(Request::ajax()) {
            $input = Request::all();
            $rating = new Rating($input);
            $rating->ip=Request::getClientIp();
            $rating->save();
            return response(200);
        }
    }



}
