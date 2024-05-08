// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False result
//   for each of the following:

import { log } from "console";
//Define variable
let fruit: string = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "grapes"];
// • Tests for equality and inequality with strings

console.log(`\n is fruit is equal to mango?`);
console.log(fruit == "mango");

console.log(`\n is fruit is not equal to mango?`);
console.log(fruit != "mango");

// • Tests using the lower case function
console.log(`\nis ${uppercaseMango} is equal to mango?`);
console.log(uppercaseMango.toLocaleLowerCase() == "mango");

console.log(`\nis ${uppercaseMango} is not equal to mango?`);
console.log(uppercaseMango.toLocaleLowerCase() != "mango");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//  and less than or equal to

console.log(`\n is ten is equal to twenty?`);
console.log(ten == twenty);

console.log(`\n is ten is not equal to twenty?`);
console.log(ten != twenty);

console.log(`\n is ten greater than twenty?`);

console.log(ten > twenty);

console.log(`\n is ten greater than or equal to twenty?`);

console.log(ten >= twenty);

console.log(`\n is ten less than twenty?`);

console.log(ten < twenty);

console.log(`\n is ten less than or equal to twenty?`);

console.log(ten <= twenty);

// • Tests using "and" and "or" operators

console.log(`\n is twenty  less than 25 && twenty is greater than 10`);

console.log(twenty < 25 && twenty > 10);

console.log(`\n is twenty  greater than 25 && twenty is less than 10`);

console.log(twenty > 25 && twenty > 10);

console.log(`\n is twenty  is equal to 20 or twenty is greater than 10`);

console.log(twenty == 20 || twenty != 10);

console.log(`\n is twenty is not equal to 25 or twenty is less than 10`);

console.log(twenty == 25 || twenty < 10);

// • Test whether an item is in a array

console.log(`\n is "banana" in fruits?`);

console.log(fruits.includes("banana"));

// • Test whether an item is not in a array

console.log(`\n is "banana" in fruits?`);

console.log(fruits.includes("banana"));

// • Test whether an item is not in a array

console.log(`\n is "banana" in fruits?`);

console.log(!fruits.includes("banana"));
