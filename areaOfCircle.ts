function FindAOC(Radius : number, PI: number = 3.14) : number {
    var Area : number = 0;

    Area = PI * Radius * Radius;

    return Area;
}

var AOC : number = 0;
AOC = FindAOC(5);
console.log("Area of circle is :", AOC);
