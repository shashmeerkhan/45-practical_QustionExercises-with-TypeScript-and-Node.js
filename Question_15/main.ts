


// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone
//   else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your
// program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name
// of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
//Changing Guest List : Assignment #15


let guestlist: string[] = [
  "Ifftikhar",
  "Qasim Bapo",
  "Abdul Qadir",
  "Manzoor",
  "Ahmed Basit",
];

let unable_attend = guestlist.splice(2,1) [0];
console.log(`${unable_attend} can't make dinner for us.`);

//push

guestlist.push("Rija Khan");

guestlist.forEach((guest1) => {
  console.log(`${guest1} \n\ you are specially invited to dinner.`);
});
