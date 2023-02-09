let logged:

function endAnalytics(data: string) {
	console.log(data);
	logged = true;
}

sendAnalytics("The Data");
