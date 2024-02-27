// -------------------------------------------------------------------------------------

//              Console.log

// alert("Welcome Kavippiriyan Developer");
// console.log("Hello World");
// console.log([1,2,3,4,5]);
// console.log(1,2,3);
// console.log(1.345);
// console.log([90]);
// console.log({name:'Kavippiriyan'});
// console.log({fname:'Kavippiriyan'});
// console.table([1,2,3,4,5]);
// console.table(1,2,3,4,5);
// console.error("This is my error message");
// console.warn("This is my Warning message");
// console.clear()
// -----------------------------------------------------------------------------------------

//               Timer Function

// console.time("timer");
// console.log("My name is Kavippiriyan S");
// console.timeEnd("timer");

// console.time("timer");
// console.table([1,2,3,4,5]);
// console.timeEnd("timer");

// console.time("timer");
// for ( i=0; i<10;i++)
// {
//     console.table(i)
// }
// console.timeEnd("timer");

// console.time("timer");
// for ( i=0; i<=10;i++)
// {
//     console.log(i)
// }
// console.timeEnd("timer");

// console.time("timer");
// for ( i=0; i<=10;i++)
// {
//     console.table([i])
// }
// console.timeEnd("timer");

// -----------------------------------------------------------------------------------------

//                  Variables


// a=50;
// b=50
// c=a+b;
// console.log(c);


// var a=50;
// var b=50;
// console.log(a+b);


// for (i=0;i<5;i++)
// {
//     var a =i
//     console.log(a)
// }
// console.log(a)

// var a;
// for (i=0;i<5;i++)
// {
//      a =i
//     console.log(a)
// }
// console.log(a)

// for (i=0;i<5;i++)
// {
//     let  a =i
//     console.log(a)
// }
// console.log(a)

// let a=0;
// for (i=0;i<5;i++)
// {
//     a =i
//     console.log(a)
// }
// console.log(a)

// for (i=0;i<5;i++)
// {
//     const  a =i
//     console.log(a)
// }
// console.log(a)

// const a=0;
// for (i=0;i<5;i++)
// {
//     a =i;
//     console.log(a)
// }
// console.log(a)


//  Redeclaration


// var a =0;

// console.log(a);

// var a=0;
// console.log(a);

// let a =0;

// console.log(a);

// let a=0;
// console.log(a);

// const a =0;

// console.log(a);

// const a=0;
// console.log(a);


// const a={fname:"kavi",age:22}
// console.log(a.fname);

// a.fname="kavippiriyan";
// console.log(a.fname);


// =================================================================================================

//          Data Types


// 1. string
// 2. Number
// 3. null
// 4. Boolean
// 5. undefined
// 6. symbols

// console.log(typeof(2));  
// console.log(typeof(2.5)); 
// console.log(typeof(true));
// console.log(typeof("Hii"));
// console.log(typeof(Symbol()));
// console.log(typeof(null));
// console.log(typeof(a));


// ==========================================================================================================

//         Reference types

// 1. array
// 2. object literals
// 3. date


// console.log(typeof(['a']));
// console.log(typeof({'name':"kavippiriyan","age":22}));
// console.log(typeof(new Date()));
// a= new Date();
// console.log(a);


// ==========================================================================================================



//          Type conversion

// a=123;
// console.log(a,typeof(a));
// a=String(a);
// console.log(a,typeof(a));

// a=[1,2,3,4,5];
// console.log(a,typeof(a));
// a=String(a);
// console.log(a,typeof(a));

// a=25.5;
// console.log(a,typeof(a));
// a=String(a);
// console.log(a,typeof(a));

// a=true;
// console.log(a,typeof(a));
// a=String(a);
// console.log(a,typeof(a));

// a=true;
// console.log(a,typeof(a));
// a=String(a);
// console.log(a,typeof(a));


// var a;
// console.log(a,typeof(a));
// a=String(a);
// console.log(a,typeof(a));


// var a=null;
// console.log(a,typeof(a));
// a=String(a);
// console.log(a,typeof(a));

// var a=Symbol();
// console.log(a,typeof(a));
// a=a.toString();
// console.log(a,typeof(a));

// var a="hello";
// console.log(a,typeof(a));
// a=parseInt(a);
// console.log(a,typeof(a));

// var a=true;
// console.log(a,typeof(a));
// a=parseInt(a);
// console.log(a,typeof(a));

// var a=[1,2,3,4,5];
// console.log(a,typeof(a));
// a=parseInt(a);
// console.log(a,typeof(a));


// var a=[1,2,3,4,5];
// console.log(a,typeof(a));
// a=Number(a);
// console.log(a,typeof(a));


// var a = 5;
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// var a = 6;
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// var a = 0;
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// var a = -1;
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// var a = "kavi";
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// var a = [1,2,3,4,5];
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));


// var a ;
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// var a = Symbol();
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// var a = null;
// console.log(a,typeof(a));

// a=Boolean(a);
// console.log(a,typeof(a));

// a= 5;
// console.log(a,typeof(a));

// a=Array(a);
// console.log(a,typeof(a));



//  ==============================================================================================


//      Type coercion


