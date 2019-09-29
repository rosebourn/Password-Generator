
var capLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "?", "#", "$", "%", "^", "&", "*", "_", "+", "/"];

var howMany = prompt("How many characters would you like in the password? (Must be at least 8 characters but no longer than 128.)")
var specCharQues = confirm("Would you like the password to contain special characters?");
var numQues = confirm("Would you like the password to have numbers?");
var upperQues = confirm("Would you like the password to have uppercase letters?");

alert(howMany);
alert(specCharQues);
alert(numQues);
alert(upperQues);

var randomCap = capLet[Math.floor(Math.random()*capLet.length)];
console.log(randomCap);
var randomLow = lowLet[Math.floor(Math.random()*lowLet.length)];
console.log(randomLow);
var randomNum = num[Math.floor(Math.random()*num.length)];
console.log(randomNum);
var randomChar = specialChar[Math.floor(Math.random()*specialChar.length)];
console.log(randomChar);

//var password = randomLow.concat(randomCap, randomNum, randomChar);
//console.log(password);

//let i = howMany;
var password = "";

function passOne () {
   for (i = 0; i < howMany; i++) {
    if (password.length >= howMany) {
        break;
    }
    if (upperQues) {
     password + randomCap + randomLow;
    } 
}
}
//passOne (randomCap, randomLow)

var password = randomLow.concat(randomCap);
    console.log(password);


//if (confirm(specCharQues) && confirm(numQues) && confirm(upperQues)) {
    //for (i = 0; i >= 2 && i <= 32; i++) {
        //if ()
        //var password = randomLow.concat(randomCap, randomNum, randomChar);
        //console.log(password[i]);
    //} 
//}
