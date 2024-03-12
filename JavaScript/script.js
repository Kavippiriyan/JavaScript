//   *** Variables  ***

import { name } from "./module";




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
// **** try,catch ,finally  ****


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

// *** Switch case  ***


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
//   *** for in, for of  ***



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

//  *** while  ***

// a = 10;
// while (true) {
//     console.log(a);
//     a++;
//     if (a == 15) {

//         break;
//     }
// }

// ========================================= ======================================= ===============================

// *** do while ***


// a=10;

// do{
//     console.log(a);

//     a++;
// }
// while(a<=20);

// ========================================= ======================================= ===============================

//       ***  functions ***


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


// ***  Arbitary arguments ***

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

// **** call function ***   we can call other functions for out current functions

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

//  **** apply   ****     it is used to insert the values in array type

// names = {
//     string:"Hi Hello"
// }

// function method(string1,string2)
// {
//     console.log(this.string+" "+string1+string2);
// }
// method.apply(names,["Welcome","Buddy"]);

// ========================================= ======================================= ===============================

//     ****  Bind  ****     we can store the methods in one variable and after we can call that variable as a function
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

//   ****  symbol  ****

// let person ={
//     name:"kavippiriyan",
//     name:"Praveen M",
//     name:"Naveen A"
// }

// console.log(person);

// let name1 =Symbol()
// let name2 = Symbol()
// let name3 = Symbol()

// let person1 ={
//     name1:"kavippiriyan",
//     name2:"Praveen M",
//     name3:"Naveen A"
// }

// console.log(person1.name1);
// console.log(person1.name2);
// console.log(person1.name3);
// // console.log(person1);


// var a =Symbol("a")
// console.log(a.description);
// console.log(a.toString());


// ========================================= ======================================= ===============================

//  ****  objects  ****


// creating object



// obj = {
//     type:"Fruit",
//     name :"apple",

// }
// console.log(obj);

// let obj1 = new Object();

// obj1.type = "Fruit",
// obj1.name = "mango"

// console.log(obj1);


// console.log(obj.name);
// console.log(obj1.name);


// let nameofthefruit = 'name'

// obj1[nameofthefruit] = "Banana"
// console.log(obj1.name);


// const users = {
//     name:"Deja",
//     town : "Hyderabad",
//     address:{

//     }
// }

// ======================================= ============================================ ==========================

// **** class and objects  ****


// class student
// {
//     constructor(name,age)
//     {
//         this.name = name,
//         this.age = age
//     }
//     student1()
//     {
//         console.log(" Welcome "+this.name);
//        // method chaining
//         return this
//     }

//     student2()
//     {
//         console.log(" Welcome "+this.name);
//     }
//     welcome()
//     {
//         console.log("you are Welcome!");
//     }
// }
// let obj = new student("Kavippiriyan",22)
// let obj1 = new student("Praveen",22)
// obj.student1()
// obj1.student2()


// class students extends student
// {
//     constructor(name,age)
//     {
//         super(name,age)
//         this.name = name
//         this.age = age
//     }
//     thankyou()
//     {
//         console.log(this.name+" Thank you for you coming");
//          // this is used for method chaining
//          return this
//     }
//     //override
//     welcome()
//     {
//         console.log("you are Welcome sir!");
//         // this is used for method chaining
//         return this
//     }
// }

// let obj3 = new students("Priya",22)
// // obj3.student1()
// // obj3.thankyou()
// // obj3.welcome();

// // method chaining
// obj3.student1().thankyou().welcome()



//  *** prototype  ***


// class A{
//     name = "kavippiriyan"

//     fun()
//     {
//         console.log( this.name)
//     }
//     name = function name() {
//         console.log(this.name);
//     }
// }

// let obj = new A()
// console.log(obj.name)


// function prototype(name)
// {
//     this.name = name

// }

// prototype.prototype.method = function()
// {
//     console.log(this.name+" Welcome");
// }

