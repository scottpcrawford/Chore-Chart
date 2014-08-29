var main = function(){
    $('.button').click( function(){
    	

    		switch (this.id) {
    		case 'morning-button':
    			 $('div#morning').show();
	       		 $('div#afternoon').hide();
	       		 $('div#nighttime').hide();
	       		 $('#switch-style').attr('href','morning-style.css');
	       		 break;
	       	case 'afternoon-button':
	       		$('div#morning').hide();
	       		$('div#afternoon').show();
	       		$('div#nighttime').hide();
	       		$('#switch-style').attr('href','afternoon-style.css');
	       		break;
	       	case 'nighttime-button':
	       		$('div#morning').hide();
	       		$('div#afternoon').hide();
	       		$('div#nighttime').show();
	       		$('#switch-style').attr('href','nighttime-style.css');
	       		break;
       		}
    		
	});

	$('.fa-ul #chore').click( function() {
		$(this).toggleClass('highlight');
	

		
	});

};

$(document).ready(main)

