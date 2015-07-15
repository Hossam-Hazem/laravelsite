<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <div style="text-align: center;"><h1>create a new Skill</h1></div>
    {!! Form::open(['url'=>'createskill'])!!}
    <div class="form-group">
        {!! Form::label('skill','Skill Name:')!!}
        {!! Form::text('skill',null,['class'=>'form-control'])!!}
    </div>
    <div class="form-group">
        {!! Form::label('rating','Skill Rating:')!!}
        {!! Form::text('rating',null,['class'=>'form-control'])!!}
    </div>
    <div class="form-group">
        {!! Form::label('skill_type_id','Skill Type:')!!}
        {!! Form::select('skill_type_id', $skillType);!!}
    </div>
    <div class="form-group">
        <div class="checkbox-inline" >
            {!!Form::checkbox('isIcon', 'true',null,['class'=>'checkbox'])!!}
            {!!Form::label('isIcon','is it an icon?')!!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('path','if it is an icon please enter the class other wise enter image name:')!!}
        {!! Form::text('path',null,['class'=>'form-control'])!!}
    </div>
    <div class="form-group">
        {!! Form::label('Description','Description:')!!}
        {!! Form::textarea('Description',null,['class'=>'form-control'])!!}
    </div>
    {!!Form::submit('create it!',['class' => 'btn btn-primary form-control','id'=>'submit'])!!}
    {!! Form::close()!!}
</div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>
