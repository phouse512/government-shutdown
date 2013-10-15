function getTimeDistance(){
	var now = new Date();
	var time = new Date("2013", "08", "30");

	var diff = Math.abs(now - time);

	return diff/1000;
}

function displayClock(){
	var clock = $(".counterClock").FlipClock(getTimeDistance(), {
		clockFace: 'DailyCounter'
	});
}