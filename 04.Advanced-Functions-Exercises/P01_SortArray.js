function sortArray(array, order){
    if(order === 'asc'){
        return array.sort((a, b) => {return a - b});
    } else if(order === 'desc') {
        return array.sort((a, b) => {return b - a});
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
