// var a = 20;
// var b = -15

// // console.log(a <= b);
// console.log(a >= b && b > 0);
// // & or and operator only works when all operands are true 


// console.log(a > b || b > 0  );
// // output with || or OR operator is true if even 1 operand is true
// // output with ! or not operator will be inverse ie if iit is true then it will come false and if it is false it will come tryue

// var c = 12;
// var d = 10;

// // swap 2 numbers
// c = d;
// d = c + 2 ;

// console.log(c);
// console.log(d);

// var tomr = "sunny";

// if( tomr == "rain"){
//     console.log("Take a raincoat")
// }else
//     console.log(" do not Take a raincoat")



// var year = 2021;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("The year " + year + " is a leap year");
//         } else {
//             console.log("The year " + year + " is not a leap year");
//         }
//     } else {  // Moved this else block here
//         console.log("The year " + year + " is a leap year");
//     }
// } else {
//     console.log("The year " + year + " is not a leap year");
// }
// there are 5 falsy values in js 0, "", undefined,null,Nan,false**.If we assign these value then the output will be in else only 


// if( score = 0){
//     console.log("We lost the game")
// }else{
//     console.log("We won the game")
// }

// Ternery operator

// var age = 17;

// console.log(
//     (age >= 18) ? "you can vote" : "you cant vote"
// )

// var area = 'circle'
// var PI = 3.43 , l = 5 , b = 6 , r = 4
// if(area == 'circle'){
//     console.log( " The  area of circle is : " + PI*r**2);
// }else if(area == 'rectangle'){
//     console.log( " The  area of rectangle is : " + l*b);

// }else if(area == 'traingle'){
//     console.log( " The  area of traingle is : " + l*b/2);
// }



// var area = 'circle'
// var PI = 3.43 , l = 5 , b = 6 , r = 4

// switch (area) {
//     case 'circle':
//         console.log( " The  area of circle is : " + PI*r**2);
//         break;

        
      
//          case 'rectangle':
//                 console.log( " The  area of rectangle is : " + l*b);
//                 break;
                
//            case 'traingle':
//             console.log( " The  area of traingle is : " + l*b/2);
// break;
        
          
//             default:
//                 console.log("enter the valid input")
//         }

// var num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }
// // do while loop first executes then checks condition

// do {
//     console.log(num);
//     num++;

// }while(num <= 10)

// var num = 10;

// for(num=0 ; num<=10 ; num++){
//     console.log(num);
// }

// Table of 8 using for
// var num = 1
// for( var num = 1; num<=10;num++ ){
//     var tableof = 8;
//     console.log(tableof + "*" + num + "=" + (tableof * num));
// }

// function sum() {
//     var a = 20 ,  b = 15;
//     var total = a+b;
//     console.log(total);

    
// }
// // This is calling the function
// sum(); 




// the a,b here are called as Parameters
// function sum(a,b) {
    
//     var total = a+b;
//     console.log(total);

// }
// the a,b here are called arguments
// sum(32,44);
// sum(10,20);    
    

// function sum(a,b) {
    
//     var total = a+b;
//     console.log(total);

// }

// // funcexpression
// var funExp = sum(5,15);



// function sum(a,b) {
    
    
//     return total = a+b;

// }

// // funcexpression
// var funExp = sum(5,15);

// console.log("The sum of 2 no is" + total);


// var num = 1
// for( var num = 1; num<=10;num++ ){
//     var tableof = 8;
//     // Normal way
//     // console.log(tableof + "*" + num + "=" + (tableof * num)); 
//     // Using template literals. IN this the $ is used to define varaibales
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }




// here 5 is default value in case if someone forgets a parameter and you dont want to get Nan value.The default paramater will be set for a
// function mult(a,b = 5) {
//     return a*b;
    
// }
// console.log(mult(3));




// Arrays


// var myFriends = ['Mohit' , 'Rohit', 'Suresh' , 'Ramesh']
// // Array traversal

// console.log(myFriends[2]);

// // Check length

// console.log(myFriends.length);

// // get last Element
// console.log(myFriends[myFriends.length - 1]);


// var myFriends = ['Mohit' , 'Rohit', 'Suresh' , 'Ramesh']

// to display an Array

// for(i=0 ; i<= myFriends.length ; i++)
// {
//     console.log(myFriends[i])
// }
// for in is used to get index number of elements of Array
// for(let Elements in myFriends){
//     console.log(Elements);
// }

// for of is used to display elements in Array
// for(let Elements of myFriends){
//     console.log(Elements);
// }

// forEach() calls function of each element of array

// myFriends.forEach(function(element , index , array)
// {
//     console.log(element + " index: " + index + " " + array);

// })

// indexof() returns first least element in an array
// lastindexof() returns last greatest value in Array 
// var myFriends = ['Mohit' , 'Rohit', 'Suresh' , 'Ramesh' , 'Rohit' , 'Mohan']

// console.log(myFriends.indexOf("Rohit" , 2))
// includes() determines whether the element is present in array or not with output as true or false


// find() gives the value of condition satisfied and findindex() gives value of index of the condition

// Arrow function
// const hello = () => "Hello World!";
// console.log(hello()); // This will output "Hello World!" to the console




// const prices = [200,300,400,500,600,700]

// const findElem = prices.find((currVal) => currVal < 400);
// console.log(findElem);

// filter() returns all the req  elements in a new  array
// const prices = [200, 300, 400, 500, 600, 700];

// const newPrice = prices.filter((elem, index) => {
//     return elem < 400;
// });

// console.log(newPrice);


// sort() sorts in ascending order and works for string only perfectly

// const month = ['March' , 'January' , 'February' , 'October' , 'November']
// console.log(month.sort());


