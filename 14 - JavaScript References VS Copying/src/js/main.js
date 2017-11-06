	// Let's say we have an array
	const players = ["Wes", "Sarah", "Ryan", "Poppy"];
	const team = players;

	// and we want to make a copy of it.
	console.log(team, players);

	// You might think we can just do something like this:
	players[3] = "Lux";
	console.log(team, players);

	// however what happens when we update that array?
	// now here is the problem!
	// oh no - we have edited the original array too!
	// Why? It's because that is an array reference, not an array copy. They both point to the same array!
	// So, how do we fix this? We take a copy instead!
	const team2 = players.slice();
	console.log(team2);
	// one way

	// or create a new array and concat the old one in
	const team3 = [].concat(players);
	console.log(team3);

	// or use the new ES6 Spread
	const team4 = [...players];
	console.log(team4);

	// or use Array.form
	const team5 = Array.from(players);
	console.log(team5);
	// now when we update it, the original one isn't changed

	// The same thing goes for objects, let's say we have a person object
	const person = {
		name: "Wes",
		age: 80
	};
	// with Objects
	// and think we make a copy:
	const captain = person;
	captain.number = 55;
	console.log(person.number);
	// how do we take a copy instead?
	const captain2 = Object.assign({}, person, {number: 99});
	console.log(captain2);
	console.log(person);
	// We will hopefully soon see the object ...spread
	const captain3 = {...person};
	console.log(captain3);
	// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
	const wes = {
		name: "Wes",
		age: 100,
		social: {
			twitter: "@wesbos",
			facebook: "wesbos.developer"
		}
	};
	console.log(wes);
	const dev = Object.assign({}, wes); // Depth 1 level
	console.log(dev);
	const dev2 = JSON.parse(JSON.stringify(wes)); // Full copy
	console.log(dev2);
