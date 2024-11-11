
// divisible 

function threeOrFive(max){
    for(let i = 0; i<max; i+=3){
        if(i+=3 % max === 0 && i +  5 % max === 0) {
            return false;
        }
        console.log(i);
    }
}