//    Variables


/* 
1. var
2. let 
3. const
*/

// var
/*
var a = 10;
var b = 20;
var c = a+b;
console.log(c);
var a = 100;
var c = a+b;
console.log(c);

var name = "apple";
console.log(name);
{
    var name = "Mango";
}

console.log(name);

*/

// let 

/*
let a = 10;
let b = 20;
let c = a+b;
console.log(c);

let name = "Elephant";

{
    let name = "Eagle";
    console.log(name);
}
console.log(name);

*/


// const a =10;
// const b = 20;
// const c = a+b;
// console.log(c);

// const name = "lion"

// {
//     const name  ="tiger"
// }

// console.log(name);
// const a =10;

// {
//     const a=20;
// }
// console.log(a);

// ========================================= ======================================= ===============================
//  try,catch ,finally


// try{
// num = prompt("please enter the number");
// if(isNaN(num))
// {
//     throw "please enter the Numbers"
// }
// if(num==='')
// {
//     throw "please enter a number"
// }

// console.log(num-2);
// }
// catch(error){
//     console.log(error)
// }
// finally
// {
//     console.log("file.close()")

// }

// try{
//     num = prompt("please enter the number");

//     console.log(num-2);
//     console.log(num/2);
//     myfunction();
//     }
//     catch(error){
//         console.log(error.message)


//     }
//     finally
//     {
//         console.log("file.close()")

//     }

// function myfuntion(a,b){
// try
// {


//     if((a==undefined)||(b==undefined))
//     {
//         throw new Error("Please enter the a ,b values");
//     }
//     console.log(a+b)
// }
// catch(error)
// {
//     console.log(error.message)
// }
// }
// myfuntion(1,2);
// ========================================= ======================================= ===============================

// Switch case


// switch (new Date().getDay()-1) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
// }

// num =prompt("enter the number")

// switch(true)
// {
//     case ((num<=100)&&(num>0)):
//         console.log("Success!");
//         break;
//     default:
//         console.log("Fail")        
// }

// console.log("Try another way");


// ========================================= ======================================= ===============================
//    for in, for of



// for array

/*
let arr = [1,2,3,4,5];

for(i in arr)
{
    console.log(i+":"+arr[i]);
}


let arr1 = [6,7,8,9,10];
for(i of arr1)
{
    console.log(i);
}

// for objects

let names = {
    name:"kavippiriyan",
    age:22
}

for(name in names)
{
    console.log(name+":"+names[name]);
}
*/

// ========================================= ======================================= ===============================

//  while

// a = 10;
// while (true) {
//     console.log(a);
//     a++;
//     if (a == 15) {

//         break;
//     }
// }

// ========================================= ======================================= ===============================

// do while


// a=10;

// do{
//     console.log(a);

//     a++;
// }
// while(a<=20);

// ========================================= ======================================= ===============================

//         functions


// function add(a,b)
// {
//     let x =a+b;
//     return x;
// }

// console.log( add(1,2));


// let fun = function(x,y)
// {
//     console.log(x+":"+y)
// }


// fun("fruit","apple");


//   Arbitary arguments

// let fun = function()
// {
//     total = 0;

//     for(i=0;i<arguments.length;i++)
//     {
//         total+=arguments[i];
//     }
//     return total;
// }

// console.log(fun(10,20,30,40,50));


// let arg = function(...args)
// {   i=0;
//     while(i<3)
//     {   console.log(args[i]);
//         i++;
//     }
// }
// arg(10,20,30,40);

// ========================================= ======================================= ===============================

// call function

// var name="kavippiriyan";
// let a = function()
// {
//     console.log(this.name);
//     console.log(this)

// }
// a();

// let name ={
//     fname:"kavippiriyan"
// }
// let a = function()
// {
//     console.log(this.fname)
//     console.log(this)
// }
// a.call(name);

// names = {
//     fname:"kavippiriyan"
// }
// function add(a,b)
// {
//     console.log(this.fname+" total mark is : ",a+b);
// }

// add(300,150);
// add.call(names,300,150);

// ========================================= ======================================= ===============================

// apply

// names = {
//     string:"Hi Hello"
// }

// function method(string1,string2)
// {
//     console.log(this.string+" "+string1+string2);
// }
// method.apply(names,["Welcome","Buddy"]);

// ========================================= ======================================= ===============================

//       Bind
// names = {
//     string:"Hi Hello"
// }

// function method(string1,string2)
// {
//     console.log(this.string+" "+string1+string2);
// }
// let fun = method.bind(names,"Welcome","Buddy");

// fun();



// names = {
//     string: "Hi Hello"
// }

// function method() {

//     let method1 =
//     {
//         string: "kavippiriyan",
//         fullname: function (string1, string2) {
//             console.log(this.string + " " + string1 + string2);
//         }


//     }
//     return method1;
// }

// method().fullname.call(names,"Welcome","Buddy")

// ================================================================= ==============================================

//     symbol

// let person ={
//     name:"kavippiriyan",
//     name:"kavippiriyan S",
//     name:"kavippiriyan S"
// }

// console.log(person);

// let person1 ={
//     [Symbol()]:"kavippiriyan",
//     [Symbol()]:"kavippiriyan",
//     [Symbol()]:"kavippiriyan"
// }

// console.log(person1);

// ========================================= ======================================= ===============================