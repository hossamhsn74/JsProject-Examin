// Define the login vars on header and footer 

var loginEmail = document.getElementById("loginEmail");
var footerLoginEmail = document.getElementById("footerLoginEmail");
var loginPassword = document.getElementById("loginPassword");
var footerLoginPassword = document.getElementById("footerLoginPassword");
var loginButton = document.getElementById("loginBtn")
var footerLoginButton = document.getElementById("footerLoginButton")
var nameDiv = document.getElementById("name")
var nameDiv1 = document.getElementById("name1")
var mainForm = document.getElementsByClassName("login")
var footerLogin = document.getElementsByClassName("footerLogin")
var logoutBtn = document.getElementsByClassName("logoutBtn")

// check if the user is logined or not 
function checkLogin() {
	// check if the user is logined or not
	if (localStorage.getItem("islogin") == "true") {
		var nameValue = localStorage.getItem("username");
		//alert("done")

		//show the user name with logout span in the header

		let nameElement = document.createElement('span');
		let logout = document.createElement('span');
		nameElement.innerText = "Welcom " + nameValue;
		logout.innerText = " Logout ";
		logout.setAttribute("class", "logoutBtn");
		nameDiv.appendChild(nameElement)
		nameDiv.appendChild(logout)

		//show the user name with logout span in the footer

		let nameElement1 = document.createElement('span');
		let logout1 = document.createElement('span');
		nameElement1.innerText = "Welcom " + nameValue;
		logout1.innerText = " Logout ";
		logout1.setAttribute("class", "logoutBtn");
		nameDiv1.appendChild(nameElement1)
		nameDiv1.appendChild(logout1)

		//hide the 2 forms in header and footer 

		mainForm[0].style.display = "none";
		footerLogin[0].style.display = "none";

		/*
			we cant't put this 2 methods in outside if the user is logined because it will give an 
			error that logoutBtn is not defined 
		*/
		// if the header login menue logout button clicked 
		logoutBtn[0].onclick = function () {
			mainForm[0].style.display = "inline";

			footerLogin[0].style.display = "block";
			nameDiv.style.display = "none";
			nameDiv1.style.display = "none";
			nameDiv1.style.width = "0px";
			localStorage.setItem("islogin", "false")
			loginEmail.value = "";
			loginPassword.value = "";
			//alert("logout clicked !!")

		}
		// if the footer login menue logout button clicked 
		logoutBtn[1].onclick = function () {

			nameDiv.style.display = "none";
			nameDiv1.style.display = "none";
			nameDiv1.style.width = "0px";

			mainForm[0].style.display = "inline";

			footerLogin[0].style.display = "block";

			localStorage.setItem("islogin", "false")
			loginEmail.value = "";
			loginPassword.value = "";
			//alert("logout clicked !!")
			document.location.reload(true)
		}
	} else {
		mainForm[0].style.display = "inline";
		footerLogin[0].style.display = "block";


		//alert("You must register First")
		//nameDiv.removeChild(logout)
	}

}

checkLogin()
// if the header login button clicked 
loginButton.onclick = function () {
	// check if the entered value is equal to the stored values 
	if (loginEmail.value == localStorage.getItem("username") && loginPassword.value == localStorage.getItem("password")) {
		localStorage.setItem("islogin", "true")
		checkLogin()
		//alert("logined")
	} else {
		//if the values not matched , alert to user  and reset inputs 
		loginEmail.value = "";
		loginPassword.value = "";
		alert("Email or password not matched or  You must register first ")
	}
	document.location.reload(true)
}
// if the footer  login button clicked 
footerLoginButton.onclick = function () {
	// check if the entered value is equal to the stored values 
	if (footerLoginEmail.value == localStorage.getItem("username") && footerLoginPassword.value == localStorage.getItem("password")) {
		localStorage.setItem("islogin", "true")
		checkLogin()
		//alert("logined")
	} else {
		//if the values not matched , alert to user  and reset inputs 
		footerLoginEmail.value = "";
		footerLoginPassword.value = "";
		alert("Email or password not matched or  You must register first ")
	}
}
