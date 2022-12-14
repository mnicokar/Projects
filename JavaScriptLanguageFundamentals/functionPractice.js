
function greet(firstName  = 'John'){
    //if (typeof firstName === 'undefined'){firstName = 'John'};

    //console.log("Hello");
    return "Hello " +firstName;
}

console.log(greet("John"));



//Function Expression
const square = function(x=3){
    return x*x;
};

console.log(square(8));

//Immediately Invocable Function Expressions - IIFE
// You declare and run at the same time

(function(name){
    console.log("Hello " + name );
})("Brad");

//property methods

const todo = {
    add: function(){
        console.log("Add todo..");
    }
}

todo.delete = function(){
    console.log("delete todo...");
}

todo.add();