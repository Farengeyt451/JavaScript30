const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const checkBut = document.querySelector("button[data-check='check']");
const uncheckBut = document.querySelector("button[data-check='uncheck']");
const clearBut = document.querySelector("button[data-check='clear']");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector("[name=item]").value;
	const item = {
		text: text, // ES6 text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem("items", JSON.stringify(items));
	this.reset();
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" :""}/>
				<label for="item${i}">${plate.text}</label>
			</li>
		`;
	}).join("");
}

function toggleDone(e) {
	if (!e.target.matches("input")) return;
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem("items", JSON.stringify(items));
}

function toggleAll(e) {
	items.forEach(function(el) {
		el.done = true;
	});
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items, itemsList);
}

function clearAll(e) {
	items.forEach(function(el) {
		el.done = false;
	});
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items, itemsList);
}

function clearLocalStorage() {
	localStorage.removeItem("items");
	window.location.reload();
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
checkBut.addEventListener("click", toggleAll);
uncheckBut.addEventListener("click", clearAll);
clearBut.addEventListener("click", clearLocalStorage);

populateList(items, itemsList);
