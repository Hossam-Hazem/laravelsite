<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <div style="text-align: center;"><h1>create a new Skill Type</h1></div>
    {!! Form::open(['url'=>'createskilltype'])!!}
    <div class="form-group">
        {!! Form::label('name','Skill Type Name:')!!}
        {!! Form::text('name',null,['class'=>'form-control'])!!}
    </div>
    <div class="form-group">
        <div class="checkbox-inline" >
            {!!Form::checkbox('needRating', 'true',null,['class'=>'checkbox'])!!}
            {!!Form::label('needRating','does it need rating?')!!}
        </div>
    </div>

    {!!Form::submit('create it!',['class' => 'btn btn-primary form-control','id'=>'submit'])!!}
    {!! Form::close()!!}
</div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>
