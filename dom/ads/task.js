"use strict";

let rotatorCases = Array.from(document.querySelectorAll(".rotator__case"));

function searchActiv(element, index, array) {
	if (element.classList.contains("rotator__case_active")) {
		return element;
	};
};

function timerId() {
	let activIndex = rotatorCases.findIndex(searchActiv);
	// let color = rotatorCases[activIndex].dataset.color;

	// rotatorCases[activIndex].style.color = color; 
	rotatorCases[activIndex].classList.remove("rotator__case_active");

	if (activIndex === rotatorCases.length - 1) {
		activIndex = 0;
	};

	rotatorCases[activIndex + 1].classList.add("rotator__case_active");
};

setInterval(timerId, 1000);