// let obj = new prototype("kavippiriyan")
// obj.method()


// get and set


// class bike
// {
//     constructor(name)
//     {
//         this._name = name
//     }
//     get bike()
//     {
//         console.log(this._name+" You got!");
//     }

//     set bike(name)
//     {
//         if(name!=="Apache")
//         {
//             name= "Apache"
//             this._name = name
//         }
//         else
//         {
//             this._name =name;
//         }
//     }
// }
// const obj = new bike("Himalayan");
// obj.bike
// obj.bike="pulser"
// obj.bike
// obj.bike="Fz"
// obj.bike

//                     ***  modules  ***

// import car, {fuel as diesel,air,name} from './module.js'


// let car1 = new car()
// car1.method()


// diesel()
// air()
// console.log(name);

// ================= =================== ============= ============= ========= ========== ======= ====================


//         ***       string methods  ***



// let str1 = "This is March month"
// let str2 = "  Iam a tester "

// **** slice(start, end) ****

// console.log( str1.slice(5,14));
// console.log(str1.slice(0,3));
// console.log(str1.slice(-5));

// *** substring(start,end), no negative values ** **
// console.log(str1.substring(5,14));
// console.log(str1.substring(1,3));


// ** ** substr(start,length) ** **

// console.log(str1.substr(5,14));
// console.log(str1.substr(5,2));
// console.log(str1.substr(-5));
// console.log(str1.substr(-5,2));


// *** replace,replaceAll ***

// console.log(str1.replace("This",'next'));
// console.log(str1.replace("is","month").length );
// console.log(str1.length);
// console.log(str2.replaceAll(" ","Hi"));
// console.log(str1.replace("March","October"));
// console.log(str1.replace("March","October").length);

// ****** upper case, lowercase  ****

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

//  ***** trim ****

// console.log(str2.length);
// console.log(str2.trim());
// console.log(str2.trim().length);
// console.log(str2.trimStart());
// console.log(str2.trimStart().length);
// console.log(str2.trimEnd());
// console.log(str2.trimStart().length);


// **** padstart *****

// console.log(str2.padEnd(18,"x"));

// console.log(str2.padStart(18,"x"));


//  ***** charAt, charcodeAt, at ****

// console.log(str2.charAt(3));
// console.log(str2.charCodeAt(3));
// console.log(str2[3]);


//********  indexof ,lastindexof ,search , includes ********


// console.log(str2.indexOf('a'));
// console.log(str2.lastIndexOf('a'));


// console.log(str2.search('tester'));
// console.log(str2.search('testerr'));
// console.log(str2.includes('tester'));
// console.log(str2.includes('testerr'));

// startswith , endswith


// console.log(str2.startsWith(' '));
// console.log(str2.startsWith('t'));

// console.log(str2.endsWith(' '));
// console.log(str2.endsWith('o'));

// **** concat, split, repeat ***


// console.log(str2.concat("hello"));

// console.log(str2.split(" "));

// console.log(str2.repeat(2));


// ========================================= =========================== =========================== ======================


// **** Array Methods  *****


// let arr = [1,2,3,4,5,6]
// let arr1 = [1,2,3,[4,5,6]]

// console.log(arr);
// console.log(arr.length);   //length


// console.log(arr.push(7));  // push
// console.log(arr);


// console.log(arr[2]);

// console.log(arr1[3][0]);   //ofmethod

// console.log(arr1.pop());   // pop
// console.log(arr1);


// console.log(arr.shift());      //shif
// console.log(arr);

// console.log(arr.unshift(1));   //unshift
// console.log(arr);


// console.log(arr.splice(0,1));  //splice
// console.log(arr);


// console.log(arr.splice(0,1,1,2));
// console.log(arr);


// console.log(arr.splice(3,1));
// console.log(arr);

// console.log(arr.splice(3,0,4));
// console.log(arr);

//        **** slice(starting index , ending index) ****
// ending index not include

