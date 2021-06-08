"use strict";

let cross = document.querySelectorAll(".modal__close");

for (let i = 0; i < cross.length; i++) {
	cross[i].onclick = function() {
		let windowsToClose = document.querySelectorAll(".modal");

		for (let i = 0; i < windowsToClose.length; i++) {
			windowsToClose[i].classList.remove("modal_active");
		};
	};
};

document.querySelector(".show-success").onclick = function() {
	//Закрываем, чтобы цвет фона не становился темнее
	document.querySelector(".modal_active").classList.remove("modal_active"); 

	//Добавляем класс modal_active для активации окна
	document.querySelector("#modal_success").classList.add("modal_active");
};