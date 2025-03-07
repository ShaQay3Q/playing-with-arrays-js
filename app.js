const numbers = [1, 2, 3];
// console.log(numbers);

let newNumbers = new Array();
// console.log(newNumbers);

newNumbers = new Array(1, 2);
// console.log(newNumbers);

newNumbers = Array(5);
// console.log(newNumbers);

let newArray = new Array("Hi");
// console.log(newArray);

newArray = Array.of();
// console.log(newArray);

newArray = Array.of("Hi");
// console.log(newArray);

newArray = Array.of(5);
// console.log(newArray);

newArray = Array.of(5, 1);
// console.log(newArray);

newArray = Array.from("Hello");
// console.log(newArray);

const listItems = document.querySelectorAll("li");
// newArray = Array.from(1, 2);
// console.log(listItems);
// console.log(typeof listItems);

const listArr = Array.from(listItems);
// console.log(listArr);
// console.log(typeof listArr);

// uniform
const hobbies = ["Cooking", "Creep the shit out of people!"];

// mixed
const personalData = [30, "Hulu", { moreDetails: [] }];

// multi-dimentional => workes even with mixed data: string inside this array
const analisticData = [
	[1, 2, 5],
	[-1, 6, 3],
	[4, -2, 4],
];

for (const data of analisticData) {
	for (const dataPoint of data) {
		// console.log(dataPoint);
	}
}

const arr = [];
// console.log(arr);
// ------------------------------
//          ADD ELEMENTS
// ------------------------------

// to the end of an array
arr.push("pushed (to the end)");
// console.log(arr);

// to the beginning of an array
arr.unshift("unshift (add to the beginning)");
// console.log(arr);

hobbies.unshift("Coding", "Eating");
// console.log(hobbies);

// ------------------------------
//         REMOVE ELEMENTS
// ------------------------------

// from the end of an array
let el = hobbies.pop();
// console.log(hobbies);

hobbies.unshift(el);
// console.log(hobbies);

// from the beginning of an array
el = hobbies.shift();
// console.log(hobbies);

hobbies.push(el);
// console.log(hobbies);

hobbies[7] = "Drinking Tea";
// console.log(hobbies, hobbies[6]); // arr + undefined

// ------------------------------------------------------------------------
//         SPLICE() METHOD => INSERT ELEMENTS BETWEEN 2 ELEMENTS
// ------------------------------------------------------------------------

console.log("SPLICE");

el = hobbies.splice(1, 2);

// console.log(hobbies);
// console.log(el);

hobbies.splice(5, 0, ...el);
// console.log(hobbies);

hobbies.splice(2, 2, "Poop", "Pee");
// console.log(hobbies);

el = hobbies.splice(0); // emtpy the whole arr
// console.log(hobbies);

hobbies.splice(0, 0, ...el);
// console.log(hobbies);

// el = hobbies.splice(-1, 1); //acts like pop()
el = hobbies.splice(-4, 1);
// console.log(hobbies);

// -----------------------------------------------------------------------------------
//         SLICE() => brings back a completely new array => used for copying arrays
// -----------------------------------------------------------------------------------
console.log("SLICE");

let testResults = [1, 1.5, 5.3, 10.99, -5, 10];
let slicedArr = testResults.slice(3);
let storedResults = testResults; // pointer to an array is being store into another variable
// => //! arrays are refrence values
// console.log("testResults:" + testResults);
// console.log("storedResults:" + storedResults);
// console.log("Push -3.4 into testResualt");
testResults.push(-3.4);
// console.log("testResults:" + testResults);
// console.log("storedResults:" + storedResults);

// console.log(
// "create a slicedArr of testResalt, then push -0.7 into testResult."
// );
slicedArr = testResults.slice();
testResults.push(-0.7);
// console.log("testResults:" + testResults);
// console.log("storedResults:" + storedResults);
// console.log("slicedArr:" + slicedArr);

// console.log(slicedArr);

// console.log(slicedArr.slice(-3, -1)); // elements in indeces -3 and -2 of slicedArr - index element of -1 is out of this range

// console.log(slicedArr.slice(3)); // everything from index 3 all the way to the end
// console.log(slicedArr.slice(-3)); // from index -3 all the way to the end of the array

// ------------------------------------------------------------------------------------------------------
//         CONCAT() METHOD => adding arrays to arrays -> adds a new element to an array => //! NEW ARRAY
// ------------------------------------------------------------------------------------------------------

console.log("CONCAT()");
let concatArr = testResults.concat(2.8);
// console.log(concatArr);

// concatArr = testResults.concat(-3.1, 8.4);
// console.log(concatArr);

newArray = [-3.1, 8.4];
concatArr = testResults.concat(...newArray);
// console.log(concatArr);

// -----------------------------------------------------------------------------------
//         indexOf() & lastIndexOf() METHODS
// -----------------------------------------------------------------------------------

console.log("indexOf() & lastIndexOf()");
console.log(hobbies);

le = hobbies.indexOf("Eating", 4); // -1 indecates that the variable is not in the searched range
// console.log(le);

le = hobbies.lastIndexOf("Eating", -4);
// console.log(le);

//! stops after tyhe first very item has been found in the array!
//! works well for primitive values, but not for refrence values (pointers)

// -----------------------------------------------------------------------------------
//         find() & findIndex() METHODS
//	find() => gets anther fucntion as argument with 3 agumets (item, index, items) and
//				return an object or one of items item when the set condition meets
// -----------------------------------------------------------------------------------

console.log("find() & findIndex()");

let personData = [
	{ name: "Coco", age: 26 },
	{ name: "Lotte", age: 28 },
	{ name: "Laura", age: 35 },
	{ name: "Sam", age: 31 },
];

let person = personData.find((person, index, persons) => {
	return index === 2;
});
// console.log(person);

person.name = "Paulo";

// console.log(person, personData);

let index = personData.findIndex((item, index, items) => item.age === 35);
// console.log(index);

// -----------------------------------------------------------------------------------
//        INCLUDES() METHODS => works of PRIMITIVE VALUES -> find an element
// -----------------------------------------------------------------------------------

le = hobbies.includes("Poop", -5); // returns falsy/tuthy
// console.log(le);
// console.log(hobbies.indexOf("Poop") !== -1); // same as the line 218 // return falsy/truthy

// -----------------------------------------------------------------------------------
//        forEach() METHODS => works of PRIMITIVE VALUES -> find an element
// -----------------------------------------------------------------------------------
const prices = [10.99, 9.49, 7.49, 8.99];
console.log(prices);
const tax = 0.19;
const adjustedPrices = [];

prices.forEach((price, index, prices) =>
	adjustedPrices.push(price * (1 + tax))
);

console.log(adjustedPrices);