// a = '10';
// b = 20;
// console.log(a+b);
// console.log(typeof(a+b));

// a = '10';
// b = [1,2,3,4,5];
// console.log(a+b);
// console.log(typeof(a+b));

// a = 10;
// b = [1,2,3,4,5];
// console.log(a+b);
// console.log(typeof(a+b));

// ====================================================================================================


//      Arithmetic Operation



// let a=5;
// let b=5;
// let c=a+b;
// console.log(c);

// a=5;
// b=5;
// c=a-b;
// console.log(c);

// a=5;
// b=5;
// c=a*b;
// console.log(c);

// a=5;
// b=5;
// c=a/b;
// console.log(c);


// a=5;
// b=5;
// c=a**b;
// console.log(c);

// a=5;
// b=5;
// c=a%b;
// console.log(c);


// let a=5;
// const b=5;
// let c=a+b;
// console.log(c);

// const a=5;
// var b=5;
// let c=a+b;
// console.log(c);


// ==================================================================================================

//   Assignment Operators


// a=5;
// a+=a;
// console.log(a);

// a=5;
// a-=a;
// console.log(a);

// a=5;
// a*=a;
// console.log(a);

// a=5;
// a%=a;
// console.log(a);

// a=5;
// a/=a;
// console.log(a);

// a=5;
// a**=a;
// console.log(a);

// =================================================================================================


//     Comparision Operators


// a=5;
// b='5';
// console.log(a==b);
// console.log(a==b);

// a=5;
// b=[5];
// console.log(a==b);
// console.log(a===b);

// a=5;
// b=Symbol(5);
// console.log(a==b);


// =======================================================================================================

//              Relational Operators


// let a=5;
// let b=10;

// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);

// =========================================================================================================


//      Logical Operators


//  &&,  || ,  !



// var a=5;

// console.log(a>3 && a<6);
// console.log(a>3 || a<6);
// console.log(!(a>3 || a<6));

// console.log(a>3 && a<6 && a==10);
// console.log(a>3 || a<6 || a==100);
// console.log(!(a>3 || a<6));

// ==================================================================================================


//   Strict Equality or Identity Operator


// a=5;
// b=5;
// console.log(a==b);
// console.log(a===b);

// a=5;
// b='5';
// console.log(a==b);
// console.log(a===b);


// a="kavippiriyan";
// b=new String("kavippiriyan");
// console.log(a==b);
// console.log(a===b);



// let nullValue = null;
// let undefinedValue = undefined;
// console.log(nullValue==undefinedValue);
// console.log(nullValue===undefinedValue);

// a="";
// b=false
// console.log(a==b);
// console.log(a===b);


// =====================================================================================================

//  Conditional or ternary operator (?!)



// const a=10;

// const result = a>=10?"Equal":"Not equal";
// console.log(result);



// function a(age)
// {
//     const result=age?age:'No age given';
//     console.log(result);
// }


// a();
// a(22);
// a(null);


// const fun = ()=>{
//     return "Hello"
// }

// console.log(fun())



// const object = {'fname':" kavippriryan","age":22};
// console.log(object.fname);
// console.log(object.age);

// const fun = (object)=>
// {
//     object.fname = object.fname?object.fname:"No name given";
//     return "Hello"+object.fname
// }

// console.log(fun(object))


// const object = {"age":22};
// console.log(object.fname);
// console.log(object.age);

// const fun = (object)=>
// {
//     object.fname = object.fname?object.fname:" name is not given";
//     return "Hello"+object.fname
// }

// console.log(fun(object))

//              conditional chains


// A grade - above 90
// B grade - above 80
// C grade - below 80


// const variable = (grade)=>
// {
//    const grades = grade>=90?"A grade": grade>=80? "B grade":"C grade";
//     return grades;
// }

// console.log(variable(90));
// console.log(variable(80));
// console.log(variable(79));

// const variable = (grade)=>
// {
//    const grades = grade>=90?"A grade": grade>=80? "B grade":"C grade";
//     console.log(grades);
// }

// variable(90);
// variable(80);
// variable(79);

// ======================================================================================================

//             Bitwise Operators



// And ,Or, Xor, Not, Left shift , Right shift , Unsigned Right shift(this is not finish)


// a=5;
// b=6;

// console.log(a&b);
// a&=b;
// console.log(a);

// a=5;
// b=6;

// console.log(a|b);
// a|=b;
// console.log(a);

// a=5;
// b=6;

// console.log(a^b);
// a^=b;
// console.log(a);


// a=5;
// b=6;

// console.log(~a)
// console.log(~b)

// a=5;
// b=6;

// console.log(a<<b);
// a<<=b;
// console.log(a);



// a=5;
// b=6;

// console.log(a>>b);
// a>>=b;
// console.log(a);


// =======================================================================================================

//    Nullish coalescing operator


// a=null??"a contains no values";

// console.log(a);


// b=50??'b has value';
// console.log(b);


// let user = {"name":"kavippiriyan"};

// console.log(user);
// console.log(user.name);

// console.log(user.city);

// user.city??="Nasiyanur";

// console.log(user.city);
// console.log(user);




// const variable = ()=>
// {
//     const a =null??"Hi"
//     console.log(a)
// }
// variable()

