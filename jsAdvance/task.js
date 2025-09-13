// 1. Given an array of colors ["red", "green", "blue", "yellow"], use  forEach() to print each color.

// let color = ['red', 'green', 'blue', 'yellow'];
// let list = color.forEach((item) => {
//     console.log(item);
// })





//  2. Write a program using forEach() that prints:
// Index: 0 → red  
// Index: 1 → green  
// Index: 2 → blue  
// Index: 3 → yellow

// let color = ["red", "green", "blue", "yellow"];
// let list = color.forEach((item,index) => {
//     console.log("index: -> " + index,item);
// })





//  3. Use forEach() to find the sum of [5, 10, 15, 20, 25].

// let arr = [5, 10, 15, 20, 25];
// let sum = 0;
// arr.forEach((items) => {
//     sum = sum + items;
// });
// console.log(sum);





//   4. You have an array of objects:
// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 50 },
//   { name: "Bag", price: 200 }
// ];
// Use forEach() to add a new property discountPrice (10% off).

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 50 },
//   { name: "Bag", price: 200 }
// ];

// products.forEach((items) => {
//     items.discount = items.price*0.1;

// })

// console.log(products);






//   5. Use forEach() to find the maximum number from [12, 7, 45, 23, 67, 34].

// let num = [12, 7, 45, 23, 67, 34];
// let a = num[0];

// num.forEach((items) => {
//     if(a<items){
//         a = items
//     }
// });

// console.log("Largest number is ",a);




//  filter tasks

//  1. Given an array [1, 2, 3, 4, 5, 6, 7, 8], use filter() to create a new array containing only even numbers.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = arr.filter((items) => {
//         return items%2 == 0;
    
// });
// console.log(even);





//   2. Filter Passed Students
// You have student marks: [35, 60, 75, 28, 90].
// Use filter() to get only the students who scored 40 or above.


// let marks = [35, 60, 75, 28, 90];
// let topMark = marks.filter((items => {
//     return items >= 40;
// }));
// console.log(topMark);





//   3. Filter Objects by Property
// Given:
// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 60 },
//   { name: "Bag", price: 200 }
// ];
// Use filter() to get only the products that cost less than 100.

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 60 },
//   { name: "Bag", price: 200 }
// ];
// let lowProducts = products.filter((items) => {
//     return items.price < 100;
// })
// console.log(lowProducts);





//    4. Given an array of strings ["apple", "kiwi", "banana", "grape"],
// use filter() to return only the words that have more than 4 letters.

// let arr = ["apple", "kiwi", "banana", "grape"];
// let four = arr.filter((items) => {
//     return items.length>4;
// });
// console.log(four);





//    5. From [10, 20, 30, 40, 50, 60], use filter() to return numbers greater than 30.

// let arr = [10, 20, 30, 40, 50, 60];
// let greater = arr.filter((items) => {
//     return items > 30;
// });
// console.log(greater);




//   1. From [3, 7, 8, 11, 14, 21], use find() to get the first even number.

// let arr = [3, 7, 8, 11, 14, 21];
// let even = arr.find((item) => {
//     return item%2 == 0;
// });
// console.log(even);




//   2. Given marks [45, 28, 60, 33, 75], use find() to return the first student who scored below 40.

// let arr = [45, 28, 60, 33, 75];
// let lowestMark = arr.find((items) => {
//     return items < 40;
// });
// console.log(lowestMark);




//   3. const products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 60 },
//   { name: "Bag", price: 200 }
// ];
// Use find() to get the first product that costs more than 50.

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 60 },
//   { name: "Bag", price: 200 }
// ];
// products.find((items) => {
//     if(items.price>50){
//         console.log(items.name);
//         return 1;
//     }
// });




//  4. Given ["apple", "banana", "grape", "blueberry"],
// use find() to return the first word that starts with "b".

// let arr = ["apple", "banana", "grape", "blueberry"];
// let b = arr.find((item) => {
//     return item.charAt(0) == 'b';
// })
// console.log(b);



//  5. From [20, 50, 90, 120, 150], use find() to get the first number greater than 100.

// let arr = [20, 50, 90, 120, 150];
// let great = arr.find((items => {
//     return items > 100;
// }));
// console.log(great);






//             map

//  1. From ["apple", "banana", "grape"], use map() to create a new array with all words in uppercase.

// let fruits = ["apple", "banana", "grape"];
// let upperFruits = fruits.map((items) => {
//     return items.toUpperCase();
// });
// console.log(fruits)
// console.log(upperFruits);




//  2. Given [2, 3, 4, 5], use map() to return a new array of squares → [4, 9, 16, 25].

// let num = [2, 3, 4, 5];
// let square = num.map((items) => {
//     return items*items;
// });
// console.log(num);
// console.log(square);



//  3. From ["cat", "dog", "cow"], use map() to create ["CAT", "DOG", "COW"].

// let animals = ["cat", "dog", "cow"];
// let upperAnimals = animals.map((items) => {
//     return items.toUpperCase();
// });
// console.log(animals);
// console.log(upperAnimals);



