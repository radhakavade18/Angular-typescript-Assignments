function fibonachiSeries (no : number) : void{
    var n1 : number = 1;
    var n2 : number = 1;
    var nextValue : number;
    var i : number = 0;

    for(i = 1; i<= no; i++){
        console.log(n1);
        nextValue = n1 + n2;
        n1 = n2;
        n2 = nextValue;
    }
}

fibonachiSeries(10);