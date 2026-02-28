console.log("start");
function add(a,b)
{
    return a + b;
}
let result = add(2,3);
console.log(result);
console.log("End");

setTimeout(() =>
{
    console.log("inside timeout");
},2000);
console.log("End"); 

// settimeout is asyncronous it waits two second 
//meanwhile js print after 2 sec its prints inside the timeout

//guess the o/p game
//blocking and blocking 2 exp
// reai time use
// real time fetch for api 