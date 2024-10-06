// 1.3 Create a variable 'hacker2' with the navigator's name
let hacker2 = 'Ana';
// 1.4 Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);
// 2.1 Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// 3.2 Print all the characters of the navigator's name in reverse order
let navigatorNameReversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed.toLowerCase());
// 3.2 Print all the characters of the navigator's name in reverse order
let navigatorNameReversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);
// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}