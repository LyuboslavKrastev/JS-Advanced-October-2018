function solve(){
    let first = 0;
    let second = 1;
    return function GetNextFibonacciNumber(){
        let next = first + second;
        first = second;
        second = next;
        return first;
    }
}

