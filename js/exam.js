$(document).ready(function () {
	var questionsObject = [];
	$.getJSON("data.json", function (mydata) {
		//read json file into questionObject


		function Question(qBody, cAnswer, answersArray) {
			this.qBody = qBody;
			this.cAnswer = cAnswer;
			this.answersArray = answersArray;
		};

		// store json into arrayObject
		for (var i = 0; i < mydata.length; i++) {
			var question = new Question(mydata[i].qBody, mydata[i].cAnswer, mydata[i].answersArray);
			questionsObject.push(question);
		}

	});

	// display timer  
	function showTimer() {
		var timerText = document.createElement('p');
		//timerText.setAttribute("class", "timerDiv");
		// Set the date we're counting down to
		var countDownDate = new Date().getTime() + 600000;

		// Update the count down every 1 second
		var x = setInterval(function () {

			// Get today's date and time
			var now = new Date().getTime();
			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for minutes and seconds
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Output the result
			timerText.innerHTML = minutes + "m " + seconds + "s ";

			// If the count down is over, write some text
			if (distance < 0) {
				clearInterval(x);
				alert("Time Out , please wait for your result");
				// redirect to result page
				localStorage.setItem("examResult", result);
				window.open("result.html", "_self");
			}
			document.getElementById("timerDiv").appendChild(timerText);
		}, 1000);

	}

	//	// check user login
	if (localStorage.getItem("islogin") == "true") {

		var startButton = document.getElementById("startButton");
		var goHomeButton = document.getElementById("goHomeButton");
		var disclaimerText = document.getElementById("disclaimerText");
		var tips = document.getElementById("tips");
		var submitButton = document.createElement("button");
		var resetButton = document.createElement("button");

		submitButton.innerText = "Submit"
		resetButton.innerText = "Reset"

		var cAnswersObject = [];
		var myAnswersObject = [];
		var indexArray = [];
		var result = 0;

		//generate 10 random indexes
		var questionsDiv = document.getElementById('questionsDiv');


		//		for (var i = 0; i < 10; i++) {
		//			var randomIndex = Math.floor(Math.random() * 24) + 0;
		//			console.log(randomIndex)
		//			// store radom numbers in index array
		//			indexArray.push(randomIndex);
		//		}
		//

		while (indexArray.length < 10) {
			var r = Math.floor(Math.random() * 24) + 1;
			if (indexArray.indexOf(r) === -1) {
				console.log(r)
				indexArray.push(r);
			}
		}


		startButton.onclick = function () {
			//hide buttons
			startButton.style.display = "none";
			goHomeButton.style.display = "none";
			disclaimerText.style.display = "none";
			tips.style.display = "none";

			// display timer
			showTimer();

			// hide logout button
			document.getElementsByClassName("logoutBtn")[0].style.visibility = "hidden";
			document.getElementsByClassName("logoutBtn")[1].style.visibility = "hidden";
			//document.getElementsByTagName("li").href="javascript: void(0)";

			for (var j = 0; j < document.getElementsByTagName("a").length; j++) {
				document.getElementsByTagName("a")[j].style.pointerEvents = "none";
			}




			// display questions
			var order = 1
			for (var j = 0; j < indexArray.length; j++) {
				var questionDiv = document.createElement("div");
				questionDiv.setAttribute("class", "questionDivClass");
				var questionBodyText = document.createElement('p');

				//console.log(indexArray[j])

				questionBodyText.innerText = ("Q" + order + ":  ") + questionsObject[indexArray[j]].qBody;
				//console.log(questionBodyText)
				questionDiv.appendChild(questionBodyText);

				cAnswersObject[j] = questionsObject[indexArray[j]].cAnswer;

				order++
				//display answers text and radio buttons for choise
				for (var i = 0; i < questionsObject[indexArray[j]].answersArray.length; i++) {
					var answerDiv = document.createElement("div");
					var answerText = document.createElement('P');
					answerText.innerText = questionsObject[indexArray[j]].answersArray[i];
					var answerChoise = document.createElement('input');
					answerChoise.setAttribute("type", "radio");
					answerChoise.setAttribute("class", "myInputAnswers");
					answerChoise.setAttribute("name", indexArray[j]);
					answerChoise.setAttribute("value", questionsObject[indexArray[j]].answersArray[i]);

					answerDiv.appendChild(answerChoise);
					answerDiv.appendChild(answerText);

					questionDiv.appendChild(answerDiv);
				}

				document.getElementById("questionsDiv").appendChild(questionDiv);

			}

			console.log(cAnswersObject)

			// show submit & reset buttons
			questionDiv.appendChild(submitButton);
			questionDiv.appendChild(resetButton);
			document.getElementById("questionsDiv").appendChild(questionDiv);



		}

		goHomeButton.onclick = function () {
			window.open("index.html", "_self");
		}

		submitButton.onclick = function () {
			//get all user answers and store it into myAnswersObject
			var displayedRadioButtonsObject = document.getElementsByClassName('myInputAnswers');
			console.log(displayedRadioButtonsObject.length)
			for (var i = 0; i < displayedRadioButtonsObject.length ; i++) {

				if (myInclude(cAnswersObject, displayedRadioButtonsObject[i].value) && displayedRadioButtonsObject[i].checked) {

					//myAnswersObject[i] = displayedRadioButtonsObject[i].value;

					result += 10;

				}
			}

			localStorage.setItem("examResult", result);
			console.log(localStorage.getItem("examResult"));
			window.open("result.html", "_self");

			//console.log(myAnswersObject)

			//calculate result
			//			if (myAnswersObject.length - 1 == cAnswersObject.length) {
			//				for (var i = 0; i < myAnswersObject.length; i++) {
			//					if (myAnswersObject[i] === cAnswersObject[i]) {
			//						result += 10;
			//					}
			//				}
			//
			//				//redirect to result page and pass result value
			//
			//				localStorage.setItem("examResult", result);
			//
			//				console.log(localStorage.getItem("examResult"));
			//				window.open("result.html", "_self");
			//
			//			} else {
			//				alert("You Should Answer All Question")
			//			}
		}

		function myInclude(arr, obj) {
			return (arr.indexOf(obj) != -1);
		}

		resetButton.onclick = function () {
			var displayedRadioButtonsObject = document.getElementsByTagName('input');
			for (i = 0; i < displayedRadioButtonsObject.length; i++) {
				if (displayedRadioButtonsObject[i].type = "radio") {
					displayedRadioButtonsObject[i].checked = false;
				}
			}
		}




	} else {
		//redirect to login page
		document.getElementById("startButton").style.visibility = "hidden";
		document.getElementById("goHomeButton").style.visibility = "hidden";
		alert("You Must Login First ")
	}



});
