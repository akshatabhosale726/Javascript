// Activity 1 : Variable Declaration 

const numA = 10;      // const value cannot be changed
let numB = 20;        // let is block scoped
var numC = 30;        // var has global scope 

document.write(numA + " ");
document.write(numB + " ");
document.write(numC + "<br><br>");


//  Activity 2 : Scope 

/*
{
    let blockLet = 20;
    var blockVar = 40;
    const blockConst = 50;
}
*/

// console.log(blockLet); // Error: block scope
console.log(blockVar);   // Accessible
// console.log(blockConst); // Error: block scope


// Activity 3 : Data Types 

// undefined
let value;
document.write(value + "<br>");
document.write("Type of value : " + typeof value + "<br><br>");

// null
let emptyValue = null;
document.write("Type of emptyValue : " + typeof emptyValue + "<br><br>");

// BigInt
let bigNumber = BigInt("123");
document.write("Type of bigNumber : " + typeof bigNumber + "<br><br>");

// Symbol
let uniqueId = Symbol("Hi");

// String
let studentName = "Akshata";
document.write(studentName + "<br>");
document.write("Type of studentName : " + typeof studentName + "<br><br>");


//  Activity 4 : Student Information 

let firstName = "Akshata";
let lastName = "Chothe";
let studentAge = 21;
let studentEmail = "bhosaleakshata726@gmail.com";
let collegeName = "DKTE";

document.write("First Name : " + firstName + "<br>");
document.write("Last Name : " + lastName + "<br>");
document.write("Age : " + studentAge + "<br>");
document.write("Email : " + studentEmail + "<br>");
document.write("College Name : " + collegeName + "<br><br>");


//  Activity 5 : Even or Odd 

let checkNum = 14;

if (checkNum % 2 === 0) {
    document.write(checkNum + " is Even<br><br>");
} else {
    document.write(checkNum + " is Odd<br><br>");
}


// Activity 6 : Pass or Fail 

let marks = 60;

if (marks >= 50) {
    document.write("Student Passed<br><br>");
} else {
    document.write("Student Failed<br><br>");
}


// Activity 7 : Print 1 to 20 

for (let i = 1; i <= 20; i++) {
    document.write(i + " ");
}
