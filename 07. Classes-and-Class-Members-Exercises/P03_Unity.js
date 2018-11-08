class Rat{
    constructor(name){
        this.name = name;
        this.ratParty = [];
    }

    unite(otherRat) {
        if(otherRat instanceof Rat){
            this.ratParty.push(otherRat); 
        }
    }
    getRats(){
        return this.ratParty;
    }
    toString(){
        let result = this.name + '\n';
        for (const rat of this.ratParty) {
            result += `## ${rat.name}` + '\n';
        }
        return result.trim();
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
