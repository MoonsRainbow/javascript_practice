const OPENWEATHERMAP_API_KEY = "51712acd50082b5012e0967ce80bf7f9";

function onGeoSuccess(p) {
	const uri = `https://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
	fetch(uri)
		.then((res) => res.json())
		.then((data) => {
			const cityElement = document.getElementById("weather__city");
			const weatherElement = document.getElementById("weather__weather");
			cityElement.innerText = `${data.name} ${data.main.temp}°C`;
			weatherElement.innerText = data.weather[0].main;
		});
}

navigator.geolocation.getCurrentPosition(onGeoSuccess);
