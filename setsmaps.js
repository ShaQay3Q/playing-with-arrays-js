// -----------------------------------------------------------------------------------------
//        SET
// -----------------------------------------------------------------------------------------

// Define new Set -  can be empty or filled with an iterable, e.g: Array, Set, Node list, ...
// const ids = new Set();
const ids = new Set([1, 2, 3, 4, "Hi", 4, 3]);
// console.log(ids[1]); => undefined
console.log(ids);
console.log(ids.delete(1));
console.log(ids);
console.log(ids.add(1));
console.log(ids);
console.log(ids.has(1)); // boolean => for turnnury expressions / if-else
console.log(ids.add(3));
console.log(ids);

// [enrty, entry]
for (const entry of ids.entries()) {
	console.log(entry);
}

// value
for (const value of ids.values()) {
	console.log(value);
}
