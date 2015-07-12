<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hossam Hazem</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Poiret One">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Oswald">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ubuntu">
    <link rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/89f2f44ba07ea3fff7e561c2142813b278c2d6c6/devicon.min.css">
    <link rel="stylesheet" href="{{asset('css/slider1.css')}}"/>
    <link rel="stylesheet" href="{{asset('css/home.css')}}"/>

</head>
<body>
<div class="WelcomeDiv"></div>

<div class="WelcomeHead page">
    <div class="WelcomeLayer">
        <div class="WelcomeHeadHeader">
            <div class="WelcomeTag">Welcome</div>
            <div class="WelcomeImagediv"><img src="{{asset('images/myimage.jpg')}}" class="WelcomeImage"/></div>
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
                <div class="centertext WelcomeText" id="e8">Hard Worker</div>
                <div class="centertext WelcomeText" id="e9">Fast Learner</div>
            </div>
            <h4 class="glyphicon glyphicon-circle-arrow-down glyphHover"></h4>
        </div>
        <footer class="BodyArrowouterDiv">
            <div><h1 class="glyphicon glyphicon-menu-down BodyArrow glyphHover"></h1></div>
            <div><h1 class="BodyArrow BodyArrow2 glyphicon glyphicon-menu-down glyphHover"></h1></div>
        </footer>
    </div>
</div>
<div class="HomeBody page">

    <header class="Header">
        <nav class="HBNav">
            <div class="HBNavX">
                <img class='HBNavXImage' src="{{asset('images/myimage.jpg')}}"/></img>
                <div class="HBNavXName">
                    <span class="HBNavXName">Hossam Hazem</span>
                </div>
            </div>
            <div class="HBNavMenu">
                <div class="HBNavItem"><a class="HBNavItemLink" href="">Skills</a></div>
                <div class="HBNavItem"><a class="HBNavItemLink" href="">My Projects</a></div>
                <div class="HBNavItem"><a class="HBNavItemLink" href="">School Projects</a></div>
                <div class="HBNavItem"><a class="HBNavItemLink" href="">Contact me</a></div>
            </div>
        </nav>
    </header>

    <section class="Skills page">

        <div class="SkillsHeaderDiv">
            <div class="SkillsHeader"><span class="SkillsHeaderSpan">Skills & Experience</span></div>
        </div>
        <div class="SkillsBody">
            <div class="WebDevelopment">
                <div class="WebDevelopmentHeader">
                    <span class="WebDevelopmentHeaderSpan">Web Development And Databases</span>
                </div>
                <div class="WebDevelopmentBody">
                    <div class="table-responsive">
                        <table class="table table-striped table-condensed">
                            <th>Skill</th>
                            <th>Proficiency</th>
                            @foreach($skills as $skill)
                                <tr>
                                    @if($skill->isIcon)
                                        <td><i class="icon {{$skill->path}}"></i></td>
                                    @else
                                        <td><img src="{{asset('images/'.$skill->path)}}" class="iconimage"/></td>
                                    @endif
                                    <td>
                                        <div class="Stars vert-align">{{$skill->rating}}</div>
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="Projects page">
        <div class="SkillsHeaderDiv">
            <div class="SkillsHeader"><span class="SkillsHeaderSpan">Projects</span></div>
        </div>
        <div class="WebDevelopmentHeader">
            <span class="WebDevelopmentHeaderSpan">My Projects</span>
        </div>
        <div class="ProjectsBody">
            <div class='myProjectsSlider sliderMain'>

                @for($c=0;$c<count($myprojects);$c++)
                    <div class='slide ' id='p{{$c}}'>{{$myprojects[$c]->name}}</div>
                @endfor
                <div class='slide ' id='p3'>
                    <div class='photosSlider sliderMain'>
                        <div class='slide ' id='p0'>1</div>
                        <div class='slide' id='p1'>2</div>
                        <div class='slide ' id='p2'>3</div>
                        <div class='slide' id='p3'>4</div>
                        <div class='slide' id='p4'>5</div>
                        <div class='sliderIcons'>
                            <ul class="sliderIconsL">
                            </ul>
                        </div>
                        <div class="ButtonDiv">
                            <span class="nextbt photoSliderButton glyphicon glyphicon-menu-right "></span>
                            <span class="prevbt photoSliderButton glyphicon glyphicon-menu-left"></span>
                        </div>
                    </div>

                </div>
                    <div class='sliderIcons'>
                        <ul class="sliderIconsL">
                        </ul>
                    </div>
                    <div class="ButtonDiv">
                        <button class="btn btn-default nextbt">Show next Project</button>
                        <button class="btn btn-default prevbt">Show previous Project</button>
                    </div>
            </div>

        </div>
        <div class="WebDevelopmentHeader">
            <span class="WebDevelopmentHeaderSpan">University Cool Projects</span>
        </div>
        <div class='schoolProjectsSlider sliderMain'>

            @for($c=0;$c<count($myprojects);$c++)
                <div class='slide ' id='p{{$c}}'>
                    <div class="projectHeader">{{$myprojects[$c]->name}}</div>

                </div>
            @endfor
            <div class='sliderIcons'>
                <ul class="sliderIconsL">
                </ul>
            </div>
            <div class="ButtonDiv">
                <button class="btn btn-default nextbt">Show next Project</button>
                <button class="btn btn-default prevbt">Show previous Project</button>
            </div>
        </div>
    </section>
    <section class="ContactMe"></section>
</div>


<footer></footer>


</div>
<script src="{{ asset('js/modernizr.custom.js') }}"></script>
<script src="{{ asset('js/jquery-1.11.3.js') }}"></script>
<script src="{{ asset('js/slider1.js') }}"></script>
<script src="{{ asset('js/home.js') }}"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>