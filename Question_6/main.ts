
// Stripping Names: Store a person’s name, and include some whitespace
// characters at the beginning and end of the name. Make sure you use each character
// combination, "\t" and "\n", at least once. Print the name once, so the whitespace
//  around the name is displayed. Then print the name after striping the white spaces.
//Stripping Names: Assignment #6
let Name_with_space: string = "\n\tshahmeer Khan\t\n";

console.log(Name_with_space);

let Name_without_space: string = Name_with_space;


console.log(Name_without_space.trim());
