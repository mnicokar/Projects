class Person{
    constructor(firstName,lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    //static is standalone method, you don't need to instantiate anything
    static addNumbers(x,y){
        return x+y;
    }
}

class Customer extends Person{
    constructor(firstName,lastName, phone, membership){
        super(firstName,lastName);

        this.phone = phone;
        this.membership = membership;

    }

    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555');

console.log(john.greeting());


console.log(Customer.getMembershipCost());