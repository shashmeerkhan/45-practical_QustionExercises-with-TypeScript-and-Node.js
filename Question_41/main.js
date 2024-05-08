// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
function showMagicians(magician) {
    magician.forEach(name => {
        console.log(name);
    });
}
let magicianName = ["Harry Poter", "Agha Waqar Ahmed", "Tahir Shah"];
showMagicians(magicianName);
export {};
