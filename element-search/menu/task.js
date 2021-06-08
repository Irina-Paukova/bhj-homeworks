let links = document.querySelectorAll(".menu__link");

for (let i = 0; i < links.length; i++) {
	links[i].onclick = function() {

		if (links[i].nextElementSibling) {
			links[i].nextElementSibling.classList.add("menu_active");
			
			return false;
		};
	};
};