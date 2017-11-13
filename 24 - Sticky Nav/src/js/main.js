const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function fixNav() {
	console.log(topOfNav, window.scrollY);
	if (window.scrollY >= topOfNav) {
		document.body.style.paddingTop = nav.offsetHeight + "px";
		document.body.classList.add("fixed-nav");
	} else {
		document.body.classList.remove("fixed-nav");
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener("scroll", debounce(fixNav));
