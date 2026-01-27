//singleton object
const user = new Object
console.log(user)
const user1 = {}//non singleton object
user1.id= 123
user1.name = 'abc'
user.email = 'bhoseleak2gmail'
user1.islogin = true
console.log(user1)

//object inside object
const user3 = {
   email:'abc2gmail.com',
   username : {
      name:{
        fullname: 'akshata',
        lastname:'bhosale'
      }
    }
}
console.log(user3)
console.log(user3.username.name.fullname)