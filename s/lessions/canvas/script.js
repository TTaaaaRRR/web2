var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var R = 150; // radius

(function draw() {
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000000";
	window.requestAnimationFrame(draw);
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	console.log(`${hours}:${minutes}:${seconds}`)

	ctx.clearRect(0, 0, 302, 302);
	ctx.beginPath();
	ctx.arc(R + 1, R + 1, R, 0, Math.PI * 2, false); // for smoothness on edges of the canvas
	ctx.stroke();
	ctx.closePath();

	for(var d = 0; d < 60; d++) {
		var angle = (d / 60) * (2 * Math.PI);
		var px = Math.cos(angle) * R;
		var py = -Math.sin(angle) * R;
		var qx = 0.9 * px;
		var qy = 0.9 * py;
		px += R + 1;
		py += R + 1;
		qx += R + 1;
		qy += R + 1;

		ctx.lineWidth = (d % 5 == 0) ? 3 : 1;

		ctx.beginPath();
		ctx.moveTo(px, py);
		ctx.lineTo(qx, qy);
		ctx.stroke();
		ctx.closePath();
	}

	secondsAngle = (seconds / 60) * (2 * Math.PI) + Math.PI;
	minutesAngle = (minutes / 60) * (2 * Math.PI) + Math.PI;
	hoursAngle = ((hours % 12) / 12) * (2 * Math.PI) + Math.PI;

	ctx.translate(R, R);

	ctx.lineWidth = 5;
	ctx.rotate(hoursAngle);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, 75);
	ctx.stroke();
	ctx.closePath();
	ctx.rotate(-hoursAngle);

	ctx.lineWidth = 3;
	ctx.rotate(minutesAngle);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, 100);
	ctx.stroke();
	ctx.closePath();
	ctx.rotate(-minutesAngle);

	ctx.lineWidth = 3;
	ctx.strokeStyle = "#FF0000";
	ctx.rotate(secondsAngle);
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, 125);
	ctx.stroke();
	ctx.closePath();
	ctx.rotate(-secondsAngle);

	ctx.translate(-R, -R);
})();
