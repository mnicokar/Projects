class Car{
    constructor(_make,_model,_color, _year){
        this.make = _make;
        this.model = _model;
        this.color = _color;
        this.year = _year;
    }

    
    getMake(){
        return this.make;
    }

    getModel(){
        return this.model;
    }

    getColor(){
        return this.color;
    }

    getMake(){
        return this.make;
    }

    getYear(){
        return this.year;
    }
    getAge() {
        let date = new Date();
        return date.getFullYear() - this.year;
      }

}

let myCar = new Car("Chevrolet", "Equinox", "Midnight Blue", 2020);
document.getElementById("demo").innerHTML = "I own a " + myCar.getColor() + " " + myCar.getMake() + " " + myCar.getModel() + " made in " + myCar.getYear();

const a = document.createElement('div');
a.innerHTML = `My car is ${myCar.getAge()} years old`;
document.body.appendChild(a);