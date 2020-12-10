var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score=0;


var username =readlineSync.question(chalk.cyan.bold("What's your name? "));

console.log(chalk.yellow.underline(" Welcome " + username + " Enter a Number below to know if it is a prime number."));

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(chalk.green.bold(`${number} is a prime number`));
    } else {
        console.log(chalk.red.italic(`${number} is a not prime number`));
    }
}

// check if number is less than 1
else {
    console.log(chalk.red.bold("The number is not a prime number."));
}