
// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
// Names: Assignment #11
let names: string[] = [
  "Shahmeer Khan",
  "Ali Raza Khan",
  "Obaid Raza Khan",
  "Saqib Raza Khan",
];
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}
//For each
names.forEach((friend) => {
  console.log(friend);
});
//For loop
for (let friendname of names) {
  console.log(friendname);
}
