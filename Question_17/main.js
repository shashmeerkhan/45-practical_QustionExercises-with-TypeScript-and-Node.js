// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list,print a message to that person letting them know
//  you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
//  actually have an empty list at the end of your program.
let guestlist = [
    "Ifftikhar",
    "Qasim Bapo",
    "Abdul Qadir",
    "Manzoor",
    "Ahmed Basit",
];
guestlist.forEach(p => {
    console.log(`Dear ${p}, \n \t Unfortunatly new table haven't arrive at this time 
        so I can invite only two person for dinner`);
});
while (guestlist.length > 2) {
    let Remove = guestlist.pop();
    if (Remove) {
        console.log(`Sorry ${Remove} you can't invite more than two person for dinner`);
    }
}
guestlist.forEach(r => {
    console.log(`Dear Friend ${r}, You are invited to dinner`);
});
export {};
