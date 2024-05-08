// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each array to show that you have one array of the original names and one 
//   array with the Great added to each magician’s name.
let magicianName = ["Harry Poter", "Agha Waqar Ahmed", "Tahir Shah"];
function showMagicians(magician: string[]) {
    magician.forEach((name) => {
      console.log(name);
    });
  }
  function makeGreat(magicians: string[]) {
    return magicians.map((name) => `The Great ${name}`);
  }
 
  
//   let greatMagician = makeGreat(magicianName);
//   showMagicians(greatMagician);
  
  //Making a copy of orignal array through .slice method

  let copy_of_magician_name=magicianName.slice()

  //Modify the copied array to including "The Graet" with their name
  let copy_of_make_great=makeGreat(copy_of_magician_name)

  //Orignal
  console.log(`\nOrignal Array \n`);
  
  showMagicians(magicianName)

  //Copied
  console.log(`\nCopied Array \n`);
  showMagicians(copy_of_make_great)


// the below code fragment can be found in: