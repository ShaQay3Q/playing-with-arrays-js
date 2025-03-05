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
console.log(hobbies);

// -----------------------------------------------------------------------------------
//         SLICE() => brings back a completely new array => used for copying arrays
// -----------------------------------------------------------------------------------
console.log("SLICE");

let testResults = [1, 1.5, 5.3, 10.99, -5, 10];
let slicedArr = testResults.slice(3);
let storedResults = testResults; // pointer to an array is being store into another variable
// => //! arrays are refrence values
console.log("testResults:" + testResults);
console.log("storedResults:" + storedResults);
console.log("Push -3.4 into testResualt");
testResults.push(-3.4);
console.log("testResults:" + testResults);
console.log("storedResults:" + storedResults);

console.log(
	"create a slicedArr of testResalt, then push -0.7 into testResult."
);
slicedArr = testResults.slice();
testResults.push(-0.7);
console.log("testResults:" + testResults);
console.log("storedResults:" + storedResults);
console.log("slicedArr:" + slicedArr);

// console.log(slicedA.rr.push);

console.log(slicedArr);