// console.log(arr.slice(0,1));
// console.log(arr.slice(2,5));
// console.log(arr.slice(-1));


//  ***** join *****

// console.log(arr.join());  // it converts array values to string

// console.log(arr.reverse());  // reverse the original array
// console.log(arr.reverse());



//   ****** concat, ..spread operator *****


// console.log(arr.concat(arr1))
// joining
// console.log(...arr,...arr1);

// console.log([arr,arr1]);



//      ***  practice ***


// let Arr = [5,8,10,7,9,11];

// let splice =Arr.splice(3,3)
// console.log(splice);

// console.log(Arr);
// console.log(Arr.push(17,19,111));
// console.log(Arr);

// console.log(Arr.unshift(100));
// console.log(Arr);

// console.log(Arr.push(200,1000));
// console.log(Arr);
// console.log(Arr.length);

// console.log(Arr.length/2)

// console.log(Arr.splice(Arr.length/2,0,0));
// console.log(Arr);


// ****  copywithin, flat, tospliced  ,toreversed  *****

//  copyWithin(changeindex,thisindextocopy)
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr);


// console.log(arr.copyWithin(0,4));
// console.log(arr.copyWithin(3,2));


//    flat

// let array = [[1,2],[3,4],[5,6]];

// console.log(array.flat());

//        ***  tosplice()  ***

// let arr = [1, 2, 3, 4, 5, 6]

// let tosplice = arr.toSpliced(2,2)
// console.log(tosplice);
// console.log(arr);

// let tosplice1 = arr.toSpliced(0,0)
// console.log(tosplice1);
// console.log(arr);

// let tosplice2 = arr.toSpliced(-1,2)
// console.log(tosplice2);
// console.log(arr);

// let tosplice2 = arr.toSpliced(-1,2,3)
// console.log(tosplice2);
// console.log(arr);



// const array = ["good","evening","all"]

// console.log(array.reverse());
// console.log(array);
// console.log(array.reverse());
// console.log(array);

// console.log(array.toReversed());
// console.log(array);

// const toReversed = array.toReversed()
// console.log(toReversed);
// console.log(array);


//    sort , tosorted

// const array = ["good","evening","all"]

// console.log(array.sort());
// console.log(array);

// console.log(array.reverse());


// let tosorted = array.toSorted()
// console.log(tosorted);
//  ======================================= ========================================== ================================


//       ****Array iteration methods***


//   **** forEach  ***(value,index,array)    * No return and doesnot create new array *

// let arr = [1,2,3,4,5];

// arr.forEach((value=>
//     {
//         console.log(value);
//     }))

// arr.forEach((value,index)=>
// {
//     console.log(index+" : "+value);
// })


// const  arr = [1,2,[3,4,[5,6],[8,9]],[10,11]]

// arr.forEach((value,index)=>
//     {
//         console.log(index+":"+value);
//     })


// let array = [
//     {
//         name:"kavi",age:22
//     },
//     {
//         name:"praveen",age:22
//     }
// ]

// array.forEach((value,index)=>
// {
//     console.log(index+" : "+value.name);

// })

// let arr = [1,2,3,4,5];

// arr.forEach((value,index,array)=>
// {
//     console.log(index+" : "+value+" : "+array);
// })


// const array = [100,455,94046,4333.3243,394,48593]

// const array1 = [];
// let max = 0

// array.forEach((value)=>
// {
//     if(value>max)
//     {
//         max=value;
//     }

// })
// array1.push(max)
// console.log(array1);


//        **** Map ***          * creating new array and it can return *


// let array = [1,2,3,4,5]

// let maparray = array.map((value)=>
// {
//     return value;
// })

// console.log(maparray);

// let array1 = [
//     {
//         name:"kavi",age:22
//     },
//     {
//         name:"praveen",age:20
//     }
// ]

// let eligible = array1.map((value)=>
// ({
//     ...value,
//     check :value.age>=21?"Eligible":"Not Eligible"
// }))
// console.log(eligible)



