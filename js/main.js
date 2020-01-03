var myLeftArrow = document.getElementsByClassName("prev")[0];
var myRightArrow = document.getElementsByClassName("next")[0];
var dots = document.getElementsByClassName("dot");
var slides = document.getElementsByClassName("mySlides");


//global var to control the state of slider
var slideIndex = 1;
showSlidess()
showSlides(slideIndex);

// Next/previous controls
myLeftArrow.onclick = function () {
	showSlides(slideIndex -= 1);
}
myRightArrow.onclick = function () {
	showSlides(slideIndex += 1);
}

// Thumbnail image controls
dots[0].onclick = function () {
	showSlides(slideIndex = 1);
}

dots[1].onclick = function () {
	showSlides(slideIndex = 2);
}

dots[2].onclick = function () {
	showSlides(slideIndex = 3);
}

dots[3].onclick = function () {
	showSlides(slideIndex = 4);
}

dots[4].onclick = function () {
	showSlides(slideIndex = 5);
}

function showSlides(n) {
	var i;
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

function showSlidess() {
	var i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlidess, 2000); // Change image every 2 seconds
}
