"use strict";

let foodAnimals = document.querySelectorAll(".main");

for (let i = 0; i < foodAnimals.length; i++) {
	foodAnimals[i].addEventListener("change", function() {
		let items = foodAnimals[i].closest(".interest").querySelectorAll(".item");

		if (foodAnimals[i].checked) {
			for (let i = 0; i < items.length; i++) {
				items[i].checked = true;
			};
		} else {
			for (let i = 0; i < items.length; i++) {
				items[i].checked = false;
			};
		};
	});
};