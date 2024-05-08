// Think of something you could store in a array. For example, you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.
// Assignment no 20
let mountain = [
    "K2",
    "Mount Evrest",
    "Mount Uhad",
    "Himaliya",
    "Qaraqaram",
];
let river = [
    "Indus",
    "river nile",
    "Yangtze River",
    "River Amazon",
    "Huang He (Yellow River)",
];
let countries = ["Pakistan", "Sudia Arab", "Dubai", "India", "Egypt"];
let cities = ["Karachi", "New york", "Mumbai", "Tokeyo", "paris"];
let language = ["English", "Urdu", "Arabic", "Hindi", "persian"];
console.log("list of mountain");
mountain.forEach((m, index) => {
    console.log(`${index + 1} .${m}`);
});
console.log(" \n ");
console.log("list of river");
river.forEach((r, index) => {
    console.log(`${index + 1} .${r}`);
});
console.log(" \n ");
console.log("list of countries");
countries.forEach((c, index) => {
    console.log(`${index + 1} .${c}`);
});
console.log(" \n ");
console.log("list of cities");
cities.forEach((c, index) => {
    console.log(`${index + 1} .${c}`);
});
console.log(" \n ");
console.log("list of language");
language.forEach((l, index) => {
    console.log(`${index + 1} .${l}`);
});
console.log(" \n ");
export {};
