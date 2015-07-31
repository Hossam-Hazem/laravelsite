<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');
Route::get('/createproject',['middleware'=>'manager','uses'=>'ProjectController@create']);
Route::post('/create','ProjectController@store');


Route::get('/newskill',['middleware'=>'manager','HomeController@createSkill']);
Route::post('/createskill','HomeController@storeSkill');
Route::get('/newskilltype',['middleware'=>'manager','HomeController@createSkillType']);
Route::post('/createskilltype','HomeController@storeSkillType');

Route::post('/newRating','HomeController@storeRating');
Route::post('/Contact','HomeController@contact');
Route::controllers([
    'auth'=>'Auth\AuthController'
]);


Route::get('/{name}','ProjectController@show');
