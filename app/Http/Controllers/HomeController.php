<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{

    /**
     * view homepage
     */
    public function index()
    {
        $schoolprojects = Project::SchoolProject()->latest();
        $myprojects = Project::MyProject()->latest();

        return view('home');
    }


}
