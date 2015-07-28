<!doctype html>
<html lang="en">
<head>
    <?php
        function myAssets($x){
            return secure_asset($x);
        }
    ?>
    <meta charset="UTF-8">
    <title>Hossam Hazem</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poiret One">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Oswald">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Ubuntu">
        <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/89f2f44ba07ea3fff7e561c2142813b278c2d6c6/devicon.min.css">
        <link href='//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="{{myAssets(elixir('css/slider.css'))}}"/>
    <link rel="stylesheet" href="{{myAssets(elixir('css/home.css'))}}"/>
    <script src="{{ myAssets('js/jquery-1.11.3.js') }}"></script>
    <script src="{{ myAssets(elixir('js/cmdwriter.js')) }}"></script>
</head>
<body>
<input type="hidden" id="token" value="{{ csrf_token() }}">

<div class="page WelcomeDiv">
    <div class='consolewriter'>
        <div class="consMsg me hidden">hey there</div>
        <div class="consMsg me hidden">My name is Hossam</div>
        <div class="consMsg other hidden">Obviously</div>
        <div class="consMsg me hidden">I am 21 years old</div>
        <div class="consMsg other hidden">Who cares</div>
        <div class="consMsg me hidden">
            I Love//// am addicted to coding, I consider coding as puzzle solving and learning new programming languages as a new adventure and
            programming concepts as treasure hunting. My goal is the ultimate knowledge in computer science specifically
            and in life generally
        </div>
        <div class="consMsg other hidden">(Y)</div>
        <div class="writer"></div>
        <span class="enter"><span class="flashText">Website Loading</span></span>
    </div>
</div>
<script src="{{ myAssets('js/modernizr.custom.js') }}"></script>
<script src="{{ myAssets(elixir('js/slider.js')) }}"></script>
<div class="WelcomeHead page ">
    <div class="WelcomeLayer">
        <div class="WelcomeHeadHeader">
            <div class="WelcomeTag">Welcome</div>
            <div class="WelcomeImagediv"><img src="{{myAssets('images/myimage.jpg')}}" class="WelcomeImage"/></div>
        </div>
        <div class="infoDiv">
            <h4 class="glyphicon glyphicon-circle-arrow-up glyphHover"></h4>

            <div class="scrolling">
                <div class="centertext WelcomeText" id="e0">German University in Cairo Student</div>
                <div class="centertext WelcomeText" id="e1">Computer Science and Engineering Victim</div>
                <div class="centertext WelcomeText" id="e2">Software Developer</div>
                <div class="centertext WelcomeText" id="e3">Web Wizard</div>
                <div class="centertext WelcomeText" id="e4">6th Semester Survivor</div>
                <div class="centertext WelcomeText" id="e5">2017 Expected Graduate</div>
                <div class="centertext WelcomeText" id="e6">Excellent Grade Student</div>
                <div class="centertext WelcomeText" id="e7">Ex Intern at Raya</div>
            </div>
            <h4 class="glyphicon glyphicon-circle-arrow-down glyphHover"></h4>
        </div>
        <div class="floatDown">
            <div class="quote">
                    <span class="quoteText">
                        “If opportunity doesn't knock, build a door.”
                    </span>
            </div>
            <div class="BodyArrowDownDiv" id="Welcome">
                <div><h1 class="glyphicon glyphicon-menu-down BodyArrow glyphHover"></h1></div>
                <div><h1 class="BodyArrow BodyArrow2 glyphicon glyphicon-menu-down glyphHover"></h1></div>
            </div>
        </div>
    </div>
