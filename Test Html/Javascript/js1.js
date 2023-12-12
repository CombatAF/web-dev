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


var myFriends = ['Mohit' , 'Rohit', 'Suresh' , 'Ramesh']

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

myFriends.forEach(function(element , index , array)
{
    console.log(element + " index: " + index + " " + array);

})