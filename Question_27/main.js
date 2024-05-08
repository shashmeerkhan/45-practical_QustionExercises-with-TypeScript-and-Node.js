// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//version 1
let alienColor1 = "green";
console.log(`version 1 result\n`);
// • If the alien is green, print a message that the player earned 5 points.
if (alienColor1 === "green") {
    console.log(`you select green colour and just earned 5 points`);
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor1 === "yellow") {
    console.log(`you select yellow colour and  earned 10 points`);
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alienColor1 === "red") {
    console.log(`you select red colour and earned 15 points`);
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//version 2
console.log(`version 2 result\n`);
let alienColor2 = "yellow";
// • If the alien is green, print a message that the player earned 5 points.
if (alienColor1 === "green") {
    console.log(`you select green colour and just earned 5 points`);
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor1 === "yellow") {
    console.log(`you select yellow colour and  earned 10 points`);
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alienColor1 === "red") {
    console.log(`you select red colour and earned 15 points`);
}
//version 3
console.log(`version 3 result\n`);
let alienColor3 = "red";
if (alienColor1 === "green") {
    console.log(`you select green colour and just earned 5 points`);
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor1 === "yellow") {
    console.log(`you select yellow colour and  earned 10 points`);
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alienColor1 === "red") {
    console.log(`you select red colour and earned 15 points`);
}
export {};
