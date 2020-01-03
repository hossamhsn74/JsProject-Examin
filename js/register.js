var myInputFields = document.getElementsByClassName("input-field");
var mySpan = document.getElementsByClassName("errorSpan");
var regBtn = document.getElementById("regBTN");
var clearBtn = document.getElementById("clearBTN");
var myGenderMale = document.getElementById("male");
var myGenderFemale = document.getElementById("female");

// inputs vars
var myFName;
var myLName;
var myUserName;
var myPassword;
var myCity;
var myAddress;
var myGender;

myInputFields[2].onblur = validateFirstName;
myInputFields[3].onblur = validateLastName
myInputFields[4].onblur = validateUserName
myInputFields[5].onblur = validatePassword
myInputFields[6].onblur = validateCity
myInputFields[7].onblur = validateAddress

//validateFirstName  
function validateFirstName() {
 	var myData = myInputFields[2].value;
	if (allLetter(myData) == false || myData.length < 3) {
		mySpan[0].innerText = " * Can't be empty and  Value must be more than 3 char (char only)"
		myInputFields[2].style.border = "1px solid red"
		return false;
	} else {
		mySpan[0].innerText = ""
		myInputFields[2].style.border = " 2px solid dodgerblue"
		myFName = myData;
		return true;
	}
}
//validateLastName
function validateLastName() {

	var myData = myInputFields[3].value;
	if (allLetter(myData) == false || myData.length < 3) {
		mySpan[1].innerText = " * Can't be empty and  Value must be more than 3 char (char only)"
		myInputFields[3].style.border = "1px solid red";
		return false;
	} else {
		mySpan[1].innerText = ""
		myInputFields[3].style.border = " 2px solid dodgerblue"
		myLName = myData;
		return true
	}
}
//validateUserName
function validateUserName() {

	var myData = myInputFields[4].value;
	if (allnumeric(myData) == true || myData.length < 5) {
		mySpan[2].innerText = " * Can't be empty or all numeric and  Value must be more than 5 char"
		myInputFields[4].style.border = "1px solid red";
		return false;
	} else {
		mySpan[2].innerText = ""
		myInputFields[4].style.border = " 2px solid dodgerblue"
		myUserName = myData;
		return true
	}
}
//validatePassword
function validatePassword() {
	var myData = myInputFields[5].value;
	if (myData.length < 6) {
		mySpan[3].innerText = " * Can't be empty and Value must be more than 6 char"
		myInputFields[5].style.border = "1px solid red";
		return false;
	} else {
		mySpan[3].innerText = ""
		myInputFields[5].style.border = " 2px solid dodgerblue"
		myPassword = myData
		return true
	}
}
//validateCity
function validateCity() {

	var myData = myInputFields[6].value;
	if (allLetter(myData) == false || myData.length < 3) {
		mySpan[4].innerText = " * Can't be empty and  Value must be more than 3 char (char only)"
		myInputFields[6].style.border = "1px solid red";
		return false;
	} else {
		mySpan[4].innerText = ""
		myInputFields[6].style.border = " 2px solid dodgerblue"
		myCity = myData
		return true
	}
}
//validateAddress
function validateAddress() {

	var myData = myInputFields[7].value;
	if (allnumeric(myData) == true || myData.length < 5) {
		mySpan[5].innerText = " * Can't be empty or all numeric and  Value must be more than 5 char"
		myInputFields[7].style.border = "1px solid red";
		return false;
	} else {
		mySpan[5].innerText = ""
		myInputFields[7].style.border = " 2px solid dodgerblue"
		myAddress = myData
		return true
	}
}

myGenderMale.onclick = function () {
	myGenderMale.setAttribute("checked", "checked")
	myGenderFemale.setAttribute("checked", "")
	myGender = "Male"
}
myGenderFemale.onclick = function () {
	myGenderFemale.setAttribute("checked", "checked")
	myGenderMale.setAttribute("checked", "")
	myGender = "Female"
}
// check if the input value is just numbers
function allnumeric(inputtxt) {
	var numbers = /^[0-9]+$/;
	if (inputtxt.match(numbers)) {
		return true;
	} else {
		return false;
	}
}
// check if the input value is just letters
function allLetter(inputtxt) {
	var letters = /^[A-Za-z]+$/;
	if (inputtxt.match(letters)) {
		return true;
	} else {
		return false;
	}
}

// if the register button is clicked 
regBtn.onclick = function () {
	
	//
	//checks if the  data is valid 
	if (validateFirstName() && validateLastName() && validateUserName() && validateCity() && validatePassword() && validateAddress() && myGender != undefined) {
		
		// store them to the local storage 
		 localStorage.setItem("fname", myFName);
		 localStorage.setItem("lname", myLName);
		 localStorage.setItem("username", myUserName);
		 localStorage.setItem("password", myPassword);
		 localStorage.setItem("city", myCity);
		 localStorage.setItem("address", myAddress);
		 localStorage.setItem("gender", myGender);
		
		//set a key called isLogin to chacek after that about the status of the user in (login.js)
		
		 localStorage.setItem("islogin", true);

	} else {
		// if the data not valid alert to the user and setlogin = false
		alert("Please Validate all fields Well  ")
		localStorage.setItem("islogin", false);
	}
}
