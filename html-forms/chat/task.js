"use strict";

const messages = document.querySelector( '.chat-widget__messages' );
const chat = document.querySelector(".chat-widget");
const input = document.querySelector(".chat-widget__input");
let botMessages = ["Привет!", "Я не понимаю тебя", "Не могу", "Позвоните оператору", "У меня выходной"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

chat.addEventListener("click", function () {
	this.classList.add("chat-widget_active");
});

document.addEventListener("keydown", event => {
	let lt = new Date();

	if (input.value) {
		if (event.keyCode === 13) {
			messages.innerHTML += `
			  <div class="message_client">
			    <div class="message__time">
			    	${lt.toLocaleTimeString().substring(0, 5)}
			    </div>
			    <div class="message__text">
			      ${input.value}
			    </div>
			  </div>
			`;

			messages.innerHTML += `
			  <div class="message">
			    <div class="message__time">
			    	${lt.toLocaleTimeString().substring(0, 5)}
			    </div>
			    <div class="message__text">
			      ${botMessages[getRandomInt(botMessages.length)]}
			    </div>
			  </div>
			`;
			input.value = "";
		};
	};
});
