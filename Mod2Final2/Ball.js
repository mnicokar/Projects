class Ball{

    constructor(x,y,radius){
        this.setterFunction = this.setterFunction.bind(this);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }


    get x() {
        return this.x;
      }

    set x(value) {
        this.x = value;
      }
      
    get y() {
        return this.y;
    }

    set y(value) {
        this.y = value;
      }
    
    get radius() {
        return this.radius;
    }

    set radius(value) {
        this.radius = value;
      }


}