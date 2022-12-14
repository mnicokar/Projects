//Object.prototype
//Person.prototype

//Person Constructor
function Person(firstName,lastName){
    this.firstName= firstName;
    this.lastName = lastName;
    //this.age = age;
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}


//greeting
Person.prototype.greeting = function(){
    return `hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

//customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person Prototype Methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;


//create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555','standard');

console.log(customer1);

Customer.prototype.greeting= function (){
    return `hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());