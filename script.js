var main = function(){
    $('.button').click( function(){
    	

    		switch (this.id) {
    		case 'morning-button':
    			 $('div#morning').show();
	       		 $('div#afternoon').hide();
	       		 $('div#nighttime').hide();
	       		 break;
	       	case 'afternoon-button':
	       		$('div#morning').hide();
	       		$('div#afternoon').show();
	       		$('div#nighttime').hide();
	       		break;
	       	case 'nighttime-button':
	       		$('div#morning').hide();
	       		$('div#afternoon').hide();
	       		$('div#nighttime').show();
       			break;
       		}
    		/*
    		$('.chore-group').not($this).each(function(){
    			var $other = $(this);
    			var otherTarget = $other.data('content');
    			$(otherTarget).hide();
    		});
    		var target = $this.data('content');
    		$(target).animate({width: "toggle"}, 1000);
    	}); */
});
}

$(document).ready(main)
