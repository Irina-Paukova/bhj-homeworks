"use strict";

function searchActiv(element) {
	if (element.classList.contains("font-size_active")) {
		return element;
	};
};

let fontSize = Array.from(document.querySelectorAll(".font-size"));

for (const i of fontSize) {
	i.onclick = function() {
		let activIndex = fontSize.findIndex(searchActiv);
		let size = i.dataset.size;
		
		fontSize[activIndex].classList.remove("font-size_active");
		i.classList.add("font-size_active");

		document.querySelector(".book").classList.remove("font-size_big");
		document.querySelector(".book").classList.remove("font-size_small");
		document.querySelector(".book").classList.add(`${size}`);

		return false;
	};
};