//fetch is an a js method use to make http request in this it returns promises
//fetch('URL') syntax
//it return promoses
fetch("https://jsonplaceholder.typicode.com/users/3").
then((Response)=>{
    return Response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
//understand the code line by line
//async await example with fetch method
//fetch user displyaing names html list
//fetch post show first 5 record
//create a fake promise manually reslove after 3sec reject after 3 sec
//what is promise in js and promise states in js
//differance callback promises
//fetch in js
//what does fetch retirn
//why do we response .json
//diffence between then and catch and async and await
//promise chaining 