// let eligible1 = [];
// array1.forEach(value => {
//     eligible1.push({
//         ...value,
//         check: value.age >= 21 ? "Eligible" : "Not Eligible"
//     });
// });
// console.log(eligible1);



// let values = array1.map(value=>
// {
//     return value
// })
// console.log(values);

// array1.forEach(value=>
//     {
//         console.log(value);
//     })


// let array1 = [
//     {
//         name:"kavi",age:22
//     },
//     {
//         name:"praveen",age:20
//     }
// ]

// array1.forEach((value)=>
// {
//     value.age = value.age-=1     //forEach
// })

// console.log(array1);

// array1.map((value)=>
// {
//     value.age = value.age+=1           // map
// })

// console.log(array1)


//                       ***  filter  ***


// let array1 = [
//     {
//         name:"kavi",age:22
//     },
//     {
//         name:"praveen",age:20
//     }
// ]


// const age = array1.map(value=>value.age>20)  // using map

// console.log(age);                            // output like true or false

// const age1 = array1.filter(value=>value.age>20) // using  filter

// console.log(age1);                               // output values



// const book = [
//     {
//         name:"Rich Dad Poor Dad ", author :"Robert Kiyosaki" ,year:1990
//     },
//     {
//         name:"Harry Potter" ,author:"Rowling",year:1990
//     },
//     {
//         name:"The Leader In You" ,author:"Dale Carnige",year:2000
//     }
// ]

// let collections = book.filter(value=>

//         ((value.name.startsWith("Harry"))||(value.year===1990))
//     )

//     console.log(collections);


//       *** reduce ***


//   *****  reduce(accumulator , current value , array)initialvalue ****


// let array = [1,2,3,4,5,6,7]

// let reduce = array.reduce((total,value) =>total+value)

// console.log(reduce);


//  *** Fill    (value,start,end)  it affects the real array ***

//  let a = [1,2,3,4,5,6];

// a.fill(100)

// console.log(a);

// a.fill(150,3,5)
// console.log(a);


// **** Every, some ****

// Every all condition must be satisfied , output - boolean

// const array =["apple","mango","grape"]


// console.log( array.every(value=>value.length%2!==0));

//some Atleast one conditon must be satisfied ,output - boolean

// const array =["apple","mango","grape","banana"]


// console.log( array.some(value=>value.length%2===0));



//  Primitive Wrapper Types

/*
1. String
2. Number
3. Boolean
*/

//  Number

// console.log("Max Numeric value : "+Number.MAX_VALUE);
// console.log("Min Numeric value : "+Number.MIN_VALUE);


// var num = 123456;
// var num1 = "higher"
// console.log(Number.isNaN(num));
// console.log(Number.isNaN(num1));


// var number = 445;
// var number1 = Infinity;

// console.log(Number.isFinite(number));
// console.log(Number.isFinite(number1));



// var float = "3.14"
// console.log(Number.parseFloat(float));

// var number = ("255",8);

// console.log(Number.parseInt(number));



// var fixed = 1245.354646;

// console.log(fixed.toFixed(4));
// console.log(fixed.toFixed(1));
// console.log(fixed.toFixed(0));


// var precision = 4567;
// console.log(precision.toPrecision(1));


// let exponential = 1524.3454

// console.log(exponential.toExponential(2));
// console.log(exponential.toExponential(0));


//    **** asynchronous ****


// console.log("Hi");


// setTimeout(()=>
// {
//     console.log("method1");
// },(5000))

// setTimeout(()=>
// {
//     console.log("method2");
// },(2000))

// setTimeout(()=>
// {
//     console.log("method3");
// },(7000))


// console.log("Hello");

// let method = {

//     method()
//     {
//         console.log("Im the method function");
//     }
// }
// method.method()

// setInterval(function()
// {
//     console.log("Click Here!");
// },(2000))


// promise

