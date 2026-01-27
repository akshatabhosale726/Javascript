//1)Array, Function, Declaration 
let numbers = [1,2,3,4,5];

function fun1(){
    console.log("Hello World");
}
fun1();
console.log(numbers)

//2️) Reverse a Number
let num = 1234;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}
console.log("Reversed number:", reverse);

//3)Check Palindrome Number
let n = 121;
let original = n;
let rev = 0;

while (n > 0) {
    let d = n % 10;
    rev = rev * 10 + d;
    n = Math.floor(n / 10);
}

if (original === rev) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome");
}

//4)Fibonacci Series
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

//5)Find Largest Element in Array
let arr = [10, 45, 2, 99, 23];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest element:", largest);

//6)Remove Duplicate Elements from Array
let arr1 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < arr1.length; i++) {
    if (!unique.includes(arr1[i])) {
        unique.push(arr1[i]);
    }
}

console.log("Array without duplicates:", unique);

//7)Find Missing Number in Array 
let arr2 = [1, 2, 4, 5];
let n2 = 5;

let sumTotal = (n2 * (n2 + 1)) / 2;
let sumArr = 0;

for (let i = 0; i < arr2.length; i++) {
    sumArr += arr2[i];
}
console.log("Missing number:", sumTotal - sumArr);

//8)Reverse a String
let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);

//9)Count Vowels in String
let text = "javascript";
let count = 0;

for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();
    if ("aeiou".includes(ch)) {
        count++;
    }
}
console.log("Vowel count:", count);

//10)Check Palindrome String
let s = "madam";
let revStr = "";

for (let i = s.length - 1; i >= 0; i--) {
    revStr += s[i];
}
if (s === revStr) {
    console.log("Palindrome string");
} else {
    console.log("Not a palindrome");
}

//11)Check Prime Number
let num1 = 7;
let isPrime = true;

if (num1 <= 1) isPrime = false;

for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Prime number" : "Not a prime number");

//12)Factorial of a Number
let factNum = 5;
let fact = 1;

for (let i = 1; i <= factNum; i++) {
    fact *= i;
}
console.log("Factorial:", fact);

//13)Function to Check Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}
checkEvenOdd(10);

//14)Sum of Array
let arr3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log("Sum of array:", sum);
