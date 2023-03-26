
class Arithmatic{
    Number1 : number;
    Number2: number;

    constructor(A: number, B: number){
        this.Number1 = A;
        this.Number2 = B;
    }

    Add() : number {
        return this.Number1 + this.Number2;
    }

    Sub() : number {
        return this.Number1 - this.Number2;
    }

    Multi() : number {
        return this.Number1 * this.Number2;
    }

    Div() : number {
        return this.Number1 / this.Number2;
    }
}

var obj1 = new Arithmatic(20, 11);
var obj2 = new Arithmatic(30, 14);
var Ret : number = 0;

Ret = obj1.Add();
console.log("Addition is " + Ret);

Ret = obj1.Sub();
console.log("Substraction is " + Ret);

Ret = obj1.Multi();
console.log("Multiplication is " + Ret);

Ret = obj1.Div();
console.log("Division is " + Ret);

Ret = obj2.Add();
console.log("Addition is " + Ret);

Ret = obj2.Sub();
console.log("Substraction is " + Ret);

Ret = obj2.Multi();
console.log("Multiplication is " + Ret);

Ret = obj2.Div();
console.log("Division is " + Ret);
