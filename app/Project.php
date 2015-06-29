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
        'related'
    ];

    public function scopeSchoolProject($query){
        $query->where('isSchool',true);
    }

    public function scopeMyProject($query){
        $query->where('isSchool',false);
    }

    public function photos()
    {
        return $this->hasMany('App\Photo');
    }

    public function Comments()
    {
        return $this->hasMany('App\Comment');
    }
    
}
