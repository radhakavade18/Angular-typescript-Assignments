function chk_Prime(no: number) : boolean {
    var isPrime : boolean = true;
    var i : number = 0;
    if(no === 1){
        console.log("1 is neigther prime nor composite");
    } else if(no > 1) {
        for(i = 2; i < no; i++){
            if(no % i == 0){
                isPrime = false;
            }
        }
    }
    return isPrime;
}

var chkPrime : boolean = false;
chkPrime = chk_Prime(11);
if(chkPrime) {
    console.log("number is prime");
} else {
    console.log("Number is not prime");
}