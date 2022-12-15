
class Vehicle{
    constructor(_registrationNum,_color, _year,_numWheels){
        this.registrationNum = _registrationNum;
        this.color = _color;
        this.year = _year;
    }
    
    getColor(){
        return this.color;
    }

    getYear(){
        return this.year;
    }
    getAge() {
        let date = new Date();
        return date.getFullYear() - this.year;
      }
        
    getMake(){
        return this.make;
    }

    getModel(){
        return this.model;
    }

    getMake(){
        return this.make;
    }

    getRegistrationNum(){
        return this.registrationNum;
    }

}

class Car extends Vehicle{
    constructor(_make,_model,_color, _year,_registrationNum){
        super(_registrationNum,_color,_year,4)
        this.make = _make;
        this.model = _model;
        
    }


}

class Motorcycle extends Vehicle{
    constructor(_registrationNum,_color, _year,_make,_model){
        super(_registrationNum,_color,_year,2)
        this.make = _make;
        this.model = _model;
    }


}

let myCar = new Car("Chevrolet", "Equinox", "Midnight Blue", 2020,1234);
document.getElementById("demo").innerHTML = "I own a " + myCar.getColor() + " " + myCar.getMake() + " " + myCar.getModel() + " made in " + myCar.getYear();

const a = document.createElement('div');
a.innerHTML = `My car is ${myCar.getAge()} years old. The Registration number is ${myCar.getRegistrationNum()}`;
document.body.appendChild(a);


let myMotorcycle = new Motorcycle(4321, "black", 2005, "Yamaha", "R6");
const b = document.createElement('div');
b.innerHTML = `My motorcycle is a ${myMotorcycle.getYear()} ${myMotorcycle.getMake()} ${myMotorcycle.getModel()}`;
document.body.appendChild(b);