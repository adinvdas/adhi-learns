function SumArrays(numbers){
    let total = 0;
    
    for(let i=0; i< numbers.length; i++){
        
        total += numbers[i];
    }
    return total;
}
console.log(SumArrays([2,3,4,5,6]));