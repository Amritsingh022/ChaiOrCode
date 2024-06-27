//primitive datatypes


// 7 types:-String,number,boolean,null,undefined,symbol,BigInt
/*   
const score=100
const scoreValue=10.34
const isLoggedIn=false
const outsidetemp=null
let UserEmail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);


const bigNumber=64558653486453n



//  Reference(Non Primitive)



//Functions,Array,Objects
//Arrays:- 
const heros=["shaktiman","naagraj","doga"]

//objects
   let myObj = {
    name:"hitesh",
    age: 22,
   }

   //Function

const myFunction=function(){
    console.log("Hello World")
}
*/
//console.log(typeof outsidetemp)  // to predict the data type



//*********************************************************

//Stack (Primitive), Heap(Non-Primitive)
/*
let myYouTubeName=("Amrit Singh")
let anotherName=myYouTubeName;
//console.log(anotherName)
anotherName="chai or code";
console.log(myYouTubeName)
console.log(anotherName)
*/


let userOne={
    email: "user@gmail.com",
    upi: "user@ybl"
}
 
let userTwo=userOne;
userTwo.email="Amrit@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)