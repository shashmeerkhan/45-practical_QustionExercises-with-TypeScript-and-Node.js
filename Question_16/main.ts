// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() 
// to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Assignment no 16 
//exercise 15 guestlist
let guestlist: string[] = [
    "Ifftikhar",
    "Qasim Bapo",
    "Abdul Qadir",
    "Manzoor",
    "Ahmed Basit",
  ];
 //add three more guest 
  guestlist.push(
    "Ali",
    "Obaid",
    "Saqib"
  )
//print guestlist with invitation massage
  guestlist.forEach(g => {g
    console.log(`Respected ${g}, \n \t I have get bigger table so you are invited for dinner`)
  })
  //add one more guest at the beginning
  guestlist.unshift("Ahmed")
  
  //add one more guest at the middle
  guestlist.splice(Math.floor(guestlist.length /2) ,0 , "Wali bhai")

  //add one more guest at the end
  guestlist.push("waseem")
  console.log(guestlist);
  
  //print a new invitation
  guestlist.forEach( w=> {
    console.log(`Dear ${w}, \n \t I have get bigger table so you are invited for dinner`)
    
  });