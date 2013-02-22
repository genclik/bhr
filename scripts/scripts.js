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

/*******************************
	Growth Charts
********************************/
	/*boys*/
	var GrowthChartLength = [
	[-5,10], [0,19.5], [2,22.75], [4,25], [6,26.5],[8,27.75], 
	[10,28.75],[12,29.75], [14,30.63],[16,31.5],[18,32.35],
	[20.5,33.25],[22,33.75], [24,34.5],	[40,40]];
	/*girls
	var GrowthChartLength = [
	[-5,10], [0,19.5], [2,22.25], [4,24.25], [6,26],[8,27], 
	[10,28],[12,29], [14,30],[16,30.75],[18,31.75],
	[20,32.5],[22,33.25], [24,34], [40,40]];*/
	
	var BabyLineLength = [[0,21],[4,24],[8,30],[16,32],[24,35]];
	
	/*boys*/
	var GrowthChartWeight = [
	[-5,0],	[0,7.25],[2,12.25], [3,14], [5,16.5],[7,18.25],
	[8,19], [10,20.25], [12,21.25],	[13,21.75], [15,22.75], 
	[18,24], [24,26.75], [40,35]];
	/*girls
	var GrowthChartWeight = [
	[-5,0],	[0,7],[2,11.25], [4,14], [6,16],[8,17.5],
	[10,18.30], [12,19.75], [14,20.75],	[16,21.50], [18,22.5], 
	[20,23.5], [22,24.5], [24,25.25], [40,35]];*/
	
	var BabyLineWeight = [[0,8],[5,16],[10,22],[22,25.25],[24,26.5]];
	
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);
    function drawChart() {
        var dataLength = new google.visualization.DataTable();
		var dataWeight = new google.visualization.DataTable();
		
		dataLength.addColumn('number', 'months');
		dataLength.addColumn('number', 'moyenne1');
		dataLength.addColumn('number', 'moyenne2');
		dataLength.addColumn('number', 'moyenne3');
		dataLength.addColumn('number', 'thebaby');
		
		dataWeight.addColumn('number', 'months');
		dataWeight.addColumn('number', 'moyenne1');
		dataWeight.addColumn('number', 'moyenne2');
		dataWeight.addColumn('number', 'moyenne3');
		dataWeight.addColumn('number', 'thebaby');
		
		/*******************************
		  Canadian Growth Chart Length
		********************************/
		for (var i=0;i<GrowthChartLength.length;i++){
			dataLength.addRows(1);
			dataLength.setValue(dataLength.getNumberOfRows()-1, 0, GrowthChartLength[i][0]);//--months
			dataLength.setValue(dataLength.getNumberOfRows()-1, 1, GrowthChartLength[i][1]);//--Moyenne1
			dataLength.setValue(dataLength.getNumberOfRows()-1, 2, GrowthChartLength[i][1]);//--Moyenne2
			dataLength.setValue(dataLength.getNumberOfRows()-1, 3, GrowthChartLength[i][1]);//--Moyenne3
		}
		
		for (var i=0;i<GrowthChartWeight.length;i++){
			dataWeight.addRows(1);
			dataWeight.setValue(dataWeight.getNumberOfRows()-1, 0, GrowthChartWeight[i][0]);//--months
			dataWeight.setValue(dataWeight.getNumberOfRows()-1, 1, GrowthChartWeight[i][1]);//--Moyenne1
			dataWeight.setValue(dataWeight.getNumberOfRows()-1, 2, GrowthChartWeight[i][1]);//--Moyenne2
			dataWeight.setValue(dataWeight.getNumberOfRows()-1, 3, GrowthChartWeight[i][1]);//--Moyenne3
		}
		
		/**************************
		  Baby Growth Line Length
		**************************/
		
		//Baby start line
		dataLength.addRows(1);
		dataLength.setValue(dataLength.getNumberOfRows()-1, 0, -5);//--months
		dataLength.setValue(dataLength.getNumberOfRows()-1, 4, 10);//--Baby Data
		
		dataWeight.addRows(1);
		dataWeight.setValue(dataWeight.getNumberOfRows()-1, 0, -5);//--months
		dataWeight.setValue(dataWeight.getNumberOfRows()-1, 4, 0);//--Baby Data
		
		//Baby entries
		for (var i=0;i<BabyLineLength.length;i++){
			dataLength.addRows(1);
			dataLength.setValue(dataLength.getNumberOfRows()-1, 0, BabyLineLength[i][0]);//--months
			dataLength.setValue(dataLength.getNumberOfRows()-1, 4, BabyLineLength[i][1]);//--Baby Data
		}
		
		for (var i=0;i<BabyLineWeight.length;i++){
			dataWeight.addRows(1);
			dataWeight.setValue(dataWeight.getNumberOfRows()-1, 0, BabyLineWeight[i][0]);//--months
			dataWeight.setValue(dataWeight.getNumberOfRows()-1, 4, BabyLineWeight[i][1]);//--Baby Data
		}
		
		//Baby end line
		dataLength.addRows(1);
		dataLength.setValue(dataLength.getNumberOfRows()-1, 0, 40);//--months
		dataLength.setValue(dataLength.getNumberOfRows()-1, 4, 40);//--Baby Data
		
		dataWeight.addRows(1);
		dataWeight.setValue(dataWeight.getNumberOfRows()-1, 0, 40);//--months
		dataWeight.setValue(dataWeight.getNumberOfRows()-1, 4, 40);//--Baby Data

		//Get last entry
		LastHaxisLength = BabyLineLength[BabyLineLength.length-1][0];
		LastVaxisLength = BabyLineLength[BabyLineLength.length-1][1];
		$('#length').html(LastVaxisLength);
		
		LastHaxisWeight = BabyLineWeight[BabyLineWeight.length-1][0];
		LastVaxisWeight = BabyLineWeight[BabyLineWeight.length-1][1];
		$('#weight').html(LastVaxisWeight);
	
		var sharedOptions = {
			title: 'Growth Chart - Length',
			width: 146,
			height:143,
			curveType: 'function',
			legend: 'none',
			interpolateNulls: true,
			backgroundColor: 'transparent',
			titlePosition: 'none',
			axisTitlesPosition: 'none',
			theme: 'maximized',
			series: [
				{color: 'b69e73', lineWidth: 55, enableInteractivity: false},
				{color: '92805e', lineWidth: 40, enableInteractivity: false},
				{color: '6e5c3f', lineWidth: 24, enableInteractivity: false},
				{color: 'c1c1c1', lineWidth: 3, enableInteractivity: true, pointSize: 6},
			]
		};
		
		var LengthOptions = {
			hAxis: {
				title: 'Age (Months)', 
				gridlines:{color:'cfb98d'}, 
				showTextEvery:1000, 
				maxValue: 40, 
				minValue: 15,
				viewWindow:{
					max:LastHaxisLength+4, 
					min:LastHaxisLength-7}
				},
			vAxis: {
				title: 'Length (Inches)', 
				gridlines:{color:'cfb98d'}, 
				textStyle:{fontSize:1}, 
				maxValue: 40, 
				minValue: 15,
				viewWindow:{
					max:LastVaxisLength+3, 
					min:LastVaxisLength-7}
				}
		}
		
		var WeightOptions = {
			hAxis: {
				title: 'Age (Months)', 
				gridlines:{color:'cfb98d'}, 
				showTextEvery:1000, 
				maxValue: 40, 
				minValue: 15,
				viewWindow:{
					max:LastHaxisWeight+4, 
					min:LastHaxisWeight-7}
				},
			vAxis: {
				title: 'Weight (lb)', 
				gridlines:{color:'cfb98d'}, 
				textStyle:{fontSize:1}, 
				maxValue: 40, 
				minValue: 15,
				viewWindow:{
					max:LastVaxisWeight+3, 
					min:LastVaxisWeight-7}
				}
		}
		

        var chartLength = new google.visualization.LineChart(document.getElementById('graphic_length'));
        chartLength.draw(dataLength, $.extend(sharedOptions, LengthOptions));
		
		var chartWeight = new google.visualization.LineChart(document.getElementById('graphic_weight'));
        chartWeight.draw(dataWeight, $.extend(sharedOptions, WeightOptions));
	}