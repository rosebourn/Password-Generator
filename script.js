function generate() {

var capLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "?", "#", "$", "%", "^", "&", "*", "_", "+", "/"];

var howMany = prompt("How many characters would you like in the password? (Must be at least 8 characters but no longer than 128.)");
var specCharQues = confirm("Would you like the password to contain special characters?");
var numQues = confirm("Would you like the password to have numbers?");
var upperQues = confirm("Would you like the password to have uppercase letters?");

alert(howMany);
alert(specCharQues);
alert(numQues);
alert(upperQues);

var password = '';

if (upperQues) {
    lowLet = lowLet.concat(capLet);
}

if (numQues) {
    lowLet = lowLet.concat(num);
}

if (specCharQues) {
    lowLet = lowLet.concat(specialChar);
}

if (upperQues && numQues) {
    lowLet = lowLet.concat(num, capLet);
}

if (upperQues && specCharQues) {
    lowLet = lowLet.concat(capLet, specialChar);
}

if (upperQues && numQues && specCharQues) {
    lowLet = lowLet.concat(capLet, specialChar, num);
}

if (numQues && specCharQues) {
    lowLet = lowLet.concat(num, specialChar);
}

if (null) {
    lowLet;
}

for (var i = 0; i < howMany; i++) {
    password += lowLet[Math.floor(Math.random() * lowLet.length)];
}

document.getElementById("display").value = password;

}

function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}

/* var howMany = prompt("How many characters would you like in the password? (Must be at least 8 characters but no longer than 128.)")
var morePlz = (howMany < 8);
var lessPlz = (howMany > 128);
var justRight = (8 < howMany < 128);
if (morePlz) {
    alert("Must have at least 8 characters!");
}
else {
    generate();
}

if (lessPlz) {
    alert("Must be less than 128 characters!");
}
else {
    generate();
}

if (justRight) {
    generate();
} */
