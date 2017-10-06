var canvas = document.getElementById("2d");
var context = canvas.getContext("2d");
var R = 120; // radius


(function draw() {
	context.lineWidth = 1;
	context.strokeStyle = "#000000";
	window.requestAnimationFrame(draw);
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	console.log(`${hours}:${minutes}:${seconds}`)

	context.clearRect(0, 0, 302, 302);
	context.beginPath();
	context.arc(R + 1, R + 1, R, 0, Math.PI * 2, false); // for smoothness on edges of the canvas
	context.stroke();
	context.closePath();

	for(var i = 0; i < 60; i++) {
		var angle = (i / 60) * (2 * Math.PI);
		var px = Math.cos(angle) * R;
		var py = -Math.sin(angle) * R;
		var qx = 0.9 * px;
		var qy = 0.9 * py;
		px += R + 1;
		py += R + 1;
		qx += R + 1;
		qy += R + 1;
        
		context.lineWidth = (i % 5 == 0) ? 3 : 1;
        context.strokeStyle =(i % 15 == 0) ? "#FF0000": "#000000" ;
		context.beginPath();
		context.moveTo(px, py);
		context.lineTo(qx, qy);
		context.stroke();
		context.closePath();
	}

	secondsAngle = (seconds / 60) * (2 * Math.PI) + Math.PI;
	minutesAngle = (minutes / 60) * (2 * Math.PI) + Math.PI;
	hoursAngle = ((hours % 12) / 12) * (2 * Math.PI) + Math.PI;

	context.translate(R, R);

    context.lineWidth = 5;
    context.strokeStyle = "#C3C3C3";
	context.rotate(hoursAngle);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(0, 50);
	context.stroke();
	context.closePath();
	context.rotate(-hoursAngle);

    context.lineWidth = 4;
    context.strokeStyle = "#000";
	context.rotate(minutesAngle);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(0, 70);
	context.stroke();
	context.closePath();
	context.rotate(-minutesAngle);

	context.lineWidth = 3;
	context.strokeStyle = "#FF0000";
	context.rotate(secondsAngle);
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(0, 80);
	context.stroke();
	context.closePath();
	context.rotate(-secondsAngle);

	context.translate(-R, -R);
})();