// ======================================================================================================

//               Increment, Decrement Operator


// a=5;

// a++;
// console.log(a);

// a=5;
// a--;
// console.log(a);


// let a=5;
// const b=a++;

// console.log('value of a:',a," value of b:",b)


// let a=5;
// const b=++a;

// console.log('value of a:',a," value of b:",b)


// let a=5;
// const b=a--;

// console.log('value of a:',a," value of b:",b)


// let a=5;
// const b=--a;

// console.log('value of a:',a," value of b:",b) 

// ================================================================================================

//     if else else if


/*
 90-100 A Grade 
80 - 89 B Grade
70 - 79 C Grade
<70 D Grade
*/

// let number = prompt("Enter Your grade here!");

// if (number>=90&& number<=100)
// {
//     console.log("You Got A Grade");
// }
// else if (number>=80&&number<=89)
// {
//     console.log("You Got B Grade");
// }
// else if (number>=70&&number<=79)
// {
//     console.log("You Got C Grade");
// }
// else if (number>=0 && number<=78)
// {
//     console.log("You Got D Grade");
// }
// else
// {
//     console.log("The number should between 0 to 100");
// }

// ====================================================================================================

//  Nested if


/*

find total and average
min mark = 35
91-100 = A grade
81-90 = B Grade
71-80 =  c Grade
others = D Grade

find total and avergae
*/

//let subjects = tamil=100,english=90,maths=90;

// let tamil =Number(prompt("Enter the Tamil subject mark"));
// let english = Number(prompt("Enter the English subject mark"));
// let maths = Number(prompt("Enter the Maths subject mark"));
// let total = tamil+english+maths;
// let avg = total/3;

// console.log("total Marks: ",total);
// console.log("Average Marks: ",avg);


// if( tamil>=35 && english>=35 && maths>=35)
// {
//     if(avg>=91&&avg<=100)
//     {
//         console.log("you Got A grade");
//     }
//     else if(avg>=81&&avg<=90)
//     {
//         console.log("you Got B grade");
//     }
//     else if(avg>=71&&avg<=80)
//     {
//         console.log("you Got C grade");
//     }
//     else if(avg>=0&&avg<=70)
//     {
//         console.log("you Got D grade");
//     }


// }
// else 
// {
//     console.log("Result","Fail");
//     console.log("Grade","No grade");
// }

// =========================================================================================================


//     Switch Statement

//  let num= Number(prompt("Enter the Number "));

//  switch(num)
//  {
//     case 1 : console.log("one")
//     break;
//     case 2 : console.log("two")
//     break;;

//     case 3 : console.log("three")
//     break;;
//     default : console.log("Number should 1 to 3")
//     break;

//  }


// =======================================================================================================

//  Combining Cases statement in javascript



// let letter = prompt("enter a letter");

// switch(letter)
// {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log(letter," is a Vowel ");
//         break;
//     default:
//         console.log(letter+" Not a vowel");    
// }

// ==========================================================================================================



//   While Loop



// let a=Number(prompt("Enter the Number"));

// if (a>=1&&a<=10)
// {
//     while(a<=10)
//     {
//         console.log(a);
//         a++;
//     }
// }
// else
// {
//     console.log("The number should between 1 to 10");
// }

// ==========================================================================================================

//   Do while Loop


// let number =Number(prompt("Enter the number for creating table"));

// let limit = 10;
// let i=1;

// do
// {
//     console.log(i+" X "+number+" = "+(number*i));
//     i++;
// }
// while(i<=10);

// ==========================================================================================================


//   for loop

// for (i=0;i<10;i++)
// {
//     console.log(i);
// }

// let arr=[];

// for(i=0;i<=10;i++)
// {
//     arr.push(i);
// }
// console.log(arr);

// ===========================================================================================================

//   Nested for loop


//  Two dimensional array


// let a=[];

// for (i=0;i<3;i++)
// {
//     a.push([]);
//     for (j=0;j<=5;j++)
//     {
//         a[i].push(j);
//     }
// }

// console.log(a);

// let a =55.66699

// console.log(a.toFixed(2))

// ======================================================================================================

//           for of loop or for each loop


//  let a = [1, "hi", "hello", 5];

//  for (i=0;i<a.length;i++)
//  {
//     console.log(a[i]);
//  }


//  for (i of a)
//  {
//     console.log(i);
//  }

// ==========================================================================================================

//  for in loop


// let a = 
// {
//     fname: "Kavippiriyan",
//     age : 22,
//     work : "Developer"
// }

// for (i in a)
// {
//     console.log(i+"  :"+a[i]);
// }

// ===========================================================================================================


// Looping over object by converting to an array object


// let user =
// {
//     fname :"Kavippiriyan S",
//     age : 22 ,
//     work : "Developer"
// }

// user_keys = Object.keys(user);

// console.log(user_keys);



// user_values = Object.values(user);

// console.log(user_values);


// for(i=0; i<user_keys.length;i++)
// {
//    console.log(user_keys[i]+" "+user_values[i]);
// }

// =========================================================================================================

//    break , continue



