"use strict";

let input = document.querySelector(".tasks__input");

function addItem() {
	
	if (input.value.trim()) {
		document.querySelector(".tasks__list").insertAdjacentHTML("beforeEnd", `
			<div class="task">
			    <div class="task__title">
			    	${input.value}
			    </div>
			    <a href="#" class="task__remove">&times;</a>
			</div>
		`)

		event.preventDefault();

		let remove = Array.from(document.querySelectorAll(".task__remove"));

		for (let i of remove) {
			i.addEventListener("click", function() {
				this.closest(".task").remove();
			});
		};

		input.value = "";
	};
};

document.addEventListener("keydown", event => {
	if (event.keyCode === 13) {
		addItem();	
	};
});

document.querySelector(".tasks__add").addEventListener("click", event => {
	addItem();
});



