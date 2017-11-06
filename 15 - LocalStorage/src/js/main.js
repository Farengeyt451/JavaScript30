const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector("[name=item]").value;
	const item = {
		text: text, // ES6 text,
		done: false
	};
	console.log(item);
	items.push(item);
	populateList(items, itemsList);
	this.reset();
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => {
		return `

			<li>
				<input type="checkbox" data-index=${i} id="item${i}"/>
				<lable for="">${plate.text}</lable>
			</li>
		`;
	}).join("");
}
addItems.addEventListener("submit", addItem);
