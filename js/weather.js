const OPENWEATHERMAP_API_KEY = "51712acd50082b5012e0967ce80bf7f9";

function onGeoSuccess(p) {
	const uri = `https://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
	fetch(uri)
		.then((res) => res.json())
		.then((data) => {
			const weatherElement = document.getElementById("weather__text");
			weatherElement.innerText = `${data.name} ${Math.round(
				data.main.temp
			)}°C ${data.weather[0].main}`;
		});
}

navigator.geolocation.getCurrentPosition(onGeoSuccess);
