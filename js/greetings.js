const loginForm = document.getElementById("login-form");
const greetingContainer = document.getElementById("greeting");
const greetingText = document.querySelector("#greeting h1");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASS);
	localStorage.setItem(USERNAME_KEY, e.target.username.value);
	addGreeting(localStorage.getItem(USERNAME_KEY));
}

function addGreeting(username) {
	greetingContainer.classList.remove(HIDDEN_CLASS);
	greetingText.innerText = `Hello ${username}!`;
}

const username = localStorage.getItem(USERNAME_KEY);
if (username === null) {
	loginForm.classList.remove(HIDDEN_CLASS);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	addGreeting(username);
}
