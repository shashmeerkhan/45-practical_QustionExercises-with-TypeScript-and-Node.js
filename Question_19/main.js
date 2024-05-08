// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print
// a message indicating the number of people you are inviting to dinner.
//Guest list: Assignment #14
//define array of guest
let guestlist = [
    "Ifftikhar",
    "Qasim Bapo",
    "Abdul Qadir",
    "Manzoor",
    "Ahmed Basit",
];
guestlist.forEach((guest) => {
    console.log(`Salam, ${guest} you are cordially invited to dinner`);
});
let invitation = guestlist.map((guestt) => `Dear, ${guestt} you are cordially invited to dinner`);
console.log(invitation);
//Changing Guest List : Assignment #15
let unable_attend = guestlist.splice(2, 1)[0];
console.log(`${unable_attend} can't make dinner for us.`);
//push
guestlist.push("Rija Khan");
guestlist.forEach((guest1) => {
    console.log(`${guest1} \n\ you are specially invited to dinner.`);
});
//Assignment no 16
//add three more guest
guestlist.push("Ali", "Obaid", "Saqib");
//print guestlist with invitation massage
guestlist.forEach((g) => {
    g;
    console.log(`Respected ${g}, \n \t I have get bigger table so you are invited for dinner`);
});
//add one more guest at the beginning
guestlist.unshift("Ahmed");
//add one more guest at the middle
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Wali bhai");
//add one more guest at the end
guestlist.push("waseem");
console.log(guestlist);
//print a new invitation
guestlist.forEach((w) => {
    console.log(`Dear ${w}, \n \t I have get bigger table so you are invited for dinner`);
});
//Assignment no 17
guestlist.forEach((p) => {
    console.log(`Dear ${p}, \n \t Unfortunatly new table haven't arrive at this time 
          so I can invite only two person for dinner`);
});
while (guestlist.length > 2) {
    let Remove = guestlist.pop();
    if (Remove) {
        console.log(`Sorry ${Remove} you can't invite more than two person for dinner`);
    }
}
guestlist.forEach((r) => {
    console.log(`Dear Friend ${r}, You are invited to dinner`);
});
while (guestlist.length = 0) {
    let empty = guestlist.pop();
    if (empty) {
        console.log(`Empty list${empty} `);
    }
}
export {};
