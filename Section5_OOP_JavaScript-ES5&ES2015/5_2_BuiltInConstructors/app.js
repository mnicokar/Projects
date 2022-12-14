//string
const name1 = 'Jeff';
const name2 = new String('Jeff'); //this makes it an object, this slows things down so no reason to do it this way. Just mentioned to show us it is possible. 

//console.log(name1);

console.log(typeof(name2));


if (name2==='Jeff'){
    console.log('YES');
}else{
    console.log('NO');
}


const num1 = 5;
const num2 = new Number(5); //this makes it an object

const bool1 = true;
const bool2 = new Boolean(true);//this makes it an object

//functions
const getSum1 = function(x,y){
    return x + y;
}

const getSum2 = new Function ('x','y','return 1 + 1');

console.log(getSum2(5,3));

//object
const john1 = {name: "john"};
const john2 = new Object ({name:"John"})

//Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);


//regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');


console.log(re1);