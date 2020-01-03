window.onhashchange = function () {
	window.open("index.html", "_self");
}

var correct_answers = localStorage.getItem("examResult");
var total_answers = 100
var percent = correct_answers / total_answers
// setInerval(100000,result())

function result() {
	var pie = document.getElementsByClassName('result')[0]
	var c = pie.getContext("2d");
	c.fillStyle = '#ec0911'
	c.beginPath();
	c.arc(200, 200, 150, 0, 2 * Math.PI, true);
	c.fill();
	c.closePath();
	c.fillStyle = '#2abc24'
	c.beginPath();
	c.moveTo(200, 200)
	c.lineTo(350, 200);

	c.arc(200, 200, 150, 0, (2 - 2 * percent) * Math.PI, true)
	c.lineTo(200, 200)
	c.fill();
	c.closePath();

}

//

// the score result
if (percent >= 0.5) {

	document.getElementById("result").innerHTML = "<p>Congratulations You Passed  Your Score is " + 100 * percent + "%</p>"
	document.getElementById("resultbtn").innerHTML = "<button class='toHome'> Home </button>"

	document.getElementsByClassName("toHome")[0].onclick = function () {
		window.open("index.html", "_self");
	}
} else {
	document.getElementById("result").innerHTML = "<p> Sorry you didn't pass   Your Score is    " + 100 * percent + "%</p> "
	document.getElementById("resultbtn").innerHTML = "<button class='tryAgain'> Try Again </button>"

	document.getElementsByClassName("tryAgain")[0].onclick = function () {
		window.open("exam.html", "_self");
	}

}
if (percent == 0) {
	var pie = document.getElementsByClassName('result')[0]
	var c = pie.getContext("2d");
	c.fillStyle = '#ec0911'
	c.beginPath();
	c.arc(200, 200, 150, 0, 2 * Math.PI, true);
	c.fill();
	c.closePath();

} else {
	result()
}
