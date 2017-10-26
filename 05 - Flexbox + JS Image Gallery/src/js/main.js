const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minuts = now.getMinutes();
	const hours = now.getHours();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	const minutsDegrees = ((minuts / 60) * 360) + 90;
	const hoursDegrees = ((hours / 12) * 360) + 90;

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minutsDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	if(seconds === 0) {
		secondHand.style.transitionDuration = "0s";
		minHand.style.transitionDuration = "0s";
		hourHand.style.transitionDuration = "0s";
		} else {
		secondHand.style.transitionDuration = "0.05s";
		minHand.style.transitionDuration = "0.05s";
		hourHand.style.transitionDuration = "0.05s";﻿
	}

}

setInterval(setDate, 1000);