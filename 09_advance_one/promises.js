// const promise1=new Promise(function(resolve,reject){
//  //Do an async task
//  //Db calls
//  //cryptograpghy
//  setTimeout(function() {
//     console.log('Aync task is complete')
//     resolve()
//  }, 1000);
// })

// promise1.then(function(){
//     console.log('promise consumed')
// })

// new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         console.log('ASync task 2 is complete')
//         resolve();
//     }, 1000);

   

// }).then(function(){
//     console.log('Async2 is resolved')
// })

// const promise3=new Promise(function(resolve,reject){
//      setTimeout(() => {
//         resolve({username:"chai",email:"chai@example.com"});
//      }, 1000);
// })



// promise3.then(function(user){
// console.log(user)
// })


// const promise4=new Promise(function(resolve,reject){
//    setTimeout(() => {
//     let error=false                                // if error is true then else condition running
//     if(!error){
//         resolve({username:"Amrit",password:"saini@2212"})
//     }
//     else{
//         reject('ERROR: Something went wrong')
//     }
//    }, 1000);
// })
//    promise4
//    .then((user)=>{
//    console.log(user)
//    return user.username
//    })
//    .then((username)=>{
//      console.log(username)
// })
// .catch((error)=>{
//   console.log(error)
// })
// .finally(()=>{console.log("promise is finally reolved or rejected")})


  const promise5=new Promise(function(resolve,reject){
    setTimeout(() => {
           let error=false                               // if error is true then else condition running
           if(!error){
               resolve({username:"Amrit",password:"saini@2212"})
                }
           else{
              reject('ERROR: Something went wrong')
           }
 }, 1000)
});

async function consumePromise5(){
  // const response=await promise5
  // console.log(response)
  try {
    const response=await promise5
   console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromise5()

async function getAllUsers(){
try{jsonplaceholder
  const response=await fetch('https://api.github.com/users/hiteshchoudhary')
  const data= await response.json();
    console.log(data)
}
 catch(error){
  console.log("E:",error )
 }

}

 getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
  return response.json()
})
.then((response)=>{
    return response.json
})
.catch((error)=>{
console.log(error)
}) 