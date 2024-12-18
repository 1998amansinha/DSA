const arr = [1, 2, 3, "aman"];

// console.log(arr.push(5)); // Appends new elements to the end of an array, and returns the new length of the array.
// console.log("1", arr.length);
// console.log("1", arr);
// console.log(arr.unshift(0)); // Inserts new elements at the start of an array, and returns the new length of the array.
// console.log("2", arr.length);
// console.log("2", arr);
// console.log(arr.pop()); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log("3", arr.length);
// console.log("3", arr);
// console.log(arr.shift()); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
// console.log("4", arr.length);
// console.log("4", arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @param items — Elements to insert into the array in place of the deleted elements.
// @returns — An array containing the elements that were deleted.

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 2, "Lemon", "Kiwi");
console.log(fruit);

const fruit2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citru = fruit2.slice(1);
const citrus = fruit2.slice(0, 3);
// console.log(citru);
console.log(citrus);
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// @param start :- The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
//@param end :-The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
