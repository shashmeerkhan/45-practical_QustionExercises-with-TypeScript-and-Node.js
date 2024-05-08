
// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d
// like to invite to dinner. Then use your list to print a message to each person,
// inviting them to dinner.
//Guest list: Assignment #14
//define array of guest
let guestlist: string[] = [
  "Ifftikhar",
  "Qasim Bapo",
  "Abdul Qadir",
  "Manzoor",
  "Ahmed Basit",
];
guestlist.forEach((guest) => {
  console.log(`Salam, ${guest} you are cordially invited to dinner`);
});

let invitation: string[] = guestlist.map(
  (guestt) => `Dear, ${guestt} you are cordially invited to dinner`
);
console.log(invitation);