// let food = new Promise((resolve, reject) => {
//     let order = false;
//     if (order) {
//         resolve()
//     }
//     else {
//         reject()
//     }
// })

// food.then(() => console.log("order list\n 1. Chicken Parrota \n 2. Pepsi \n 3. Romainan Rottin \n 4. Chicken Fried Rice \n 5. pannerbutter"))
//     .catch(() => console.log("cancel list\n 1. paneer butter"));

// function food() {
//     return new Promise((resolve, reject) => {
//         let order = false;
//         if (order) {
//             resolve()
//         }
//         else {
//             reject()
//         }
//     })


// }

// food().then(() => console.log("order list\n 1. Chicken Parrota \n 2. Pepsi \n 3. Romainan Rottin \n 4. Chicken Fried Rice \n 5. pannerbutter"))
//     .catch(() => console.log("cancel list\n 1. paneer butter"));


// function instagram_request(value) {
//     return new Promise((resolve, reject) => {
//         if (value == 0) {
//             resolve()
//         }
//         else {
//             reject()
//         }


//     })
// }

// let request = prompt("You got one instagram request \n 1. press 0 to accept \n 2. press 1 to reject")
// instagram_request(request).then(() => console.log("Your request was accepted"))
//     .catch(() => console.log("Your request was cancelled"));


// const img1 = new Promise((resolve, reject) => {
//     var uploaded = true
//     if (uploaded) {
//         setTimeout(resolve, 1000, "img1 uploaded succesfully")
//     }
//     else {
//         reject("img1 Error in upload");
//     }
// })

// const img2 = new Promise((resolve, reject) => {
//     var uploaded = true
//     if (uploaded) {
//         setTimeout(resolve, 3000, "img2 uploaded succesfully")
//     }
//     else {
//         reject("img2 Error in upload");
//     }
// })

// const img3 = new Promise((resolve, reject) => {
//     var uploaded = true
//     if (uploaded) {
//         setTimeout(resolve, 5000, "img3 uploaded succesfully")
//     }
//     else {
//         reject("img3 Error in upload");
//     }
// })

// Promise.all([img1, img2, img3])      // all values have to success, with no pending
//     .then((message) => console.log(message))
//     .catch((message) => console.log(message));

// Promise.allSettled([img1, img2, img3])  //  with no pending all values has to be executed
//     .then((message) => console.log(message))
//     .catch((message) => console.log(message));

// Promise.any([img1, img2, img3])   // if any one value will success it will succeed
// .then((message) => console.log(message))
// .catch((message) => console.log(message));

// Promise.race([img1, img2, img3])   // if all values true or false that time it will return based on time otherwise one value will false it will give error value
// .then((message) => console.log(message))
// .catch((message) => console.log(message));


//  *** async , await ***  async always return promise




// async function name1() {
//     return "Hello"
// }
// console.log(name1());


// const img1 = new Promise((resolve, reject) => {
//     var uploaded = true
//     if (uploaded) {
//         setTimeout(resolve, 1000, "img1 uploaded succesfully")
//     }
//     else {
//         reject("img1 Error in upload");
//     }
// })

// const img2 = new Promise((resolve, reject) => {
//     var uploaded = true
//     if (uploaded) {
//         setTimeout(resolve, 3000, "img2 uploaded succesfully")
//     }
//     else {
//         reject("img2 Error in upload");
//     }
// })

// const img3 = new Promise((resolve, reject) => {
//     var uploaded = true
//     if (uploaded) {
//         setTimeout(resolve, 5000, "img3 uploaded succesfully")
//     }
//     else {
//         reject("img3 Error in upload");
//     }
// })

// async function img()
// {
//     try{
//     console.log("please upload your images");
//     console.log( await img1);

//     }
//     catch(error)
//     {
//         console.log(error);
//     }
//     finally
//     {
//         console.log("Thank you!");
//     }
// }

// img()


//    ******  object methods ******




