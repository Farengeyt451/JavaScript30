const checkboxes = document.querySelectorAll(".item input[type='checkbox']");
let lastChecked;

function handleCheckbox(e) {
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log("OK start");
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheckbox));
