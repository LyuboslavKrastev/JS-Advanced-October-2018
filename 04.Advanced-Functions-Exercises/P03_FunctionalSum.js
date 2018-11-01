let solve = (function (){
    let sum = 0;

    function add(value){
        sum += value;        
        
        return add;
    };

    add.toString = function(){
        return sum;
    };

    return add;
})();

console.log(solve(1)(2));