// const user =
// {
//     name: "magesh",
//     age: 28,
//     city: "pune",
//     work: function () {
//         return "Iam working as a junior automation tester";
//     }
// }

// user.work()

// document.getElementById("work").innerHTML = user.work()

// const user_details =
// {
//     ph: "9344361040",
//     address: "kholapur, mumbai"
// }

// Object.assign(user, user_details)

// console.log(user_details.name);


// // object cloning

// const objcopy = Object.assign({}, user_details)

// console.log(objcopy.ph);

// // object merging


// const objmerge = { ...user, ...user_details }

// console.log(objmerge.address);


// // delete

// delete user.age;
// console.log(user.age);


// function name1(firstname, lastname) {
//     return {
//         // firstname: firstname,
//         // lastname: lastname
//         //                     the 2 ways are same
//         firstname,
//         lastname
//     }
// }

// console.log(name1("Kavippiriyan", "S"));



// **prottype**

// let obj =
// {
//     name:"Bala",
//     age :22
// }


// const obj1 =
// {
//     __proto__:obj,
//     city:"Erode"
// }
// console.log(obj1.name);
// console.log(obj);
// console.log(obj1);


//  Regular Expression

//   *** Modifiers  ***
// var sentence = "Hello Everybody all of you fine?"
// var sentence1 = /y/g;   // here find y element and g is get all
// var sentence2 = /e/ig;   // here find e element and i is insensitive (upper and lower) g is get all
// console.log(sentence.match(sentence2));
// var sentence2 = /E/i;   // here find e element and i is insensitive (upper and lower) g is get all

// console.log(sentence.match(sentence1));
// console.log(sentence.match(sentence2));

// var sentence = "Hello Everybody all of you fine?"
// var sentence1 = /y/ig;
// console.log(sentence.search(sentence1));

// var sentence = "Hello Everybody all of you fine?"
// var sentence1 = new RegExp("H","g")
// var sentence2 = new RegExp("i","gm")  // m is more than one line
// var sentence3 = new RegExp("l","ig")
// console.log(sentence.match(sentence1));
// console.log(sentence.match(sentence2));
// console.log(sentence.match(sentence3));

//    ***  brackets  ***

// var a = "The beautiful Window1011";
// var b = /[e]/g;
// var c = /[^e]/g;
// var d = /[0]/g;
// var e = /[^0]/g;
// console.log(a.match(b));
// console.log(a.match(c));
// console.log(a.match(d));
// console.log(a.match(e));

//   *** Meta charecters ***

// var word = "Today 3@ is % 9a \n good \t day!1"

// var checking =/\w/g;
// var checking1 =/\W/g; // w - give without special charecter, W-give only special charecter
// var checking2 = /\d/g; // d - give only numbers  D-without numbers
// var checking3 = /\D/g;
//  var checking4 = /\s/g;     // give only spaces
//  var checking4 = /\S/g;     // give without spaces
//  var checking5 = /da\b/g;     // give only Ending with da
//  var checking6 = /\bda/g;     // give only starting with da
//  var checking7 = /\n/g;     // which place \n that charecter is there
//  var checking8 = /\t/g;     // which place \n that charecter is there


// console.log(word.match(checking));
// console.log(word.match(checking1));
// console.log(word.match(checking2));
// console.log(word.match(checking3));
// console.log(word.match(checking4));
// console.log(word.match(checking5));
// console.log(word.match(checking6));
// console.log(word.search(checking7));
// console.log(word.search(checking8));

//    ****  quantifiers  ****


// var sentence = "Iam staying in hostel 300 10 2000"

// var find = /\d{3,}/gi                    // 3 or 3+ digits
// console.log(sentence.match(find));

// var find = /\a/gi;
// console.log(sentence.match(find));

// var find = /\a*/gi;
// console.log(sentence.match(find));  // other than a all value will consider as a space



// Regex properties


// var word = "Focus on yourself!"

// var condition = /a/gim

