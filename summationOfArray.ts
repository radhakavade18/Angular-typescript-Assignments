function Summation (arr: number[]): number{
    var sum : number = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}

var Ret : number = 0;
var arr: number [] = [23, 6, 7, 4, 5, 7]
Ret = Summation(arr);
console.log("Summation of arrya elements is :", Ret);
