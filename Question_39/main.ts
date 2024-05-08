// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
function cityCountry(city:string,country:string):string{
    return `${city}, ${country}`;
}
// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

let a=cityCountry("Karachi","Pakistan")
let b=cityCountry("Tokyo","Japan")
let c=cityCountry("Berlin","Germany")
console.log(a);
console.log(b);
console.log(c);