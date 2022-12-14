//Object.prototype
//Person.prototype

//Person Constructor
function Person(firstName,lastName,dob){
    this.firstName= firstName;
    this.lastName = lastName;
    //this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


//get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried("Smith")

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));// has it's own property so it's true
console.log(mary.hasOwnProperty('getFullName'));// Not it's own property so it's false. It's in the prototype