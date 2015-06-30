<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
    <div class="container">
        <h1 class ='center'>  create a new project  </h1>
        {!! Form::open(['url'=>'create'])!!}
            <div class="form-group">
                {!!Form::label('title','Name:')!!}
                {!!Form::text('title',null,['class'=>'form-control'])!!}
            </div>
            <div class="form-group">
                {!!Form::label('hardness','Description:')!!}
                {!!Form::textarea('description',null,['class'=>'form-control'])!!}
            </div>
            <div class="form-group">
                <div class="checkbox-inline" >
                    {!!Form::checkbox('isSchool', 'true',null,['class'=>'checkbox'])!!}
                    {!!Form::label('isSchool','was it school project?')!!}
                </div>
            </div>

            <div class="form-group">
                {!!Form::label('date','When?')!!}
                {!!Form::text('date',null,['class'=>'form-control'])!!}
            </div>
            <div class="form-group">
                {!!Form::label('course','which course?')!!}
                {!!Form::text('course',null,['class'=>'form-control'])!!}
            </div>
            <div class="form-group">
                {!!Form::label('related','is it very related to field?')!!}
                {!!Form::select('related',['1'=>'unrelated','2'=>'kinda','3'=>'related '])!!}
            </div>
            <div class="form-group">
                {!!Form::submit('create it!',['class' => 'btn btn-primary form-control'])!!}
            </div>
        {!! Form::close()!!}
    </div>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>