// for (i=1;i<=10;i++)
// {
//     if(i==6)
//     {
//         break;
//     }
//     console.log(i);
// }


// for (i=1;i<=10;i++)
// {
//     if(i==6)
//     {
//         continue;
//     }
//     console.log(i);
// }


// ===============================================================================================================


//      Lable block



// let user=
// [
   
//         ["Michael", "Emily", "William", "Ethan", "James"],
//         ["Olivia", "Benjamin", "Emma", "Alexander", "Ava"],
//         ["Ethan", "Charlotte", "Mia", "Jacob", "Emma"]
// ]

// for ( let users of user)
// {
//     inner:
//     for(let members of users)
//     {
//         if(members.startsWith('E'))
//         {
//         console.log(members);
//         break inner;
//         }
//     }
// }

// =============================================================================================================

//    Math Fuction 


// let c;

// c=Math.E;
// c=Math.PI;
// c=Math.round(5.6);
// c=Math.round(5.4);
// c=Math.floor(5.6);
// c=Math.ceil(5.6);
// c=Math.ceil(5.1);
// c=Math.sqrt(4);
// c=Math.sqrt(16);
// c=Math.abs(-16);
// c=Math.abs(-1);
// c=Math.trunc(2.58);
// c=Math.floor(2.58);
// c=Math.trunc(2.98);
// c=Math.pow(2,4);
// c=Math.min(2,4,6,9,8,7,10,33,65);
// c=Math.max(2,4,6,9,8,7,10,33,65);
// c=Math.random();
// c=Math.floor(Math.random()*50+1);
// c=Math.sign(10);
// c=Math.log2(10);
// c=Math.log10(10);


// console.log(c);

//============================================================================================================

//      Concatingation , Concat Method, append


// let fname="Kavippiriyan"
// let lname="S"

// // console.log(fname+" "+lname);

// // concat = fname.concat(" "+lname);
// // console.log(concat);

// append = fname+=lname;
// console.log(append);

// ===================================================================================

//     uppercase, lowercase, Length, Escaping, indexof



// let a = ' Iam Kavippiriyan i woul\'d like a developer'

// console.log(a);

// uppercase = a.toUpperCase();
// lowercase = a.toLowerCase();
// console.log(uppercase);
// console.log(lowercase);

// console.log(a.indexOf('I'));
// console.log(a.lastIndexOf('a'));


// console.log(a.charAt(9));
// console.log(a.charCodeAt(9));


// ===================================================================================================


//     Substring , slice ,split

// let a = 'IamKavippiriyan i woul\'d like a developer'

// console.log(a.substring(1));
// console.log(a.substring(1,3));
// console.log(a.substring(-1));
// console.log(a.substring(25,36));
// console.log(a.substring(48,58));


// console.log(a.slice(1));
// console.log(a.slice(1,3));
// console.log(a.slice(-2));
// console.log(a.slice(25,36));
// console.log(a.slice(48,58));

// a=a.split(" ")

// console.table(a);
// console.log(a);

// =================================================================================================

//   Replace , includes , trim()


// fname = "Hi there iam using whatsapp";

// // c=fname.replace("there","hello");
// // console.log(c);


// includes = fname.includes("there");
// console.log(includes);

// arr= ['hi','iam','good'];
// inclueds = arr.includes("good");
// inclueds1 = arr.includes("goods");
// console.log(includes);
// console.log(inclueds1);

// let words = "    Welcome   "

// console.log(words);
// console.log(words.length);

// trim = words.trim();
// console.log(trim);
// console.log(trim.length);


// ========================================================================================================

//              Padstart    padend


// let number = '9344361040';


// adding = number.padStart(14,"+91 ");
// console.log(adding);


// BankNumber = "IOB127896234"
// end = BankNumber.padEnd(16,'xxxx');
// console.log(end);

//============================================================================================================


//        String long literals  (Here we are using this for only identifying para's) //  String from char code





// const para = "Hi hello iam there her im waiting for you "+"dont worry iam here so you dont want to fear anything"

// console.log(para);

// const para1 = "Hi hello iam there her im waiting for you \ dont worry iam here so you dont want to fear anything"
// console.log(para);

// console.log(String.fromCharCode(68,86,111,65,101,97));


// ==========================================================================================================


//     functions with arbitary arguments



// function add(a,b)
// {
//     total=a+b;
//     return total;

// }
// console.log(add(10,10));


// function arbitary()
// {
//     total=0;
//     for(i=0;i<arguments.length;i++)
//     {
//         total+=arguments[i];
//     }
//     return total;
// }

// console.log(arbitary(10,20,30,40,50));


// //spread operator
// function arbitary(...args)
// {
//     total=0;
//     for(i=0;i<args.length;i++)
//     {
//         total+=args[i];
//     }
//     return total;
// }

// console.log(arbitary(10,20,30,40,50));

// ========================================================================================================

//        Function as Exoression , Arrow Functions



// let user= function(a)
// {
//     return a;
// }

// console.log(user);

// console.log(user("hi"));


// user= (a)=>
// {
//     return a;
// }

// console.log(user);

// console.log(user("hi"));

// =======================================================================================================

//            Map functions


// numbers = [10,20,30,40,50,60];
// console.log(numbers);

