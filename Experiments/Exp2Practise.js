let numbers = [12,3,66,66];
function fun1(){
console.log('Hello World');
}
fun1();
console.log(numbers);

let num = 2345;
let reverse = 0;
while(num >0)
{
    let digit = num % 10;
    reverse =  reverse * 10 + digit;
    num = Math.floor(num/10); 
} 
console.log("reversed number: ",reverse);

let arr = [12,39,9,89,87];
let largest = arr[0];
for(let i = 1 ; i < arr.length; i++)
{
    if(arr[i]> largest)
    {
        largest = arr[i];
    }
}
console.log("Largest: ",largest);

let str  = 'hello';
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);

let s = "madam";
revStr = "";
for(let i = s.length -1 ; i>=0; i--){
    revStr +=s[i];
}
if(s == revStr){
    console.log("String is palindrome");
}
else{
      console.log("String is not palindrome");
}
