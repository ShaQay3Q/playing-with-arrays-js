const numbers = [2, 1, 4, 5, 3, 8, 9, 10, 7, 6];

// filter
const greaterThan5 = numbers.filter((n) => n >= 5);
console.log(greaterThan5);

// map
const objNumbers = numbers.map((num, i) => {
	const objNumber = { index: i, number: num };
	return objNumber;
});
console.log(objNumbers);

// reduce
// let prevValue = 1;
// let sum = numbers.reduce((prevValue, curValue) => {
//! OR
let sum = numbers.reduce(
	(currResault, currValue) => currResault * currValue,
	1 // 1 is the initialValue/startingValue
);
console.log(sum);

// findMaxAndMin
function findMaxAndMin(...numbers) {
	sortedNumbers = numbers.sort((a, b) => a - b);
	return [sortedNumbers[0], sortedNumbers[sortedNumbers.length - 1]];
}

console.log(findMaxAndMin(...numbers));

// findMax (again)
function findMax(...numbers) {
	let curMax = numbers[0];
	numbers.forEach((num) => (num > curMax ? (curMax = num) : curMax));
	return curMax;
}

// findMin
function findMin(...numbers) {
	let curMin = numbers[0];
	numbers.forEach((num) => (num < curMin ? (curMin = num) : curMin));
	return curMin;
}

// find MAX and min
function findMaxMin(...numbers) {
	return [findMin(...numbers), findMax(...numbers)];
}

// Destructuring the result into two constants
const [min, max] = findMaxAndMin(...numbers);
// console.log("min:", min);
// console.log("max:", max);
const [newMin, newMax] = findMaxMin(...numbers);
console.log(newMin);
console.log(newMax);

// create a list where NO duplicate values can be added
const ids = new Set(numbers);
// console.log(ids);
