const testElem = document.querySelector(".hello > h1");

testElem.draggable = true;

function handleTitleCilck() {
	// const clickedClass = "active";
	// if (testElem.classList.contains(clickedClass)) {
	// 	testElem.classList.remove(clickedClass);
	// } else {
	// 	testElem.classList.add(clickedClass);
	// }
	testElem.classList.toggle("active");
}

testElem.addEventListener("click", handleTitleCilck);