</div>
<div class="HomeBody page ">

    <header class="Header">
        <nav class="HBNav">
            <div class="HBNavX">
                <img class='HBNavXImage' src="{{myAssets('images/myimage.jpg')}}"/></img>
                <div class="HBNavXH">H</div>
                <div class="HBNavXName">
                    <span class="HBNavXNameFirst">ossam</span>
                    <span class="HBNavXNameLast">azem</span>
                </div>
            </div>
            <div class="HBNavMenu">
                <div class="HBNavItem" id="Skills"><span class="HBNavItemLink" href="">Skills</span></div>
                <div class="HBNavItem" id="Projects"><span class="HBNavItemLink" href="">Projects</span></div>
                <div class="HBNavItem" id="Contact"><span class="HBNavItemLink" href="">Contact me</span></div>
            </div>
        </nav>
    </header>


    <section class="Skills page">
        <div class="BodyArrowUpDiv" id="Skills">
            <div><h1 class="glyphicon glyphicon-menu-up BodyArrow glyphHover"></h1></div>
            <div><h1 class="BodyArrow BodyArrow2 glyphicon glyphicon-menu-up glyphHover"></h1></div>
        </div>
        <div class="SkillsHeaderDiv">
            <div class="SkillsHeader"><span class="SkillsHeaderSpan">Skills & Experience</span></div>
        </div>
        <div class="SkillsBody">
            @foreach($skillTypes as $c=>$skillType)
                @if($c%2==0)
                    <div class="SkillsTypeOutOdd">
                        @else
                            <div class="SkillsTypeOut">
                                @endif
                                <div class="MyHeader">
                                    <span class="MyHeaderSpan">{{$skillType->name}}</span>
                                </div>
                                <div class="SkillsTypeBody">
                                    @if($skillType->needRating==true)
                                        <div class="table-responsive">
                                            @if($c%2==0)
                                                <table class="OddTable table table-striped table-condensed">
                                                    @else
                                                        <table class="EvenTable table table-striped table-condensed">
                                                            @endif
                                                            @if($c==0)
                                                                <th></th>
                                                                <th>Proficiency</th>
                                                            @endif
                                                            @foreach($skillType->skills()->orderBy('rating','desc')->get() as $skill)
                                                                <tr>
                                                                    @if($skill->isIcon)
                                                                        <td><i class="icon {{$skill->path}}"
                                                                               title="{{$skill->skill}}"></i></td>
                                                                    @else
                                                                        <td><img src="{{myAssets('images/'.$skill->path)}}"
                                                                                 alt="{{$skill->skill}}"
                                                                                 title="{{$skill->skill}}"
                                                                                 class="iconimage"/></td>
                                                                    @endif
                                                                    <td>
                                                                        <div class="Stars vert-align">{{$skill->rating}}</div>
                                                                    </td>
                                                                </tr>
                                                            @endforeach
                                                        </table>
                                        </div>
                                    @elseif($skillType->name=='Experience')
                                        <?php
                                        $skills = $skillType->skills
                                        ?>
                                        <div class="SkillsOut">@foreach($skills as $c1=>$skill)
                                                @if($c1+1==count($skills))
                                                    <div class="SkillLast">
                                                        @else
                                                            <div class="Skill">
                                                                @endif
                                                                <div class="ExpH">{{$skill->skill}}</div>
                                                                <div class="ExpImg"><img
                                                                            src="{{myAssets('images/'.$skill->path)}}"
                                                                            alt="{{$skill->skill}}"
                                                                            title="{{$skill->skill}}"
                                                                            class="iconimage headimage"/></div>
                                                                <div class="ExpDesc">{{$skill->Description}}</div>
                                                            </div>

                                                            @endforeach</div>

                                                @else
                                                    <div class="SkillsOut">@foreach($skillType->skills as $skill)
                                                            <span class="otherSkill">{{$skill->skill}}</span>
                                                            <div class="otherSkillDescription">{{$skill->Description}}</div>
                                                        @endforeach</div>

                                                @endif

                                        </div>
                                </div>
                                @endforeach

                            </div>
                            <div class="BodyArrowDownDiv" id="Skills">
                                <div><h1 class="glyphicon glyphicon-menu-down BodyArrow glyphHover"></h1></div>
                                <div><h1 class="BodyArrow BodyArrow2 glyphicon glyphicon-menu-down glyphHover"></h1>
                                </div>
                            </div>
                            @include('_footer')


    </section>

    <section class="Projects page ">
        <div class="BodyArrowUpDiv" id="Projects">
            <div><h1 class="glyphicon glyphicon-menu-up BodyArrow glyphHover"></h1></div>
            <div><h1 class="BodyArrow BodyArrow2 glyphicon glyphicon-menu-up glyphHover"></h1></div>
        </div>
        <div class="SkillsHeaderDiv">
            <div class="SkillsHeader"><span class="SkillsHeaderSpan">Projects</span></div>
        </div>
        <div class="MyProjects SkillsTypeOutOdd">
            <div class="MyHeader">
                <span class="MyHeaderSpan">My Projects</span>
            </div>
            <div class="ProjectsBody">
                <div class='myProjectsSlider sliderMain '>

                    @for($c=0;$c<count($myprojects);$c++)
                        <div class='slide myProjectSlide ' id='p{{$c}}'>
                            <div class="projectHead">{{$myprojects[$c]->name}}</div>
                            <?php
                            try {
                                $filesDestination = File::allfiles($_SERVER['DOCUMENT_ROOT'] . '/uploads/' . $myprojects[$c]->name);
                            } catch (Exception $e) {
                                $filesDestination = [];
                            }
                            ?>
                            @if(count($filesDestination)!=0)
                                <div class='photosSlider myProjectPhotosSlider{{$c}} sliderMain'>

                                    @for($cp=0;$cp<count($filesDestination);$cp++)
                                        <div class='slide photo' id='p{{$cp}}'
                                             style="background-image:url('{{URL::asset('uploads/'.$myprojects[$c]->name.'/'.File::name($filesDestination[$cp]).'.'. File::extension($filesDestination[$cp])) }}')">
                                        </div>
                                    @endfor
                                    <div class='sliderIcons'>
                                        <ul class="sliderIconsL">
                                        </ul>
                                    </div>
                                    <div class="ButtonDiv">
                                        <span class="nextbt photoSliderButton glyphicon glyphicon-menu-right "></span>
                                        <span class="prevbt photoSliderButton glyphicon glyphicon-menu-left"></span>
                                    </div>
                                </div>
                            @endif
                            @if(count($filesDestination)==0)
                                <div class="projectDescriptionNoPhotos">
                                    @else
                                        <div class="projectDescription">
                                            @endif
                                <div class="projectDate"><span class="projectLabel">Made in:</span> <span
                                            class="projectText">{{$myprojects[$c]->date}}</span></div>
                                <p> {{$myprojects[$c]->description}}</p>
                            </div>
                        </div>
                        <script>slider('.myProjectPhotosSlider{{$c}}')</script>
                    @endfor
                    <div class='sliderIcons'>
                        <ul class="sliderIconsL">
                        </ul>
                    </div>
                    <div class="ButtonDiv">
                        <button class="btn btn-default nextbt">Show next Project</button>
                        <button class="btn btn-default prevbt">Show prev Project</button>
                    </div>
                </div>

            </div>
        </div>
        <div class="schoolProjects SkillsTypeOut">
            <div class="MyHeader">
                <span class="MyHeaderSpan">University Cool Projects</span>
            </div>
            <div class='schoolProjectsSlider sliderMain '>

                @for($c=0;$c<count($schoolprojects);$c++)
                    <div class='slide schoolProjectSlide' id='p{{$c}}'>
                        <div class="projectHead">{{$schoolprojects[$c]->name}}</div>
                        <?php
                        try{
                            $filesDestination = File::allfiles($_SERVER['DOCUMENT_ROOT'] . '/uploads/' . $schoolprojects[$c]->name);
                        } catch (Exception $e) {
                            $filesDestination = [];
                        }
                        ?>
                        @if(count($filesDestination)!=0)
                        <div class='photosSlider schoolProjectPhotosSlider{{$c}} sliderMain'>

                            @for($cp=0;$cp<count($filesDestination);$cp++)
                                <div class='slide photo' id='p{{$cp}}'
                                     style="background-image:url('{{URL::asset('uploads/'.$schoolprojects[$c]->name.'/'.File::name($filesDestination[$cp]).'.'. File::extension($filesDestination[$cp])) }}')">
                                </div>
                            @endfor
                            <div class='sliderIcons'>
                                <ul class="sliderIconsL">
                                </ul>
                            </div>
                            <div class="ButtonDiv">
                                <span class="nextbt photoSliderButton glyphicon glyphicon-menu-right "></span>
                                <span class="prevbt photoSliderButton glyphicon glyphicon-menu-left"></span>
                            </div>
                        </div>
                        @endif
                        @if(count($filesDestination)==0)
                            <div class="projectDescriptionNoPhotos">
                                @else
                        <div class="projectDescription">
                            @endif
                            <div class="projectDate"><span class="projectLabel">Made in:</span> <span
                                        class="projectText">{{$schoolprojects[$c]->date}}</span></div>
                            <div class="projectCourse"><span class="projectLabel">Course:</span> <span
                                        class="projectText">{{$schoolprojects[$c]->course}}</span></div>
                            <p> {{$schoolprojects[$c]->description}}</p>
                        </div>
                    </div>
                    <script>slider('.schoolProjectPhotosSlider{{$c}}')</script>
                @endfor
                <div class='sliderIcons'>
                    <ul class="sliderIconsL">
                    </ul>
                </div>
                <div class="ButtonDiv">
                    <button class="btn btn-default nextbt">Show next Project</button>
                    <button class="btn btn-default prevbt">Show prev Project</button>
                </div>
            </div>
        </div>
        <div class="BodyArrowDownDiv" id="Projects">
            <div><h1 class="glyphicon glyphicon-menu-down BodyArrow glyphHover"></h1></div>
            <div><h1 class="BodyArrow BodyArrow2 glyphicon glyphicon-menu-down glyphHover"></h1></div>
        </div>
        @include('_footer')
    </section>
    <section class="ContactMe page">
        <div class="contactMeContainer">
            <div class="contactMeInnerContainer">
                <div style="text-align: center;"><h1>Contact me!</h1></div>
                {!! Form::open(['url'=>'Contact'])!!}
                <div class="form-group">
                    {!!Form::text('name',null,['class'=>'form-control contactName','placeholder'=>'Name:'])!!}
                </div>
                <div class="form-group">
                    {!!Form::text('email',null,['class'=>'form-control contactEmail','placeholder'=>'Email:'])!!}
                </div>
                <div class="form-group">
                    {!!Form::textarea('message',null,['class'=>'form-control contactMessage','placeholder'=>"Want to ".
                    "contact me or have a feedback \n then you are in the right place!"])!!}
                </div>
                <div class="form-group">
                    {!!Form::submit('Send',['class' => 'btn btn-primary form-control
                    sendButton','disabled'=>'disabled','id'=>'submit'])!!}
                </div>
                {!! Form::close()!!}
            </div>
        </div>
    </section>
</div>


<footer></footer>


</div>

<script src="{{ myAssets(elixir('js/home.js')) }}"></script>
<script src="{{ myAssets(elixir('js/scrollingDiv.js')) }}"></script>
<script src="{{ myAssets(elixir('js/starsSystem.js')) }}"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>