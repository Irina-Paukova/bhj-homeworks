'use strict'

const timer = document.getElementById("timer");

function getCountdown() {
	let count = timer.textContent.substr(6, 8) ? timer.textContent.substr(6, 8) : timer.textContent;

	timer.textContent = new Date(0, 0, 0, 0, 0, -- count).toTimeString().substr(0, 8);

	if (count <= 0) {
		clearInterval(countdownId);
		alert('Вы победили в конкурсе!');
		location = "http://www.mozilla.org";
	}
} 

const countdownId = setInterval(getCountdown, 1000);