//      1  with map
// doubledfunctions = numbers.map(num=>num*2);

// console.log(doubledfunctions);


//      2 with filter
// filterfunction = numbers.filter(num=>num>=50);
// console.log(filterfunction);

//      3    with reduce
// total = numbers.reduce((sum,number)=>sum+number,0)
// console.log(total);


//      4  using arrow function to create closuer



// let add = (a,b)=>
// {
//     let total=0;
//     return ()=>
//     {
//         total=a+b;
//         return total;
//     }
  
// }


// total = add(50,6);

// console.log(total(10,20));
// =============================================================================================================


 //           call back function



//  function a()
//  {
//     console.log("Iam callback function")
//  }
//  a()

//  function b(f)//higherorder  function
//  {
//    f();
//  }

// b(a);

//set timeout functions


// setTimeout(function()
// {
//     console.log("This place is HeaveN");
// },3000);

// setInterval(function()
// {
//     console.log("Welcome to Wonderla");
// },3000);


// const numbers = [1,2,3,4,5];

// numbers.forEach(function(number)
// {
//     console.log(number);
// })


// ========================================================================================================

//    for each


// a=[1,2,3,4,5,6,7,8,9,10];


// a.forEach((value) =>
// {
//     console.log(value);
// });


// names = 
// [
//     {
//         fname:"kavippiriyan", age:22 , native:"nasiyanur"
//     },

//     {
//         fname:"praveen", age:22 , native:"mettur"
//     },

//     {
//         fname:"k7", age:22 , native:"nasiyanur"
//     },

// ]

// names.forEach((value) =>
// {
//     console.table(value);
// });

// console.table(names);

//              printing

// let a=[1,2,3,4,5,6,7,8,9,10];

// a.forEach(number=>console.log(number));

//              doubling

// let a=[1,2,3,4,5,6,7,8,9,10];

// a.forEach(number=>console.log(number*2));

//        creating new array and added existing array values

// let arr = [];

// let arr1 = [10,20,30,40,50];

// arr1.forEach(number=>{
//     arr.push(number);
// })
// console.log(arr1);
// console.table(arr1);

//           Max number in the array


// let arr1 = [10,20,30,40,50];
// let max = arr1[0];

// arr1.forEach(number=>{

//     if(number>max)
//     {
//         max=number
//     }

// })
// console.log(max);


//    Finding the even numbers in the array

// arr = [1,2,3,4,5,6,7,8,9,10];

// arr1 = [];

// arr.forEach(number=>
//     {
//         if(number%2==0)
//         {
//             arr1.push(number);
//         }
       
//     })

// console.log(arr1);


// array = ["hi", 'hello ','this', 'is','me'];

// array.forEach((number,Index)=>
//     {
//         array[Index] = number.toUpperCase();
//     });

// console.log(array);

// =====================================================================================================

//     Map

// let a = [1,2,3,4,5,6];
// let b= [];
// a.map((value)=>
// {
//     c=Math.sqrt(value);
//     b.push(c);
//     return b;
// })

// console.log(b);
// console.table(b);



// names = 
// [
//     {
//         fname:"kavippiriyan", age:22 , native:"nasiyanur"
//     },

//     {
//         fname:"praveen", age:22 , native:"mettur"
//     },

//     {
//         fname:"k7", age:22 , native:"nasiyanur"
//     },
    

//     {
//         fname:"divin", age:22 , native:"nasiyanur"
//     },

// ];

// let eligible = names.map((user)=>({

//    ...user,
//    status: user.age>18?"Eligible":"Not Eligible"


//     }));

//     console.table(eligible);

// ================================================================================================

//        Map

//                  simple transformation

// a=[1,2,3,4,5];

// a.forEach(num=>console.log(num*2));

// var doublednumbers = a.map(num=>num*2);
// console.log(doublednumbers);

// a.map(num=>console.log(num*2));


// Modifying Array Elemets

// let names = ["Good ","Morning","Kavippiriyan"];


// let capitalize = names.map(upper=>upper.toUpperCase());
// console.log(capitalize);



//   combining arrays

// let fruits = ["apple","orange"];
// let colors = ["red", "orange"];


// let fruitcolors = fruits.map((fruit,index)=>fruit+" color is : "+colors[index]
// );
// console.log(fruitcolors);



//              filtering



// let arr = [1,2,3,4,5,6,7,8,9,10];


// let filter = arr.map(filter=>filter%2==0);

// console.log(filter);


//  Extracting Properties from an array objects


// names = 
// [
//     {
//         fname:"kavippiriyan", age:22 , native:"nasiyanur"
//     },

//     {
//         fname:"praveen", age:22 , native:"mettur"
//     },

//     {
//         fname:"k7", age:22 , native:"nasiyanur"
//     },
    

//     {
//         fname:"divin", age:22 , native:"nasiyanur"
//     },

// ];

// let extract = names.map(username=>username.fname);
// console.log(extract);


//  Modifying array

// let modify = names.map(user=>{
//     return{
//         fname:user.fname,
//         age:user.age-1
//     }
// });

// console.log(modify);


//  three parameters


