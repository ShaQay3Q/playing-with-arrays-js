const numbers = [1, 2, 3];
console.log(numbers);

let newNumbers = new Array();
console.log(newNumbers);

newNumbers = new Array(1, 2);
console.log(newNumbers);

newNumbers = Array(5);
console.log(newNumbers);

let newArray = new Array("Hi");
console.log(newArray);

newArray = Array.of();
console.log(newArray);

newArray = Array.of("Hi");
console.log(newArray);

newArray = Array.of(5);
console.log(newArray);

newArray = Array.of(5, 1);
console.log(newArray);

newArray = Array.from("Hello");
console.log(newArray);

const listItems = document.querySelectorAll("li");
// newArray = Array.from(1, 2);
console.log(listItems);
console.log(typeof listItems);

const listArr = Array.from(listItems);
console.log(listArr);
console.log(typeof listArr);

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
		console.log(dataPoint);
	}
}
