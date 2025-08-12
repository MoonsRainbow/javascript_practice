const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
];

const bgImage = document.getElementById("bg-image");

const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.src = `resources/img/${chosenImage}`;