// let threeparm = names.map(function(user,index,array){
//     return{
//             name:user.fname,
//             length: user.fname.length,
//             position: index,
//             totalwords: array.length
//     }
    
// });

// console.log(threeparm);


// ====================================================================================================


//                     filter() method




// users =[
//     {
//         name:"Kavippiriyan",
//     },
//     {
//         name:"Kesavan",
//     },
//     {
//         name:"Praveen",
//     },
//     {
//         name:"Naveen",
//     },
//     {
//         name:"Divin",
//     },
// ];

// let letter_filter = users.filter(user=>user.name.length%2==0);

// console.log(letter_filter);

// let namefilter = users.filter(user=>user.name.startsWith("K"));
// console.log(namefilter);



// books = [

//     {
//         name:"Iam legend of the 2023",author:"nivin paul",year:2024
//     },

//     {
//         name:"The Friends",author:"Kevin Petter",year:2022
//     },
    
//     {
//         name:"Iam a bird",author:"candy roy",year:2023
//     },
    
//     {
//         name:"Love",author:"veronica",year:2020
//     },
// ]

// let filter = books.filter(
//     book=>
//     {
//         return book.name.toLowerCase().includes('Iam'.toLowerCase())|| book.year===2020;
//     }
// )

// console.log(filter);

//==========================================================================================================


//                           reduce



// let a = [1,2,3];


// let reduce = a.reduce((initialvalue,valuesina)=>initialvalue*valuesina);

// console.log(reduce);


//              Flatning an array


// let arr = [[1,2],[3,4],[5,6]];

// let flattening = arr.reduce((acumulator,currentvalue)=>acumulator.concat(currentvalue)
// );

// console.log(flattening);



// let colors = ["red","blue","green","green","pink","black"];

// let add = colors.reduce((accumulator,curentvalue)=>{
//     if (curentvalue in accumulator)
//     {
//         accumulator[curentvalue]++;
//     }
//     else{
//         accumulator[curentvalue]=1;
//     }
//     return accumulator;
// },{}
// )
// console.log(add)

// let arr = [1,2,3,4,5,6,7,8,9,10];


// let max = arr.reduce((accumulator, currentvalue)=>
// {
//     return Math.max (accumulator,currentvalue);
// })

// console.log(max);


// names = 
// [
//     {
//         fname:"kavippiriyan", age:22 , native:"nasiyanur"
//     },

//     {
//         fname:"praveen", age:22 , native:"mettur"
//     },

//     {
//         fname:"karthi", age:22 , native:"t.code"
//     },
    

//     {
//         fname:"k7", age:22 , native:"nasiyanur"
//     },

// ];


// let sep_city = names.reduce((accumulator, currentvalue)=>
// {
//     if(currentvalue.native in accumulator)
//     {
//         accumulator[currentvalue.native].push(currentvalue);

//     }
//     else
//     {
//         accumulator[currentvalue.native] = [currentvalue];
//     }
//     return accumulator;
// },{});

// console.log(sep_city);


//  ==========================================================================

//            slice  changing directly the variable


// a = [1,2,3,4,5,6,7,8,9,10];


// console.log(a.slice(1));
// console.log(a.slice(1,3));
// console.log(a.slice());

// ===========================================================================

//                  splice  --  remove  changing directly the variable


// a = [1,2,3,4,5,6,7,8,9,10];
// b = [1,2,3,4,5,6,7,8,9,10];
// c = [1,2,3,4,5,6,7,8,9,10];
// d = [1,2,3,4,5,6,7,8,9,10];

// let remove = a.splice(1);
// let remove1 = b.splice(2,2);
// console.log(remove);
// console.log(a);
// console.log(remove1);
// let remove2 = c.splice(1,7);
// console.log(remove2);
// console.log(c);
// let remove3 = d.splice(9,10);
// console.log(remove3);

// e = [1,2,3,4,5,6,7,8,9,10];


// let remove = e.splice(0,45,90);
// console.log(remove);
// console.log(e);

// e = [1,2,3,4,5,6,7,8,9,10];


// let remove = e.splice(9,10,90,45);
// console.log(remove);
// console.log(e);

// f = [1,2,3,4,5,6,7,8,9,10];

// let remove = f.splice(10,0,999,999);

// console.log(remove);
// console.log(f);


//  ===============================================================================


//           concat



// let a = [40,50,60,70,80,90,100];
// let b = [30,5,0,7,3,6];
// let c = [39,95,450,745,398,60];


// let concat = a.concat(b);
// console.log(concat);

// concat = b.concat(c);
// console.log(concat);

// ============================================================================================

//             sorting


// const names = ['redmi','samsung','oppo','realme','nokia','vivo'];

// console.log("Befor sorting :"+names);

// console.log("After sorting : "+names.sort());

// a=[1,100,8,3,7,5,1256,665];
// console.log(a.sort());

// a.sort((a,b)=>
// {
//     return a-b;
// })

// console.log("Ascending order : "+a);

// a.sort((a,b)=>
// {
//     return b-a;
// })

// console.log("Descending order : "+a);


