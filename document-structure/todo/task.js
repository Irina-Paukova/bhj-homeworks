"use strict";

let input = document.querySelector(".tasks__input");

document.addEventListener("keydown", event => {
	if (event.keyCode === 13) {
		if (input.value) {
			document.querySelector(".tasks__list").innerHTML += `
				<div class="task">
				    <div class="task__title">
				    	${input.value}
				    </div>
				    <a href="#" class="task__remove">&times;</a>
				</div>
			`;

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
});
