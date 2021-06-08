'use strict'

const count = document.getElementById("timer");

function getCountdown() {
	count.textContent -= 1;

	if (count.textContent <= 0) {
		clearInterval(countdownId);
		alert('Вы победили в конкурсе!');
	}
}

const countdownId = setInterval (getCountdown, 1000);