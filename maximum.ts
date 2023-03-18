function Maximum(A : number, B : number, C: number): number{
    if(A > B && A > C){
        return A;
    } else if(B > A && B > C){
        return B;
    } else{
        return C;
    }
}

var Ret : number = 0;
Ret = Maximum(23, 89, 6);

console.log("Maximum number is", Ret);
