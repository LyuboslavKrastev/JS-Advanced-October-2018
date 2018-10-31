function solve(input) {
    let commandProcessor = (function() {
        let result = {};
        function create(arr){
            let carName = arr[0];
            if (arr.length > 2){
                let parentName = arr[2];
                result[carName] = Object.create(result[parentName]);
            } else {
                result[carName] = {};
            }
        }

        function set(arr) {
            let carName = arr[0];
            let key = arr[1];
            let value = arr[2];
            result[carName][key] = value;    
        }

        function print(arr){
            let output = [];
            let carName = arr[0];
            for (const key in result[carName]) {
                output.push(key + ':' + result[carName][key]);
            }

            console.log(output.join(', '));
        }

        return {create, set, print};
    })();

    for (const element of input) {
        let tokens = element.split(' ');
        let command = tokens.shift();

        commandProcessor[command](tokens);
    }
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);