const dogs = [{ name: "Snickers", age: 2 }, { name: "Hugo", age: 8 }];
	function makeGreen() {
		const p = document.querySelector("p");
		p.style.color = "#BADA55";
		p.style.fontSize = "50px";
	}

	// Regular
	console.log("Hello");

	// Interpolated
	console.log("Hello I am a %s string!", "ABC");

	// Styled
	console.log("%c I am styled text", "font-size: 16px; color: #BADA55");

	// Warning!
	console.warn("warn!");

	// Error :|
	console.error("error!");

	// Info
	console.info("info!");

	// Testing
	console.assert(1 === 1, "It`s wrong");
	console.assert(1 === 2, "It`s wrong");

	// Clearing
	// console.clear();

	// Viewing DOM Elements
	const p = document.querySelector("p");
	console.log(p);
	console.dir(p);

	// Grouping together
	dogs.forEach(dog => {
		console.groupCollapsed(`${dog.name}`);
		console.log(`This is ${dog.name}`);
		console.log(`${dog.name} is ${dog.age} years old`);
		console.log(`${dog.name} is ${dog.age * 7} dog years old`);
		console.groupEnd(`${dog.name}`);
	});

	// Counting
	console.count("Al");
	console.count("Al");
	console.count("Al");
	console.count("Al");

	// Timing
		console.time('fetching data');
		fetch('https://api.github.com/users/wesbos')
			.then(data => data.json())
			.then(data => {
				console.timeEnd('fetching data');
				console.log(data);
			});

	// Table
	console.table(dogs);
