"use strict";

document.addEventListener("scroll", function() {
	const viewportHeight = window.innerHeight;
	const reveal = document.querySelectorAll(".reveal");

	for (const i of reveal) {
		const elementTop = i.getBoundingClientRect().top;

		if (elementTop < viewportHeight && elementTop >= 0) {
			i.classList.add("reveal_active");
		} else {
			i.classList.remove("reveal_active");
		};
	};
});