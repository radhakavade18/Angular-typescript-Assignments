function findMax(arr: number[]): number{
    var i : number = 0;
    var Max : number = 0;
    for(i = 0; i< arr.length; i++){
        if(arr[i] > Max){
            Max = arr[i];
        } else if(Max > arr[i]){
            Max = Max
        }
    }
    return Max;
}

var arr :number[] = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = findMax(arr);
console.log("Maximum number is", Ret);
