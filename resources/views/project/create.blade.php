<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <script src="{{ asset('js/jquery-1.11.3.js') }}"></script>

    <script src="{{ asset('js/create.js') }}"></script>

</head>
<body>
    <div class="container">
        <div style="text-align: center;"><h1>create a new project</h1>  </div>
        {!! Form::open(['url'=>'create','files'=>true])!!}
            <div class="form-group">
                {!!Form::label('title','Name:')!!}
                {!!Form::text('name',null,['class'=>'form-control'])!!}
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
             <div class="form-group" id="photo">
                 {!!Form::label('photos','upload photos')!!}: </br>
                 <button class = 'photob btn'>Add new photo</button>
                 {!! Form::file('photo0',['accept'=>"image/*",'class'=>'invisible photoi','id'=>'i0'])!!}
              </div>
            <div class="form-group">
                {!!Form::submit('create it!',['class' => 'btn btn-primary form-control','id'=>'submit'])!!}
            </div>
        {!! Form::close()!!}
    </div>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

</body>
</html>