function solution(){
    let supplies = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let commandProcessor = function (input) {
        function restock(supply, quantity){
            if(supplies.hasOwnProperty(supply)){
                supplies[supply] += +quantity;
                return 'Success';
            }
        }

        function prepare(recipe, quantity) {
            recipe = recipe.toLowerCase();
            if(recipe.toLowerCase() === 'apple') {
                let requiredCarbs = quantity;
                let requiredFlavor = 2 * quantity;

                if(supplies.carbohydrate < requiredCarbs) {
                    return 'Error: not enough carbohydrate in stock';
                } 
                if(supplies.flavor < requiredFlavor) {
                    return 'Error: not enough flavor in stock';
                }

                supplies.carbohydrate -= requiredCarbs;
                supplies.flavour -= requiredFlavor;
            } else if(recipe === 'coke') {
                let requiredCarbs = 10 * quantity;
                let requiredFlavor = 20 * quantity;

                if(supplies.carbohydrate < requiredCarbs) {
                    return 'Error: not enough carbohydrate in stock';
                } 
                if(supplies.flavor < requiredFlavor) {
                    return 'Error: not enough flavor in stock';
                }
                supplies.carbohydrate -= requiredCarbs;
                supplies.flavour -= requiredFlavor;
            } else if(recipe === 'burger') {
                let requiredCarbs = 5 * quantity;
                let requiredFat = 7 * quantity;
                let requiredFlavor = 3 * quantity;

                if(supplies.carbohydrate < requiredCarbs) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if(supplies.fat < requiredFat) {
                    return 'Error: not enough fat in stock';
                }
                if(supplies.flavour < requiredFlavor) {
                    return 'Error: not enough flavour in stock';
                }
                supplies.carbohydrate -= requiredCarbs;
                supplies.fat -= requiredFat;
                supplies.flavour -= requiredFlavor;
            } else if(recipe == 'omelet') {
                let requiredProt = 5 * quantity;
                let requiredFat = quantity;
                let requiredFlavour = quantity;

                if(supplies.protein < requiredProt) {
                    return 'Error: not enough protein in stock';
                }
                if(supplies.fat < requiredFat) {
                    return 'Error: not enough fat in stock';
                }
                if(supplies.flavour < requiredFlavour) {
                    return 'Error: not enough flavour in stock';
                }
                supplies.protein -= requiredProt;
                supplies.fat -= requiredFat;
                supplies.flavour -= requiredFlavour;
            } else if (recipe === 'cheverme'){
                let requiredProt = 10 * quantity;
                let requiredCarbs = 10 * quantity;
                let requiredFat = 10 * quantity;
                let requiredFlavour = 10 * quantity;

                if(supplies.protein < requiredProt) {
                    return 'Error: not enough protein in stock';
                }
                if(supplies.carbohydrate < requiredCarbs) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if(supplies.fat < requiredFat) {
                    return 'Error: not enough fat in stock';
                }
                if(supplies.flavour < requiredFlavour) {
                    return 'Error: not enough flavour in stock';
                }
                supplies.carbohydrate -= requiredCarbs;
                supplies.protein -= requiredProt;
                supplies.fat -= requiredFat;
                supplies.flavour -= requiredFlavour;
            }
            
            return 'Success';
        }

        function report(){
            let result = `protein=${supplies.protein} carbohydrate=${supplies.carbohydrate} fat=${supplies.fat} flavour=${supplies.flavour}`;
            return result;
        }

        if(input === 'report') {
            return report();
        } else {
            let [command, product, quantity] = input.split(' ');
    
            if(command === 'restock'){
                return restock(product, quantity);
            } else if(command === 'prepare'){
                return prepare(product, quantity);
            }
        }
    };
    return commandProcessor;
};

let manager = solution();
console.log(manager('restock protein 100')); 
console.log(manager('restock carbohydrate 100'));    
console.log(manager('restock fat 100')); 
console.log(manager('restock flavour 100')); 
console.log(manager('report')); 
console.log(manager('prepare omelet 2')); 
console.log(manager('report')); 

