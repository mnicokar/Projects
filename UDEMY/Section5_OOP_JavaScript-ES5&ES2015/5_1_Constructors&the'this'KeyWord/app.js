function Person(name,dob){
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

/*
const brad = new Person('Brad',36);
const john = new Person('John',30);

console.log(brad.age);
*/


const brad = new Person('Brad', '05-03-1999');
console.log(brad.calculateAge());