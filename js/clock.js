const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const clockDate = document.getElementById("clock__date");
const clockTime = document.getElementById("clock__time");

function getClock() {
	const date = new Date();
	clockDate.innerText = `${dayNames[date.getDay()]}, ${
		monthNames[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()}`;
	clockTime.innerText = `${String(date.getHours()).padStart(2, "0")}:${String(
		date.getMinutes()
	).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

getClock();
setInterval(getClock, 1000);
