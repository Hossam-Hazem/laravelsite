<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SkillType extends Model
{
    protected $table = 'skillTypes';
    protected $fillable = [
        'name',
        'needRating',

    ];
    public function skills()
    {
        return $this->hasMany('App\Skill');
    }
    public function setNeedratingAttribute($input){
        if($input==null){
            $input=false;
        }
        else{
            $input=true;
        }
        $this->attributes['needRating']=$input;
    }
}