// users =[
//     {
//         name:"Kavippiriyan",age:22
//     },
//     {
//         name:"Kesavan",age:22
//     },
//     {
//         name:"Praveen",age:22
//     },
//     {
//         name:"Naveen",age:27
//     },
//     {
//         name:"Divin",age:23
//     },
// ];

   
// users.sort((a,b)=>
// {
//     if(a.name>b.name) return 1
//     if(a.name<b.name) return -1
//     return 0;
// });

// console.log(users);
   
// users.sort((a,b)=>
// {
//     return a.age-b.age;
// });

// console.log(users);

// =========================================================================================


//          fill in javascript Fill(value,start,end)


// a=[41,42,43,44,45,46,47,48];

// console.log(a.fill(40,5));
// console.log(a.fill(40,0));
// console.log(a.fill(20,3,5));

// ==============================================================================================

//      includes(value, start_index)


// let colors = ['red','white','black','blue','red'];
// a=[41,42,43,44,45,46,47,48];

// console.log(colors.includes("blue"));
// console.log(colors.includes("blue",0));
// console.log(colors.includes("blue",4));
// console.log(a.includes(42));


// =============================================
//          join() - used to convert array to string

// let colors = ['red','white','black','blue','red'];

// console.log(colors.join()); 
// console.log(colors.join('-')); 

//                reverse

// let a = [1,2,4,5,6,7,8];

// console.log(a.reverse());

//  Array element with length property 

// const x={0:1,1:2,2:3, length:4}
// console.log(x);

// Array.prototype.reverse.call(x);
// console.log(x);

//=================================================================================================================


//         push


// a=[1,2,3,45,6];

// a.push(0,3,0,4);

// console.log(a);

// var names = ["keerthana","swetha","mounika","vedika"];

// // names.push("anushka","swathi");

// // console.log(names);

// let names1 = ["hansika","pavithra"];

// names.push(...names1);
// console.log(names);

// ============= ========================= ======================== =================== ============


//             pop  ,     shift ,  unshift , indexof ,  every , some
  

// pop is used to remove the last element

// var names = ["keerthana","swetha","mounika","vedika"];

// console.log(names);
// console.log(names.pop());
// console.log(names);


// shift is used to remove the first element
// var names = ["keerthana","swetha","mounika","vedika"];

// names.shift();
// console.log(names);

//      unshift
//     used to add the first element


// var names = ["keerthana","swetha","mounika","vedika"];

// names.unshift("deepika","durka");
// console.log(names);


// indexof  find the index using elements


// var names = ["keerthana","swetha","mounika","vedika"];

// console.log(names.indexOf("swetha"));

// a=[1,2,3,45,6,2,9,7,1,6,7,45];
// console.log(a.indexOf(2));


// console.log(a.indexOf(6,5));

// console.log(a.lastIndexOf(7));



// every - all condition will satisfy only the outcome will true (and gate)
// var even_num = [10,20,30,40,50,60];

// let even = even_num.every((value)=>
// {
//     return value%2==0;
// })

// // some is like or gate
// console.log("All numbers in the array is even?"+even);

// var even_num = [11,20,30,40,59,69];
// let even1 = even_num.some((value)=>
// {
//     return value%2==0;
// })

// console.log("All numbers in the array is even?"+even1);


// var even_num = [11,21,31,41,59,69];
// let even2 = even_num.some((value)=>
// {
//     return value%2==0;
// })

// console.log("All numbers in the array is even?"+even2);


// =======================================================================================================================


//           primitive data types and non primitive data types


//                Primitive data types
//   var a = 5;
//   var b = 6;


//   b=a;
//   console.log(a);
//   console.log(b);

//   a=10;
//   console.log(a);
//   console.log(b);


//              Non Primitive data types



//objects , array


//    a = [1,2,3,4,5];
//    b=a;
//    console.log(a);
//    console.log(b);
//    a.push(1,2);
//    console.log(a);
//    console.log(b);

//    a.unshift(1);
//    console.log(a);


// let users = {name:"Kavippiriyan",age:22};

// let user1 = users

// console.log(user1);
// console.log(users);

// user1.name="Kavippiriyan S"
// console.log(user1);
// console.log(users);


//       object clone


// let num = {a:1,b:2,c:3};
// let num1 = {d:4,e:5,f:6};


// let num2 = Object.assign({},num,num1);
// console.log(num2);
// num1.d=9;
// console.log(num2);
// console.log(num1);


// using spread operator


// let obj = {a:1,b:2,c:3};
// let obj1 = {d:4,e:5,f:6};

// let obj2 = {...obj,...obj1};
// console.log(obj2);

// a=[1,2,3,4,5];

// let b = [...a];//spread operator
// let c= a.slice();//slice method
// let d =[].concat(a);//concat method
// let e = Array.from(a)
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// =====================================================================================================================


//                  Const variable in array


// const a = 5;
// console.log(a);

// // a=10;
// // console.log(a);


// const arr = [10,20,30,40];
// console.log(arr);
// arr.push(50); // Here we are only modify not assigning modify is possible assigning is not possible
// console.log(arr);
// arr = [60];//we can't assign





// const user = {
//     fruitName:"apple",
//     kg:25,
//     amount:2500,
//     fname:function()
//     {
//         return this.fruitName
//     },

