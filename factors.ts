function FindFactors(No : number): void {
    var count : number = 0;


    for(count = 1; count <= No/2; count++){
        if(No % count == 0){
            console.log(count);
        }
    }
}

FindFactors(20);