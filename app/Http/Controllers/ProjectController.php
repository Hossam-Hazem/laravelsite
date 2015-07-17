<?php

namespace App\Http\Controllers;



use App\Http\Requests;
use App\Project;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\Controller;
use Illuminate\Filesystem\Filesystem;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {

        return view('project.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $input = Request::all();
        $project= Project::create($input);
        for($c=0;$c<count($_FILES);$c++){
            $destinationPath='uploads/'.$project->name;
            $image= Input::file('photo'.$c);
            if($image!=null) {
                $filename = $image->getClientOriginalName();
                $image->move($destinationPath, $filename);
            }
        }
        return redirect('createproject');
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $name
     * @return Response
     */
    public function show($name)
    {
         $project = Project::where('name',$name)->get()->first();
         $x = new Filesystem();
        $filesDestination = File::allfiles($_SERVER['DOCUMENT_ROOT'].'/uploads/'.$name);
        $files=array();
        for($c = 0;$c<count($filesDestination);$c++){
            $files[$c]=File::name($filesDestination[$c]).'.'. File::extension($filesDestination[$c]);
        }
        //dd($filenames);
        return view('project.show',compact('project','files'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
