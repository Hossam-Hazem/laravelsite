<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $fillable = [
        'name',
        'description',
        'isSchool',
        'hardness',
        'date',
        'course',
        'related',
        'github'
    ];
    public function photos()
    {
        return $this->hasMany('App\Photo');
    }

    public function Comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function setIsSchoolAttribute($input){
        if($input==null){
            $input=false;
        }
        else{
            $input=true;
        }
        $this->attributes['isSchool']=$input;
    }

    public function setrelatedAttribute($input){
        $this->attributes['related']=intval($input);
    }
    public function scopeSchoolProject($query){
        $query->where('isSchool',true);
    }

    public function scopeMyProject($query){
        $query->where('isSchool',false);
    }


    
}
