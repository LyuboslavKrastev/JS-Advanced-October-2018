function solve(arr){
    let commandProcessor = (function (){
        let result = '';
        return {
            'append': (item) => {result += item},
            'removeStart': (n) => {result = result.substring(n)},
            'removeEnd': (n) => {result = result.substring(0, result.length - n)},
            'print': () => {console.log(result)}
        }
    }());


    for (const commandInput of arr) {
        let [command, element] = commandInput.split(' ');
        commandProcessor[command](element);
    }
}

solve(['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print']
);