//  4. From ["hi", "hello", "hey"], use map() to create [2, 5, 3].

// let arr = ["hi", "hello", "hey"];
// let len = arr.map((items) => {
//     return items.length;
// });
// console.log(arr);
// console.log(len);



//  5. Multiply by Index
//    const nums = [5, 10, 15];
//    Use map() to return [0, 10, 30]

// const nums = [5, 10, 15];
// let arr = nums.map((items, index) => {
//     return items*index;
// });
// console.log(arr);



//            reduce

//  1. Find Average

// let num = [10,20,30];
// let avg = num.reduce((acc,curr) => {
//     return acc + curr

// },0)/num.length;
// console.log(avg);



// 2. Group the elements as even and odd

// const num = [1,2,3,4,5,6];
// let group = num.reduce((acc, curr) => {
//     ( curr % 2 === 0 ? acc.even : acc.odd).push(curr)
//     return acc;

// }, {odd: [], even: []});
// console.log(group)



//  3. const input = [1, -4, 12, 0, -3, 29, -150];
//    return the sum of all positive elements

// const input = [1, -4, 12, 0, -3, 29, -150];
// let positiveSum = input.reduce((acc,curr) => {
//     curr > 0 ? acc = acc + curr : acc

//     return acc;
// }, 0);

// console.log(positiveSum);




//  4. Remove duplicate values from an array using the reduce function
//    [1, 2, 3, 2, 4, 5, 3]

// const arr = [1, 2, 3, 2, 4, 5, 3];
// let original = arr.reduce((acc, curr) => {
    
// })





// var obj1={
//     a: 1,
//     b: 2,
//     c: 3,
// };

// console.log(obj1);

// var obj2 = obj1;
// console.log(obj2 === obj1);

// var obj3 = {
//     ...obj1
// }
// console.log(obj3 === obj1);


// var a = {
//     a: 3,
//     b: 4,
//     c: 'hii',
// }

// var b = {
//     a1: 5,
//     b1: 6,
//     c: 'hi',
// }

// var c ={
//     ...a,
//     ...b,
//     z: 32,
// }

// console.log(c);

// var array1 = [1,2,3,4];
// var array2 = [3,4,5,6];

// var array3 = [
//     ...array1,
//     ...array2
// ]

// console.log(array3);




// var ob1 ={
//     a: 3,
//     b: 5,
// }
// // var ob2 = ob1;
// var ob2 = {
//     ...ob1
// }

// ob2.c=33;
// console.log(ob1,ob2);




// shalow copy
// var ob1 ={
//     a: 3,
//     b: 5,
//     c: {
//         name: 'ann',
//         age: 22
//     }
// }

// var ob2 ={
//     ...ob1
// }

// ob1.c.name = 'john';
// console.log(ob1,ob2);






//                        destructure

// const obj ={
//     name: 'Ann',
//     course: 'MERN',
//     place: 'KOZHIKKODE'
// };

// function myFun(){
    // const nam = obj.name;
    // const course = obj.course;
    // const place = obj.place;

    // const {name,course,place} = obj;

    // const {name,...remain} = obj;

    // console.log(nam,course,place);

    // console.log(name,remain);
// }

// myFun();




/////////        array  destructure

// const array1 = [1,2,3,4];

// function array(){
//     const {a,...remain} = array1;
//     console.log(a,remain);
// }

// array();



//////////          rest operator

// function array(...rest){
//     console.log(...rest);
//     // let sum = 0;
//     // for(i=0; i<rest.length; i++){
//     //     sum = sum + rest[i];
//     // }



//     let calculate = rest.reduce((acc, curr) => {
//         return acc+curr
//     })

//     console.log(calculate)
// }

// // array(1,2,3,4,5,6,7) // rest


// var arr =[1,2,3,4,5];  //  spread
// array(...arr);







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////           callback                   ///////////////////////////////////////////////////////////////////


 ///////////  1. Print each element of an array with a delay of 1 second per element:

//         1   (after 1s)
//          2   (after 2s)
//          3   (after 3s)

//   const arr = [1, 2, 3];

//   arr.forEach((item, index) => {
//     setTimeout(() => {
//       console.log(item);
//     }, (index + 1) * 1000); // index 0 → 1s, index 1 → 2s, index 2 → 3s
//   });




//// 2. Check a number after 1 second and then call one of two functions depending on whether it’s even or odd


// function number(num){
//     setTimeout(() => {
//         num%2 === 0 ? even(num) : odd(num);
//     },1000)
// }

// function even(num){
//     console.log(`${num} is even`);
// }

// function odd(num){
//     console.log(`${num} is odd`);
// }

// number(9);


////// 3. Create a function that performs math operations (add,sub,multiply,div) asynchronously:
//    Delay each operation by 2 seconds
//    Pass the operation as a callback

function number(num1, num2, operation){
    setTimeout(() => {
        operation(num1,num2)
    },2000)
}

function operation(num1, num2){
    console.log(num1+num2);
    console.log(num1-num2);
    console.log(num1*num2);
    console.log(num1/num2);
}

number(1,2,operation)