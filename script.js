$(document).ready(function(){

	var appearSpeed = 500

	// this function is what makes the 'more' things fade in and out when you click on their items
	$('.item').click(function() {
		var more = $(this).attr('class').split()
		var moreNum = parseInt(more, 10)
		var moreMate = $(".more" + "." + moreNum);
		moreMate.css("z-index", "20");
		moreMate.siblings().css('z-index','1');
		moreMate.fadeToggle(appearSpeed, function() {
			moreMate.siblings().fadeOut(appearSpeed);
		});
		$(this).toggleClass('highlight');
		$(this).siblings().removeClass('highlight');
	});


	
	$('item').each(function( index ) {
		console.log( index + ": " + $( this ).attr("time") );
	});

	$('div.item').each(function( index ) {
		console.log( index + ": " + $( this ).attr('data-end') );
	});

	// attempt at automating all of the drawing

	var canvas = document.getElementById("lines");
	var ctx = canvas.getContext("2d");
	canvas.width = screen.availWidth;
	canvas.height = screen.availHeight;



	/*
	$('.item').each( function ( index ) {

		var allItem = $( this ).offset();
		var allItemHeight = $( this ).height();
		var allItemLeft = allItem.left;
		var allItemTop = allItem.top;
		var allItemBot = allItemTop + allItemHeight;
		
		var allItemStartPair = [allItemLeft, allItemBot];

		var allItemEndPair = [allItemLeft, allItemTop];

		var allDateStart = $( this ).children('.start').attr('datetime');
		var allDateStartLoc = $('#timeline' + allDateStart).offset();
		var allDateStartLocLeft = allDateStartLoc.left;
		var allDateStartLocTop = allDateStartLoc.top;
		var allDateStartBoth = [allDateStartLocLeft, allDateStartLocTop];

		var allDateEnd = $( this ).children('.end').attr('datetime');
		var allDateEndLoc = $('#timeline' + allDateEnd).offset();
		var allDateEndLocLeft = allDateEndLoc.left;
		var allDateEndLocTop = allDateEndLoc.top;
		var allDateEndBoth = [allDateEndLocLeft, allDateEndLocTop];


		ctx.moveTo(allItemStartPair [0], allItemStartPair [1]);
		ctx.lineTo(allDateStartBoth[0], allDateStartBoth [1]);
		ctx.lineTo(allDateEndBoth [0], allDateEndBoth [1]);
		ctx.lineTo(allItemEndPair [0], allItemEndPair [1]);
		ctx.closePath();
		ctx.stroke();

	});
	*/
});



