
let names: string[] = [
  "Shahmeer Khan",
  "Ali Raza Khan",
  "Obaid Raza Khan",
  "Saqib Raza Khan",
];

// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be
// personalized with the person’s name.
//Greetings:Assignment #12
for (let index = 0; index < names.length; index++) {
  console.log(`Hello, ${names[index]}! how are your feelings today?`);
}

//For each
names.forEach((friend) => {
  console.log(`hi, ${friend}! whats going on?`);
});
//For loop
for (let friendname of names) {
  console.log(`Dear.${friendname}`);
}