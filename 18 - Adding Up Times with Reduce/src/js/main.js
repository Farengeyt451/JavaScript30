const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
console.log(timeNodes);

const seconds = timeNodes.map(node => node.dataset.time).map(timeCode => {
	[mins, secs] = timeCode.split(":").map(parseFloat);
	return (mins * 60) + secs;
}).reduce((total, vodSeconds) => total + vodSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = seconds % 3600;

const minuts = Math.floor(secondsLeft / 60);
secondsLeft = seconds % 60;

console.log(`${hours} hours ${minuts} minuts ${secondsLeft} seconds`);
