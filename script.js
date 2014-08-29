var main = function(){
    $('.button').click( function(){
    	

    		switch (this.id) {
    		case 'morning-button':
    			 $('div#morning').show();
	       		 $('div#afternoon').hide();
	       		 $('div#nighttime').hide();
	      		 $('head').append('<link rel="stylesheet" href="morning-style.css" type="text/css" />');
	       		 break;
	       	case 'afternoon-button':
	       		$('div#morning').hide();
	       		$('div#afternoon').show();
	       		$('div#nighttime').hide();
	       		$('head').append('<link rel="stylesheet" href="afternoon-style.css" type="text/css" />');
	       		break;
	       	case 'nighttime-button':
	       		$('div#morning').hide();
	       		$('div#afternoon').hide();
	       		$('div#nighttime').show();
	       		$('head').append('<link rel="stylesheet" href="nighttime-style.css" type="text/css" />');
       			break;
       		}
    		
});
}

$(document).ready(main)

