// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.
function makeShirt(size = "large", text = "I love TypeScript") {
    console.log(`You selected the ${size} Size \n Print with this message \n ${text}`);
}
//functoin call by defult 
makeShirt();
//function call with medium size and defult message
makeShirt("Medium");
//function call with small size and different message
makeShirt("Small", "I love my lovely Daughter");
export {};
