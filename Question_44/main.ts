// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call
//  provides, and it should print a summary of the sandwich that is being ordered. Call the
//  function three times, using a different number of arguments each time.

//Define a function with a rest perameter that accept Arguments represanting our sandwiches
function make_sandwiches(...items: string[]) {
  console.log(`Making a sandwich with the following items: \n`);

  items.forEach((singleItem) => console.log(`-${singleItem}`));

  console.log(`Now enjoy Sandwiche \n`);
}

//call the function 3 times with 3 different number of  arguments

make_sandwiches("Bread", "cheese", "tomato");

make_sandwiches("Bread", "cheese", "tomato", "lettuce", "onion");

make_sandwiches("Bread", "cheese", "tomato", "lettuce", "onion", "ham", "mayo");
