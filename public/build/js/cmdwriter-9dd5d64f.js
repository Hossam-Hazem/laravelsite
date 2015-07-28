
	$(document).ready(function(){
        introObject('.consolewriter');

    })

function introObject(maindivC) {
	var cursor='<span class="cursor">|</span>'
	var maindiv=maindivC;
	var elements
	var currentIndex
    var Interval
	console.log(maindiv)
	intro()
	function intro(){
		elements=$(maindiv+'>.consMsg').remove()
		console.log('ha31')
		currentIndex=0;
		engine();

	}
	function engine(){
		if(currentIndex==elements.length)
			return;
		if($(elements[currentIndex]).hasClass('me')) {
			$(maindiv+'>.writer').before('<span class="Msg me">')
			$(maindiv+'>.Msg').last().append(cursor)
			write('me',$(elements[currentIndex]).text());
		}
		else{
			$(maindiv+'>.writer').append(cursor)
			write('other',$(elements[currentIndex]).text());
		}
	}
	function write(who,text){
		console.log(text)
		var Stringindex =0;
		var target;
		if(who=='me'){
			target=maindiv+'>.Msg';
		}
		else{
			target=maindiv+'>.writer';
		}
		interval= setInterval(function(){
			if(Stringindex==text.length){
				if(who=='other'){
					$(maindiv+'>.writer').before('<span class="Msg other">')
					$('.cursor').remove()
					$(maindiv+'>.Msg').last().text($(target).text());
					$(target).text('');
				}
				else{
					$('.cursor').remove()
				}
				currentIndex++;
				$('.writer').before('</br>')
				setTimeout(function(){
				engine();
			},1500);
				window.clearInterval(interval);


			}
			else{if(text[Stringindex]=='/'){
					var ctext = $(target).last().clone().children().remove().end().text();
					$(target).last().html(ctext.substring(0,ctext.length-1)+cursor)
			}
			else{
				$('.cursor').before(text[Stringindex]);
			}
			Stringindex++;
			}
		},200)
    }
    $('body').on('killCmdWriter',function(){
        clearInterval(interval)
    })
}