// var using_condition = condition.global
// var using_condition1 = condition.ignoreCase
// var using_condition2 = condition.multiline
// console.log(using_condition);
// console.log(using_condition1);
// console.log(using_condition2);



//  Regex methods


// var words = "Every walls has ear"

// var condition = /a/g;
// var exe = condition.exec(words)  //   exec --> its just executing the methods
// console.log(exe);


// var condition = /z/g;
// var exe = condition.test(words)  // test --> the condition is true or false
// console.log(exe);

// var condition = /a/g;
// var exe = condition.toString(words)  // toString --> it will return the conditon
// console.log(exe);

// var condition = /a/g;
// var exe = condition.compile(words)  // compile --> it will return the words
// console.log(exe);


//   proxy

// let customers = {
//     name1:"kavippiriyan",
//     name2:"praveen",
//     name3:"kesavan",
//     name4:"naveen",
//     name5:"divin",
//     name6:"sankar",
//     name7:"tamil",
//     name8:"arun",
//     name9:"thiru",
//     name10:"Raju",

// }

// let need_customer = {get:function(targetelement,prop){
//     if(targetelement[prop]===targetelement[prop].startsWith("k"))
//     {
//       return targetelement[prop];
//     }

// }}

// let proxyobj = new Proxy(customers,need_customer)


// console.log(proxyobj);
// console.log(proxyobj.name1);



// let customers = {
//     name1: "kavippiriyan",
//     name2: "praveen",
//     name3: "kesavan",
//     name4: "naveen",
//     name5: "divin",
//     name6: "sankar",
//     name7: "tamil",
//     name8: "arun",
//     name9: "thiru",
//     name10: "Raju",

// }

// let need_customer = {
//     get: function (targetelement, prop) {
//         console.log("targetelement"+targetelement);
//         console.log("prop"+prop);

//         return targetelement[prop]
//     },
//     set: function (targetelement, prop, value) {
//         console.log("set - targetelement"+targetelement);
//         console.log("set - prop"+prop);
//         console.log("set - value"+value);

//         return targetelement[prop]=value
//     }
// }

// let proxyobj = new Proxy(customers, need_customer)


// console.log(proxyobj);

// proxyobj.name1 = "Kavippiriyan"


// console.log(proxyobj.name1);
// console.log(proxyobj.name3);



//  **** generators & iterators ****

// function* demo()
// {
//     for(i=0;i<6;i++)
//     {
//         yield i;
//     }
// }

// const obj = demo()
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);




// function* gen()
// {
//     let j=0
//     while(true)
//     {
//         j++;
//         yield j

//     }
// }

// function increment(x)
// {
//     for(let i=0;i<6;i++)
//     {
//         console.log(x.next().value);

//     }
// }
// var obj = gen();
// increment(obj);
// increment(obj);

// var obj1 = gen();
// increment(obj1)


// function* gen()
// {
//     let j=0
//     while(true)
//     {
//         j++;
//         if(j>=5)
//         {
//             j=0
//         }
//         yield j

//     }
// }

// function increment(x)
// {
//     for(let i=0;i<6;i++)
//     {
//         console.log(x.next().value);

//     }
// }
// var obj = gen();
// increment(obj);
// increment(obj);
// increment(obj);

// var obj1 = gen();
// increment(obj1)



// function* demo()
// {
//     var j = 0;
//     var x = [1,2,3,4,5,6]
//     while(true)
//     {
//         j++;
//         if(j>=x.length)
//         {
//             j=0
//         }
//         yield x[j]
//     }

// }


// function display()
// {
//     let obj = demo();

//     for(let i=0;i<5;i++)
//     {
//         console.log(obj.next().value);
//     }
// }


// display();
// display();



//  *** GroupBy Method ***


