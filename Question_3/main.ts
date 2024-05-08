
// Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.
//Name Cases: Assignment #2
let name: string = "Shahmeer Khan Attari";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
let message: string =
  "nowadays i am trying to learn typescript from governor sindh kamran tessori";
// title case
//step 01
let word: string[] = message.split(" ");
// step 02
let title_case: string = "";
// step 03
for (let index = 0; index < word.length; index++) {
  title_case +=
    word[index].charAt(0).toUpperCase() +
    word[index].slice(1).toLowerCase() +
    " ";
}
console.log(title_case);

