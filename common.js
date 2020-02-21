$(document).ready(function(){
	$('.basket').click(function(){
		$('.drop_down_basket').fadeToggle();
		return false;
	});

	$('.browse').click(function(){
		$('.drop').fadeToggle();
	});


	$('.women_link').click(function(){
		$('.drop1_wrapper').fadeToggle();
		return false;
         
	});
		
		
	$('.nav_menu4').click(function(){
		$('.sub_menu').toggle("show");
		$('.sub_menu').css('display' , 'block');
		});
		$('.close').click(function(){
		$('.nav_menu4').remove("show");	
		});	
          
	});



