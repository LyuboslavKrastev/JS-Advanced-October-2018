function getMaxElement(arr){
    let maxElement = -Infinity;

    for (const num of arr) {
        if(maxElement < num){
            maxElement = num;
        }
    }

    return maxElement;
}

console.log(getMaxElement([1, 44, 123, 33]));