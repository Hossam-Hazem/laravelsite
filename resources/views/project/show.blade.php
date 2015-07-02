<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{$project->name}}</title>
</head>
<body>

<div style="text-align: center;">{{$project->name}}</div>
@foreach($files as $file)
<img src="{{ URL::asset('uploads/'.$project->name.'/'.$file)  }}" alt=""/>
@endforeach
{{$project->description}}
{{$project->date}}
{{$project->course}}
{{$project->related}}
</body>
</html>