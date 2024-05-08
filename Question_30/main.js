// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in to a website.
//   Loop through the array, and print a greeting to each user:
let userNames = ["Admin", "Ali", "Asad", "Ahad", "Ahmed"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
userNames.forEach((greeting) => {
    if (greeting === "Admin") {
        console.log(`Hello ${greeting}, would you like to see a status report?`);
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else {
        console.log(`Hello ${greeting},thank you for logging in again`);
    }
});
export {};
