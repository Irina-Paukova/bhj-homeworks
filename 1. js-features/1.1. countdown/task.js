'use strict'

const isTimer = document.getElementById(timer);

function getCountdown() {
	timer.textContent = timer.textContent - 1;

	if (timer.textContent <= 0) {
		clearInterval(countdownId);
		alert('Вы победили в конкурсе!');
	}
} 

const countdownId = setInterval(getCountdown, 1000);