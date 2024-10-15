// javascript document
$(document).ready(function(){
    $('#q1').click(function(){
		$('#a1').toggle(500)
		})
		 $('#q2').click(function(){
		$('#a2').toggle(500)
		})
		$('#q3').click(function(){
		$('#a3').toggle(500)
		})
		$('#q4').click(function(){
		$('#a4').toggle(500)
		})
		$('#q5').click(function(){
		$('#a5').toggle(500)
		})
		$('#q6').click(function(){
		$('#a6').toggle(500)
		})
		$('#q7').click(function(){
		$('#a7').toggle(500)
		})
		$('#q8').click(function(){
		$('#a8').toggle(500)
		})
		$('#q9').click(function(){
		$('#a9').toggle(500)
		})
});

$(window).on('load', function() {
	$('#status').fadeOut(2000); 
	$('#preloader').delay(2000).fadeOut('slow'); 
	$('body').delay(2000).css({'overflow':'visible'});
  })