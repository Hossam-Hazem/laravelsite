<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use Request;
use App\Project;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Skill;
use App\Rating;
use App\SkillType;

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
        $skillTypes=SkillType::all();
       //dd($skillTypes);
        return view('home',compact('skillTypes','schoolprojects','myprojects'));
    }
    public function createSkill(){
       $skillType= SkillType::lists('name','id');
        return view('home.createSkill',compact('skillType'));
    }

    public function createSkillType()
    {
        return view ('home.createSkillType');
    }

    public function storeSkillType()
    {

        $input=Request::all();
        //dd($input);
        if(!array_key_exists('needRating',$input)){
            $input['needRating']=false;
        }
        SkillType::create($input);
        return redirect('newskilltype');
    }
    public function storeSkill()
    {
        $input = Request::all();
        //dd($input);
        $input['skill_type_id']=(int) $input['skill_type_id'];
        //dd($input);
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

    public function contact()
    {
        if(Request::ajax()) {
            Mail::raw('name: '. Request::get('name')." \n Email: ".Request::get('email')." \n Message: ".
                Request::get('message'), function ($message) {
                $message->from('hossamhazem94@gmail.com', 'My Website');
                $message->to('hossamhazem94@gmail.com');
            });
            return response(200);
        }
    }



}