//push() to add element in Array/

// const animals = ['cow' , 'sheep' , 'Bull' , 'Pig']

// const count =  animals.push('chicken');
// console.log(animals)
// console.log(count);

// unshift() adds data in start of the Array

// pop removes last element from Array
// const fruits = ['Mango' , 'Apple' , 'Banana' , 'Cherry']
// console.log(fruits)
// console.log(fruits.pop());
// console.log(fruits);

// shift() pops the first element from Array




// splice() is used to add or remove elements from Array
// const months = ['Jan' , 'Feb' , 'March', 'April']

// const newMonths = months.splice(months.length , 0 , "May");
// console.log(months);


// change march to may


// const months = ['Jan' , 'Feb' , 'March', 'April']

// const indexofMonth = months.indexOf('March');

// if( indexofMonth != -1){
//     const updateMonth = months.splice(indexofMonth , 1, 'May')
//     console.log(months)

// }else{
//     console.log("No such data found");
// }


// // delete april

// const indexofMonth2 = months.indexOf("April")

// if(indexofMonth2 != -1){
//     const updateMonth2 = months.splice(indexofMonth2 , 1)
//     console.log(months) 
//     console.log(updateMonth2)
// }else{
//     console.log("No such data found")
// }

// // if we add infinity after 1 in  const updateMonth2 = months.splice(indexofMonth2 , 1)
// // console.log(months) it will delete all the data of array after april


// Map() works like filter but generates output in true false for a condition

// const array1 = [1 , 4 , 7 , 8 , 10]

// num>8

// let newArr = array1.map((currElem , index , arr) =>{
//     return currElem > 8 ;


// })
// console.log(array1);
// console.log(newArr); 


// It returns new array without mutating the orignal array

// let newArr = array1.map((currElem , index , arr) =>{
//     return `Index of ${index} and  the value of ${currElem} belong to ${arr} `
// })
// console.log(newArr)



// square root of a array
// let arr = [25, 36 , 49 , 64 , 81]

// let arrsqr = arr.map((currElem) => {
//     return Math.sqrt(currElem);
// })
// console.log(arrsqr);

// chaining method

// let arr = [2 , 3 , 4 , 6 , 8]

// let arr2 = arr.map( (currElem ) =>{
//     return currElem * 2
// }).filter((currElem) =>{
//     return currElem > 10
// } )
// console.log(arr2)

// sum of Array

// let arr = [2,5,6]
// let sum = arr.reduce((accumulator , currElem,index , arr) =>{
//     return accumulator += currElem;
// }
// )
// console.log(sum);


// mumltiplication of Array
// let arr = [2,5,6]
// let sum = arr.reduce((accumulator , currElem,index , arr) =>{
//     return accumulator *= currElem;
//  },7 //if we have to add a sting in Array
// )
// console.log(sum);

// reduce method is also used to reduce 2d and 3d array to 1d array


// const arr = [
//     ['zone_1' , 'zone_2'],
//     ['zone_3' , 'zone_4'],
//     ['zone_5 , zone_6']
// ]
// let flatarr = arr.reduce((accum , currVal) =>{
//     return accum.concat(currVal);
// }
// )
// console.log(flatarr);




// strings

// let Game = "Pubg Mobile"
// console.log(Game.length);

// Escape character
// use \ in beggining and end of the special String

// let sentence = "We are so called \"Vikings\" from the north "
// console.log(sentence);




// The slice() methods selects the elements starting at the  given start argument, and ends at but does not include the given end argument

// var str = "Apple , Banana , Kiwi "
// // let res = str.slice(0,4)
//  let res = str.slice(7, -2)
// console.log(res);



// Display only 280 characters of string like used in twitter


// let myTweets = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, iusto. Optio, deleniti. Beatae mollitia sed optio officia consequatur ducimus repellendus consequuntur omnis nulla dolores minima officiis sequi illo a, esse odit, quae incidunt sunt exercitationem aspernatur error? Voluptatum in a tenetur id animi, esse error doloremque assumenda consequuntur vero mollitia."

// let actualTweet = myTweets.slice(0,280);
// console.log(actualTweet);


// substring() is similar to slice() but the diff is it cannot accept negative index
// If we give negitive valuce like we gave in slice it gives the characters that are counted from 0th index position 



// substr() is similar to slice() but diffrence is that the second parameter specifies length of extracted part
// It can be used to extract data from backside

// var str = "Apple , Banana , Kiwi "
// let res = str.substr(-5)
// //  let res = str.slice(7, -2)
// console.log(res);


// replace() is used to replace the first data found in string. For eg the string has two rohit,then the replace func will replace 1st rohit
// It gives new string insted of changing the orignal string

// let myBiodata = "I am rohit sharma rohit"
// let replaceData = myBiodata.replace('rohit' , 'Rohit')
// console.log(replaceData);



// charAt() returns the character at specified index (position) in a  string 

// let str = "HELLO WORLD"

// console.log(str.charAt(9));


// The charCodeAt() method reeturns the unicode of character at specified index in a string 

// let str = "HELLO WORLD"

// console.log(str.charCodeAt(0));




// unicode for last letter

// let str = "HELLO WORLD"
// let laststr = str.length -1;

// console.log(str.charCodeAt(laststr));


// Property Access []


// let str = "HELLO WORLD"

// console.log(str[1]);




// convert to upper case and lower case 
// let myName = 'Eren JAeger'
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


// concat() is used to join 2 or more strings 
// trim() method removes space from both sides of string.However it dosent remove space between string


//  split() is used to covert string to array 

var txt = 'a,b,c| d,e'
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("| "));