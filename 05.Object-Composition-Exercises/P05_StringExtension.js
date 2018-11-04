(() => {
    String.prototype.ensureStart = function(str) {
        let currentString = this.valueOf();
        if(currentString.indexOf(str) === 0){
            return currentString;
        } else{
            return str + currentString;
        }
    }

    String.prototype.ensureEnd = function(str) {
        let currentString = this.valueOf();
        if(currentString.indexOf(str) === currentString.length - str.length){
            return currentString;
        } else{
            return currentString + str;
        }
    }

    String.prototype.isEmpty = function(str) {
        let currentString = this.valueOf();
        return currentString === '';
    }

    
    String.format = function(str) {
        let params = Array.from(arguments);
        let currentString = params.shift();

        for (let i = 0; i < params.length; i++) {
            const element = params[i];
            currentString = currentString.replace(`{${i}}`, element);         
        }

        return currentString;
    }

    String.prototype.truncate = function(n) {
        let currentString = this.valueOf();

        //If a string is less than n characters long, return the same string.
        if(currentString.length < n){
            return currentString;
        }
        // If n is less than 4, return n amount of periods.
        if(n < 4){
            return '.'.repeat(n);
        }

        /*If it is longer than n, split the string where
         a space occurs and append an ellipsis to it so that the total length 
         is less than or equal to n. */
        while(currentString.length > n) {
            let lastSpaceIndex = currentString.lastIndexOf(' ');
            //If no space occurs anywhere in the string, return n – 3 characters and an ellipsis. 
            if(lastSpaceIndex === -1){
                return currentString.substr(0, n-3) + '...';
            }
            currentString = currentString.substring(0, lastSpaceIndex) + '...';

        }
       
        return currentString;
    }
})();

let str = String.format('The {0} {1} fox',
  'quick', 'brown');

  str = String.format('jumps {0} {1}',
  'dog');
