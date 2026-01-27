let myObj = {
    name : "Akshata",
    age :20,
    location:"Ichalkaranji",
    email:'bhosalekashata726@gmail.com',
    islogin: false,
    loginDay: ['Monday','Tuesday','Wednseday'],
    fullName:'Akshata Bhosale',
    //[mySymbol] :"myKeyOne"

}
console.log(myObj.age)
console.log(myObj.email)
console.log(myObj.fullName)
console.log(myObj.islogin)
myObj.email = "bhosaleakshata@gmail,com"
console.log(myObj.email)
//Object.freeze(myObj)

//console.log(myObj.[mySymbol])
//console.log(typeof myObj.[mySymbol])

//There are two types of object 1)literals 2) constructor 3)singleton
//when you create constructor it creates singlten object it means itself object 
//when we crete object literal then sigltone object can not be created when object are are consrtuctor at time object can be created 
//object means key value pair 
const mySymbol = Symbol('key')
const myObj2={
    [mySymbol]:'AB'
}
console.log(myObj2 )
console.log(typeof myObj2 )

myObj.greeting = function(){
    console.log('hello js user')
}
console.log(myObj.greeting())