// let array = [
//     {
//         fname: "apple", color: "red", quantity: 5
//     },
//     {
//         fname: "Mango", color: "yellow", quantity: 3
//     },
//     {
//         fname: "Gova", color: "green", quantity: 4
//     },
//     {
//         fname: "grapes", color: "blue", quantity: 3
//     },
//     {
//         fname: "banana", color: "yellow", quantity: 5
//     }
// ]

// let result = array.reduce((previousvalue, currentvalue) => {
//     previousvalue[currentvalue.quantity] = previousvalue[currentvalue.quantity] || []
//     previousvalue[currentvalue.quantity].push(currentvalue)
//     return previousvalue

// }, {})

// console.log(result);

// let result1 = array.reduce((previousvalue, currentvalue) => {
//     previousvalue[currentvalue.color] = previousvalue[currentvalue.color] || []
//     previousvalue[currentvalue.color].push(currentvalue)
//     return previousvalue

// }, {})
// console.log(result1);


// ****   proxy and reflect ****


// let student =
// {
//     name: "Kiran",
//     age: 20,
//     city: "Chennai",
//     gender: "Male"

// }

// let proxobj = new Proxy(student, {
//     get: function (target, prop) {
//         if (prop === "Pass")         //  customize value
//         {
//             return "you are a good student"
//         }
//         console.log(prop);
//         console.log(target);
//            return target[prop]
//         return Reflect.get(target, prop)


//     },
//     set: function (target, prop, value) {
//         if(prop==="age" && value>20)
//         {
//             throw new Error("Age is must below 20");;
//         }
//         else if(prop=="age" && value<15)
//         {
//             throw new Error("Age is should above 15");
//         }

//         if (prop === "age" && value > 20) {
//             return target[prop] = 20;
//             return Reflect.set(target,prop,20)
//         }
//         else
//         {
//             return Reflect.set(target,prop,value)
//         }
//     }
// })

// console.log(student);
// console.log(student.name);
// console.log(" ----------- ");
// student.age=120;
// console.log(student.age);

// console.log(proxobj);
// console.log(proxobj.name);

// try{
//     proxobj.age = 30;
// }
// catch(err)
// {
//     console.log(err.message);
// }

// *******  proxy customize methods *******



// console.log(proxobj.Pass);

// proxobj.age = 40
// proxobj.age = 115
// console.log(proxobj.age);


// **** collections  ****


// *** set ***

/* 1. ordered 
   2. Unique values
   */


// let set = new Set([1,2,3,4,5]);

// console.log(typeof set);

// console.log( set.has(2));

// set.add(6)
// console.log(set);

// set.delete(6)
// console.log(set);

// set.clear()
// console.log(set);

// console.log( set.size);

// set.add(5);
// console.log(set);

// console.log(Array.from(set));



// ** Map **

/*
1. ordered
2. key value pair (keys can be any type)
3. duplicate values
*/



// let map = new Map(
//     [
//        [1,1],
//        [2,5],
//     ]
// )

// console.log(map.has(1));
// console.log(map.size);
// console.log(map.get(2));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// map.set("hello","hi")
// console.log(map.entries());

// map.delete('hello')
// console.log(map.entries());

// // map.clear()
// // console.log(map.entries());

// console.log(Array.from(map));

// for(const[keys,values] of map)
// {
//     console.log("Keys : "+keys+" "+"Values : "+values); 

// }


/*  1. stack
    2. Queue
    3. Deck
    */

// stack:
// let arr = [];

// arr.push(1);
// arr.push(2);
// arr.push(3);


// console.log(arr);

// arr.pop()

// console.log(arr);

// Queue

// const arr = []


//     arr.push(1);
//     arr.push(2);
//     arr.push(3);

//  console.log(arr);

//     arr.shift()

//     console.log(arr);


//  deque


// const arr = []


// arr.push(1);
// arr.push(2);
// arr.push(3);

// console.log(arr);

// arr.shift()


// console.log(arr);
// arr.unshift(1);
// console.log(arr);

// arr.pop()
// console.log(arr);


//  **** primitive wrapper types ****

