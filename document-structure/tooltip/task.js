"use strict";

let links = Array.from(document.querySelectorAll(".has-tooltip"));

for (let link of links) {
	link.onclick = function() {
		if (link.lastChild.textContent === link.textContent) {
			link.insertAdjacentHTML("beforeEnd", `<p class="tooltip tooltip_active">${link.getAttribute("title")}</p>`);
		} else {
			this.lastChild.remove();
		};

		return false;
	};
};