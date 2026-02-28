//promises:
//a promises is an object that reprssent future result perform asyncronous feature result 
//promises means i promise to give result later 
//Example : zomoto app 
//pomises has three state oone is 1.pending means waiting 2.resolve or sucess and 3.rejected
//pending
  // |
//resolve
   //|
//reject

let mypromices = new Promise((resolve,reject) =>{
    let sucess = false;
    if(sucess){
        resolve("Data feth sucessfully");
    }
    else{
        reject("while fetching data");
    }
});
mypromices.then((result)=>{
  console.log(result);
}).catch((error)=>{
    console.log("error");

})
//Activity
//why promises better than callback
let promisesp1 = new Promise((resolve, reject)=>{
 setTimeout(()=>{
    console.log("Async Task Completed");
    resolve()
},3000);

})

promisesp1.then(()=>{
    console.log("Promise Consume")
})

let promisesp3 = new Promise((resolve, reject)=>{
 setTimeout(()=>{
    resolve(user=({username:'js',
        id:35}))

    },2000);
});

promisesp3.then(()=>{
    console.log(user);

})
//create 4 rpeomises example 
//take one var if true reslove objrct show in else part error
//async keyword uss in promises
//and two more promises example  