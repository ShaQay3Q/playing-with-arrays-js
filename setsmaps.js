// -----------------------------------------------------------------------------------------
//        SETS
// -----------------------------------------------------------------------------------------

// Define new Set -  can be empty or filled with an iterable, e.g: Array, Set, Node list, ...
// const ids = new Set();
const ids = new Set([1, 2, 3, 4, "Hi", 4, 3]);
// console.log(ids[1]); => undefined
console.log(ids);
// console.log(ids.delete(1));
// console.log(ids);
// console.log(ids.add(1));
// console.log(ids);
console.log(ids.has(1)); // boolean => for turnnury expressions / if-else
// console.log(ids.add(3));
// console.log(ids);

// [enrty, entry]
for (const entry of ids.entries()) {
	// console.log(entry);
}

// value
for (const value of ids.values()) {
	// console.log(value);
}

// -----------------------------------------------------------------------------------------
//        MAPS
// -----------------------------------------------------------------------------------------
const person1 = { name: "Shaghayegh" };
const person2 = { name: "Ensi" };

// use person1 as key and the rest as value
const personData = new Map([[person1, [{ date: "Yesterday", price: 10 }]]]);
// console.log(personData.get(person1)); // get the key (obj person1) to return the value ([{ date: "Yesterday", price: 10 }])

const person = { id: "pl" };
const personalData = { pl: "logged-in" };
// console.log(personalData[person.id]);

// add data to a map
personData.set(person2, [{ date: "two weeks ago", price: 29 }]);
// console.log(personData);

// Output a Set - Three ways:
for (const entry of personData.entries()) {
	// console.log(entry[0]); //! array with 2 elements => first one the key, second one the value
}

// use DESTRUCTURING to extract values
for (const [key, value] of personData.entries()) {
	// console.log(key, value);
}

// extract key
for (const key of personData.keys()) {
	// console.log(key);
}

// extract value
for (const value of personData.values()) {
	// console.log(value);
}

// console.log(personData.size);

// -----------------------------------------------------------------------------------------
//        WeakSet
// -----------------------------------------------------------------------------------------

let personn = { name: "Sha" };
console.log(personn);

let persons = new WeakSet();
// console.log(persons);
persons.add(personn);
// console.log(persons);
// console.log(persons.has(personn)); // true

persons.delete(personn);
// console.log(persons);

// for the garbage-collector
persons = null;

// -----------------------------------------------------------------------------------------
//        WeakMap
// -----------------------------------------------------------------------------------------

let personnData = new WeakMap();
personnData.set(personn, { age: 12 });
console.log(personnData);

let loggedInData = new WeakMap();
loggedInData.set(personn, "logged-in");
console.log(loggedInData);

personnData = null;
loggedInData = null;
