"use strict";

let counter = 0;

document.querySelector(".slider__arrow_prev").onclick = function() {
	let sliderItem = document.querySelectorAll(".slider__item");

	for (let i = 0; i < sliderItem.length; i++) {
		sliderItem[i].classList.remove("slider__item_active");
		sliderItem[counter].classList.add("slider__item_active");
	};

	sliderItem[counter].classList.add("slider__item_active");


	if (counter === 0) {
		counter = 4;
		
		for (let i = 0; i < sliderItem.length; i++) {
			sliderItem[i].classList.remove("slider__item_active");
			sliderItem[counter].classList.add("slider__item_active");
		};
	};

	counter--;
	console.log(counter);

};

document.querySelector(".slider__arrow_next").onclick = function() {
	let sliderItem = document.querySelectorAll(".slider__item");

	for (let i = 0; i < sliderItem.length; i++) {
		sliderItem[i].classList.remove("slider__item_active");
		sliderItem[counter].classList.add("slider__item_active");
	};

	counter++;

	if (counter === 5) {
		counter = 0;
		
		for (let i = 0; i < sliderItem.length; i++) {
			sliderItem[i].classList.remove("slider__item_active");
			sliderItem[counter].classList.add("slider__item_active");
		};
	};

	sliderItem[counter].classList.add("slider__item_active");
	console.log(counter);

	
};