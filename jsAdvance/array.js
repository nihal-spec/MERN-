// const fn = function (params){
//     console.log("hi");

// }

// const values = [2,4,5];
// values.forEach (function (params) {
    // console.log("hi");
// })

//arrow function
// const fn1 =  (params) =>{
//     console.log("hi");
// }

// console.log(fn1())



// const a = a => console.log(a);

// const b = () => [2,4,5];
// console.log(b);





//object
// const obj ={
//     name : "nihal",
//     age : 20
// }

// console.log(obj);
// console.log(obj.name);



//foreach
// const arr = [{name : 'nihal'},{name : 'akhi'}];

// arr.forEach((item) => {
//     console.log(item.name);
// })

// arr.forEach((item,index) => {
    // })



// sum by foreach method
// const num = [1,2,3];
// let sum = 0;
// num.forEach((n) => {
//     sum = sum+n;
// })

// console.log(sum);



// find 
// const arr =[
//     {name : 'muhammed'},
//     {name : 'akhi'},
//     {name : 'muhammed'}
// ];


// var found = arr.find((item) => {
//     return item.name === 'muhammed';
// })

// console.log(found);

//filter (creates new array)

// var found = arr.filter((item) => {
//     return item.name === 'muhammed nihal';

// });
// console.log(found);




//map  (creates new modified array)
// const arr =[
//     {name : 'muhammed'},
//     {name : 'akhi'},
//     {name : 'nihal'}
// ];

// var map1 = arr.map((item) => {
//     return item.name +1;
// });

// console.log(map1);




// const arr = [2,3,4,5];
// var map1 = arr.map((item) => {
//     return item*2;
// })

// console.log(map1);
// console.log(arr);







////   reduce (returns a single value)  /////
// const numbers = [1,2,3];
// const sum = numbers.reduce((acc,curr) => {
//     return acc+curr
// },0);

// console.log(sum);







/////////////          callback           //////////////////////////////////////////////////////////////////////////////////////////

// function greet(name, callback){
//     console.log('hi' + name);
//     callback();
// }

// function processGreetings(){
//     console.log('This is a callback function');
// }

// greet('nihal', processGreetings);


/*
function number(num1, num2, callback){
    callback(num1, num2);
}

function sum(num1, num2){
    console.log(num1 + num2);
}

number(10, 20, sum);
*/


////////////////////////////////////             callback                 ///////////////////////////////////////////////////////////////////
// function array(arr, callback){
//     callback(arr);

// }

// function double(arr){
//     arr.forEach((items) => {
//         items *= 2;
//         console.log(items)
//     })
// }


// const arr = [1,2,3,4,5];
// array(arr, double);











/////////////////////////////////////           synchronous function                //////////////////////////////////////////////////////////////

// function add(a,b){
//     return a+b;
// }

// console.log('starting');

// let result = add(10, 20);
// console.log(`Result is ${result}`);
// console.log('ending');



/////////////////////////////////////          Asynchronous function             ////////////////////////////////////////////////////////////////


/* ////////////////////////////
function fetchData(callback){
    setTimeout(() => {
        const data = {
            message: 'data fetched',
        };
        callback(data);
    },2000)
}

function handleData(result){
    console.log(result.message);
}

console.log('starting');
fetchData(handleData);
console.log('ending');
*/ //////////////////////////


function firstTask(callback){
    setTimeout(() => {
        console.log('step 1');
        callback();
    },1000)
}

function secondTask(callback){
    setTimeout(() => {
        console.log('step 2');
    },2000)
    callback();
}

function thirdTask(callback){
    setTimeout(() => {
        console.log('step 3');

    },1000)
};

firstTask(() => {
    secondTask(() => {
        thirdTask()
    })
})

