class Circle {
    Radious : number;
    PI : number;

    constructor(R : number, PI : number = 3.14){
        this.Radious = R;
        this.PI = PI;
    }

    Area() :number {
        return this.Radious * this.Radious * this.PI;
    }
}

var obj_c = new Circle(10.7);
var obj_c1 = new Circle(12,12.3);

var Ret : number = 0;
Ret = obj_c.Area();
console.log("Area of circle is " +Ret);

Ret = obj_c1.Area();
console.log("Area of circle is " +Ret);
