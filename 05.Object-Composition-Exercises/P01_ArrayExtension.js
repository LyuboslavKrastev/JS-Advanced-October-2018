(() => {
    Array.prototype.last = function () {
        const currentArr = this.valueOf();

        return currentArr[currentArr.length -1 ];
    }

    Array.prototype.skip = function (n) {
        const currentArr = this.valueOf();

        return currentArr.slice(n);
    }

    Array.prototype.take = function (n) {
        const currentArr = this.valueOf();

        return currentArr.slice(0, n);
    }

    Array.prototype.sum = function () {
        const currentArr = this.valueOf();

        return currentArr.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0);
    }

    Array.prototype.average = function (){
        const currentArr = this.valueOf();
        return currentArr.sum() / currentArr.length;
    }
})();