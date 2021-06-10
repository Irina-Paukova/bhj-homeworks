"use strict";

function searchActive(element, index, array) {
	if (element.classList.contains("slider__item_active")) {
		return element;
	};
};

let sliderItems = Array.from(document.querySelectorAll(".slider__item")); //массив всех слайдов

document.querySelector(".slider__arrow_next").onclick = function() {
	let activeIndex = sliderItems.findIndex(searchActive);

	if (activeIndex === sliderItems.length - 1) {
		sliderItems[0].classList.add("slider__item_active");
	};

	sliderItems[activeIndex].classList.remove("slider__item_active");
	sliderItems[activeIndex].nextElementSibling.classList.add("slider__item_active");
};

document.querySelector(".slider__arrow_prev").onclick = function() {
	let activeIndex = sliderItems.findIndex(searchActive);

	if (activeIndex === 0) {
		sliderItems[sliderItems.length - 1].classList.add("slider__item_active");
	};

	sliderItems[activeIndex].classList.remove("slider__item_active");
	sliderItems[activeIndex].previousElementSibling.classList.add("slider__item_active");
};
