
//var capLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var lowLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//var specialChar = ["!", "?", "#", "$", "%", "^", "&", "*", "_", "+", "/"];

var howMany = prompt("How many characters would you like in the password? (Must be at least 8 characters but no longer than 128.)")
var specCharQues = confirm("Would you like the password to contain special characters?");
var numQues = confirm("Would you like the password to have numbers?");
var upperQues = confirm("Would you like the password to have uppercase letters?");
//var lowQues = confirm("Would you like the password to have lowercase letters?");

alert(howMany);
alert(specCharQues);
alert(numQues);
alert(upperQues);
//alert(lowQues);

//var randomCap = capLet[Math.floor(Math.random() * capLet.length)];
//console.log(randomCap);
//var randomLow = lowLet[Math.floor(Math.random() * lowLet.length)];
//console.log(randomLow);
//var randomNum = num[Math.floor(Math.random() * num.length)];
//console.log(randomNum);
//var randomChar = specialChar[Math.floor(Math.random() * specialChar.length)];


//var password = "";

var capLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "?", "#", "$", "%", "^", "&", "*", "_", "+", "/", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capSpec = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "?", "#", "$", "%", "^", "&", "*", "_", "+", "/"];
var capNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


if (upperQues) {
    for (var i = 0; i < howMany; i++) {
        var password = Math.floor(Math.random() * capLet.length);
        console.log(password);
    }
    
}

if (specCharQues) {
    for (var i = 0; i < howMany; i++) {
        var password = Math.floor(Math.random() * specialChar.length);
        console.log(password);
    }
}

if (numQues) {
    for (var i = 0; i < howMany; i++) {
        var password = Math.floor(Math.random() * num.length);
        console.log(password);
    }
}

if (upperQues && specCharQues) {
    for (var i = 0; i < howMany; i++) {
        var password = Math.floor(Math.random() * capSpec.length);
        console.log(password);
    }
}

if (upperQues && numQues) {
    for (var i = 0; i < howMany; i++) {
        var password = Math.floor(Math.random() * capSpec.length);
        console.log(password);
    }
}







// After figuring out a workig function, can hopefully plug in the other combos to make passwords.
// Link generate button to HTML.
// Get password to print to text box.
// Write code for copy to clipboard.


// This is just random code that I used at different times during the project but wasn't sure I wanted to get rid of.
//var password = randomLow.concat(randomCap, randomNum, randomChar);
//console.log(password); 
//var password = randomLow.concat(randomCap);

