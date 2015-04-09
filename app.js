$(document).ready(function(){
	var color = "white";
	var colors = "white green blue red yellow";
	$('.box').on('click', function(){
		//console.log('clicked');
		$(this).addClass(color);
	})
	$('.box').on('dblclick', function(){
		//console.log('double clicked');
		$(this).removeClass(colors);
	})
	$('#reset').on('click', function(){
		$('.box').removeClass(colors);
	})
	$('#red').on('click', function(){
		color = 'red';
	})
	$('#green').on('click', function(){
		color = 'green';
	})
	$('#blue').on('click', function(){
		color = 'blue';
	})
	$('#yellow').on('click', function(){
		color = 'yellow';
	})
	$('#white').on('click', function(){
		color = 'white';
	})
})