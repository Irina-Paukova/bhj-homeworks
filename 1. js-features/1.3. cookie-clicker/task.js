'use strict'

const cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = clickHandler;

function clickHandler() {
	clickerCounter.textContent ++;
	cookie.width = 230;
	setTimeout(() => cookie.width = 200, 100);
}