/*

Given a string, swap the case of each character and return it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
	// store str input into var
	// turn string into array
	let userString = str.split("");
	// loop through array
	for (let i = 0; i < userString.length; i++) {
		// for uppercase, switch to lowercase
		if (userString[i] === userString[i].toUpperCase()) {
			userString[i] = userString[i].toLowerCase();
			// for lowercase, switch to uppercase
		} else if (userString[i] === userString[i].toLowerCase()) {
			userString[i] = userString[i].toUpperCase();
		}
	}
	// turn array back into string
	userString = userString.join("");
	// return string
	return userString;
}
