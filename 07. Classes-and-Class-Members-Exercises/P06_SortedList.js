class SortedList{
    constructor() {
        this.values = [];
        this.size = 0;
    }
        
    add(value){
        this.values.push(value);
        this.size++;
        this.sort();
    }
    remove(index){
        if(index >= 0 && index < this.values.length){
            this.values.splice(index, 1);
            this.size--;
            this.sort();
        }
    }
    get(index){
        if(index >= 0 && index < this.values.length){
            return this.values[index];
        }
    }
    sort(){
        this.values.sort((a, b) => a-b);
    }
}

let classut = new SortedList();
classut.add(3);
classut.add(5);
classut.add(4);
classut.add(1);
classut.add(2);
console.log(classut);
classut.remove(2);
console.log(classut);


