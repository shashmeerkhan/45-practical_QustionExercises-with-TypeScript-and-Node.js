//Assignment no 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ["Karachi", "Madinah", "Dubai", "Japan", "Baghdad"];
// • Print your array in its original order.
console.log(`Print in orignal order= \n\t ${locations}\n`);
// • Print your array in alphabetical order without modifying the actual list.locations.sort();
locations.sort();
console.log(`Print in alphabetical order=  \n \t${locations}\n`);
// • Show that your array is still in its original order by printing it.
console.log(`Print in orignal order= \n\t${locations}\n`);
// • Print your array in reverse alphabetical order without changing the order of the original list.
locations.reverse();
console.log(`Print in reverse alphabetical order=  \n \t${locations}\n`);
// • Show that your array is still in its original order by printing it again.
console.log(`Print in orignal order= \n \t${locations}\n`);
// • Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log(` reverse alphabetical order changed =  \n \t${locations}\n`);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Back to orignal order= \n \t${locations}\n`);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log(` alphabetical order chnaged =  \n \t${locations}\n`);
// • Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
locations.reverse();
console.log(` reverse alphabetical order changed =  \n \t${locations}\n`);
export {};
