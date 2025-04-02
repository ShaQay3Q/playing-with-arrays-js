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
let prevValue = 1;
let sum = numbers.reduce((prevValue, curValue) => {
	return prevValue * curValue;
});
console.log(sum);

// findMax
function findMaxAndMin(...numbers) {
	sortedNumbers = numbers.sort((a, b) => a - b);
	return [sortedNumbers[0], sortedNumbers[sortedNumbers.length - 1]];
}

console.log(findMaxAndMin(...numbers));
