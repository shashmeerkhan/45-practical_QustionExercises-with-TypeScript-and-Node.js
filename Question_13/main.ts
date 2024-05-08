
// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
//Your Own Array: Assignment #13
let My_favorite_mode_of_transportation: string[] = [
  "motor cycle",
  "Civic Car",
  "V8",
  "Helicopter",
  "private plane",
];
//for loop
for (
  let index = 0;
  index < My_favorite_mode_of_transportation.length;
  index++
) {
  console.log(
    `I would like to own a ${My_favorite_mode_of_transportation[index]}`
  );
}
//for each
My_favorite_mode_of_transportation.forEach((vehicles) => {
  console.log(`I want to buy a ${vehicles}`);
});

