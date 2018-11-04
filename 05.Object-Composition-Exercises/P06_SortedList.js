function getSortedList(){

    let sortedList = {
        values: [],
        size: 0,
        add: function (element){
            this.values.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if(index >= 0 && index < this.values.length){
                this.values.splice(index, 1);
                this.size--;
            }
        },
        get: function(index) {
            if(index >= 0 && index < this.values.length){
                return this.values[index];
            }
        },
        sort: function (){
            this.values.sort((a, b) => a-b);
        }
    }

    return sortedList;
}