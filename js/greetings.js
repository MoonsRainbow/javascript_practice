const loginForm = document.getElementById("login-form");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASS);
	localStorage.setItem(USERNAME_KEY, e.target.username.value);
	addGreeting(localStorage.getItem(USERNAME_KEY));
}

function addGreeting(username) {
	greeting.classList.remove(HIDDEN_CLASS);
	greeting.innerText = `Hello ${username}`;
}

const username = localStorage.getItem(USERNAME_KEY);
if (username === null) {
	loginForm.classList.remove(HIDDEN_CLASS);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	addGreeting(username);
}
