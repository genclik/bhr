$(document).ready(function() {
	$(".addBook").each(function(){
		$(this).wrap('<div class="bookSheet"><div class="bookSheet"></div></div>');
		$(this).parents(".bookSheet").width($(this).outerWidth() -2);
	});
	
	$(".addChild").prepend('<span class="button"><span /></span>');
	$(".share").wrapInner('<span class="button"><span /></span>');
	
	

	/*Rhino Slider*/
	$('#slider').rhinoslider({
		controlsMousewheel: false,
		controlsKeyboard: false,
		controlsPlayPause: false,
		showBullets: 'never',
		showControls: 'always',
		slidePrevDirection: 'toRight',
		slideNextDirection: 'toLeft'
	});
});

$(window).resize(function() {
	$(".addBook").each(function(){
		//$(this).wrap('<div class="bookSheet"><div class="bookSheet"></div></div>');
		$(this).parents(".bookSheet").width($(this).outerWidth() -2);
	});
});


/*Growth Charts*/
google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = new google.visualization.DataTable();
		data.addColumn('number', 'months');
		data.addColumn('number', 'moyenne1');
		data.addColumn('number', 'moyenne2');
		data.addColumn('number', 'moyenne3');
		data.addColumn('number', 'thebaby');

		data.addRows(4);
		
		data.setValue(0, 0, 0);//--months
		data.setValue(0, 1, 19.5);//moyenne1
		data.setValue(0, 2, 19.5);//moyenne2
		data.setValue(0, 3, 19.5);//moyenne3
		data.setValue(0, 4, 19.5);//thebaby

		data.setValue(1, 0, 4);//--months
		data.setValue(1, 1, 25);//moyenne1
		data.setValue(1, 2, 25);//moyenne2
		data.setValue(1, 3, 25);//moyenne3


		data.setValue(2, 0, 8);//--months
		data.setValue(2, 1, 28.25);//moyenne1
		data.setValue(2, 2, 28.25);//moyenne2
		data.setValue(2, 3, 28.25);//moyenne3


		data.setValue(3, 0, 16);//--months
		data.setValue(3, 1, 31.5);//moyenne1
		data.setValue(3, 2, 31.5);//moyenne2
		data.setValue(3, 3, 31.5);//moyenne3

		
		data.setValue(3, 0, 24);//--months
		data.setValue(3, 1, 34.5);//moyenne1
		data.setValue(3, 2, 34.5);//moyenne2
		data.setValue(3, 3, 34.5);//moyenne3
		data.setValue(3, 4, 34.5);//thebaby
		
		//Baby
		data.setValue(0, 4, 21);
		data.setValue(1, 4, 24);
		data.setValue(2, 4, 30);
		data.setValue(3, 4, 32);
		data.setValue(3, 4, 35);

		var options = {
			title: 'Growth Chart - Length',
			width: 500,
			height:500,
			curveType: 'function',
			legend: 'none',
			interpolateNulls: true,
			backgroundColor: 'transparent',
			theme: 'maximized',
			hAxis: {title: 'Age (Months)', gridlines:{color:'cfb98d'}, maxValue: 40, minValue: 15},
			vAxis: {title: 'Length (Inches)', gridlines:{color:'cfb98d'}, maxValue: 40, minValue: 15},
			series: [
				{color: 'b9a47b', lineWidth: 55, enableInteractivity: false},
				{color: '92805e', lineWidth: 40, enableInteractivity: false},
				{color: '6e5c3f', lineWidth: 24, enableInteractivity: false},
				{color: 'c1c1c1', lineWidth: 3, enableInteractivity: true},
			]
		};

        var chart = new google.visualization.LineChart(document.getElementById('graphic_weight'));
        chart.draw(data, options);
		}