// }
// console.log(user);
// console.log(user.fname());

// function users(name,age,city)
// {
//    const user={};
//     user.name=name,
//     user.age = age,
//     user.city = city

//     user.about = function()
//     {
//         return user.name
//     }
//     return user;
// }
// console.log(users("kavippiriyan",22,"nasiyanur"));


//  Factory function

// const user_method ={
//     about:function()
// {
//     return `${this.name}`
// }

// };

// function users(name,age,city)
// {
//    const user={};
//     user.name=name,
//     user.age = age,
//     user.city = city

//     user.about = user_method.about
//     return user;
// }

// console.log(users("hi",22,"mumbai"))


// prototype inheritance


// const user_method ={
//     about:function()
// {
//     return `${this.name}`
// }

// };

// function users(name,age,city)
// {
//    const user=Object.create(user_method);
//     user.name=name,
//     user.age = age,
//     user.city = city

//     return user;
// }

// console.log(users("hi",22,"mumbai"))


// const a = {key:"value1"}
// const b = {key:"value2"}

// const c =Object.create(a);
// console.log(c);

// c.key="value11"
// console.log(c);

// = = = ======================= ======================= =========================== ========================== ======

//              optional chaining  [important for finding the data's]  xxxxx



// let user = {username:"vijat",address:"erode"};
// let user1 = {username:"vijat",address:{city:"erode"}};


// console.log(user.address?user.address:undefined)

// user = {username:"vijat"};


// console.log(user.address?user.address:undefined);
// console.log(user1.address?.city);




// const customer = {
//     name:"kavippiriyan",
//     bank_name:"IOB",
//     bank_details:{
//         ifsc_code:"IOB28794561",
//         branch:"nasiyanur",
//         customer_details:{
//             dob:"09/10/2001",
//             ph:"9344361040"
//         }
//     }
// }

// console.log(customer);


// // Here i want custmer mobile number 

// console.log("Customer Mobile Number : "+customer.bank_details.customer_details.ph);

// console.log(customer.bank_details?.customer_details?.ph)


//============================= ================================== ============================= ========================

//              Function Inside object

// console.log(this);

// function add()
// {
//     a=45
//     console.log(this.a);
    
// }
// add();

// function add()
// {
//     a=45
//     console.log(this.a);
//     function sub()
//     {
//         console.log(this.a);
//     }
//     sub()
// }
// add();

// id=45;

//     const employees =
//     {
//         id:25,
//         empname:"thiyagu",
//         empnum:"9356874158",
        
//         empid:function()
//         {
//             console.log(this.id);

//             empid1:function f()
//             {
//                 console.log(this.id);
//             }
//             f()
//         },
        
       
//     }
    

// employees.empid();

// id=45;

//     const employees =
//     {
//         id:25,
//         empname:"thiyagu",
//         empnum:"9356874158",
        
//         empid:function()
//         {
//             console.log(this.id);

//             empid1:function f()
//             {
//                 console.log(this.id);
//             }
//             f();

//             empid2 = ()=>
//             {
//                 console.log(this.id);
//             }
//             empid2()
//         },
        
       
//     }
    

// employees.empid();


//  ======================= =======================  ==================== ====================== ============= ======

//       Destructuring Assignment

//      Array Destructuring
// numbers = [1,2,3,4,5];

// num1 = numbers[0];
// num2 = numbers[1];
// num3 = numbers.slice(2);
// console.log(num1);
// console.log(num2);
// console.log(num3);



// var [first,second,...rest]=numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

// Array Destructuring


// const fruit ={
//     name:"banana",
//     rate : 100,
//     color : "yellow",
// }

// console.log(fruit);
// const {name,rate,color}=fruit;


// console.log(name);
// console.log(rate);
// console.log(color);


// a=[8, 9];

// const [b=8,c=9,d=10]=a;

// console.log(b);
// console.log(c);
// console.log(d);


// const fruit ={
//     name:"banana",
//     rate : 100,
//     color : "yellow",
// }

// console.log(fruit);
// const {name,rate,color,kg=1}=fruit;


// console.log(name);
// console.log(rate);
// console.log(color);
// console.log(kg);


//   swapping 

// a=5;
// b=6;

// [a,b]=[b,a];
// console.log(a);
// console.log(b);


//    skip


// c=[1,2,3,4,5];

// const[a,,,,b]=c;
// console.log(a);
// console.log(b);

// nested destructuring


// a = [1,[2,3,[4,5]]];

// [b,[c,d,[e,f]]]=a;

// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);



// const users = {
//     user1:"kavi",
//     user2:{
//         user3:"kavi1"

//     }
// }

// const {user1,user2:{user3}}=users;

// console.log(user1);
// console.log(user3);


// const customer = [
//     {
//         cus_name:"Praveen",
//         cus_num :"98648743311",
//         details:{
//                 native:"Mettur"
//         },
//         cus_vechicle:{
//             vec_name:"Mastero",
//             vec_model:"2012"
//         }
//     }
// ]

// const[{cus_name,details:{native},cus_vechicle:{vec_name}}]=customer;

// console.log(cus_name);
// console.log(native);
// console.log(vec_name);