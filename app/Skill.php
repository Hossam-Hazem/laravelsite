<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'skill',
        'rating',
        'type',
        'isIcon',
        'path',
        'skill_type_id',
        'Description'
    ];
    public function setisIconAttribute($input){
        if($input==null){
            $input=false;
        }
        else{
            $input=true;
        }
        $this->attributes['isIcon']=$input;
    }
    public function skillType()
    {
        return $this->belongsTo('App\SkillType');
    }
}
