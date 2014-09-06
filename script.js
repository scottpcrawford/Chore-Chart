var main = function(){
	/* switch style sheet based on which tab is clicked */
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
    /* Highlight the appropriate Element when clicked */
	$('.fa-ul .chore').click( function() {
		/* Color the block green */
		$(this).toggleClass('highlight');
		/* Check it off the list! */
		$(this).toggleClass('special');

	});

};

$(document).ready(main)
/* Rogue Code Goes Here




*/