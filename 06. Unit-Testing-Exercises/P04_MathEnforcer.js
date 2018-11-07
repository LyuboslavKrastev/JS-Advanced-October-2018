let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let assert = require('chai').assert;

describe('Math enforcer tests', function(){
    describe('addFive tests', function(){
        it('Passing a string should return undefined', function(){
            const result = mathEnforcer.addFive('hello');          
            assert.isUndefined(result);
        });
        it('Passing an object should return undefined', function(){
            const result = mathEnforcer.addFive({'hello': 'world'});          
            assert.isUndefined(result);
        });
        it('Passing a valid positive number should return correct result', function(){
            const result = mathEnforcer.addFive(5);       
            const expected = 10;   
            assert.equal(result, expected);
        });
        it('Passing a valid negative number should return correct result', function(){
            const result = mathEnforcer.addFive(-5);       
            const expected = 0;   
            assert.equal(result, expected);
        });

        it('Passing a valid positive floating point number should return correct result', function(){
            const result = mathEnforcer.addFive(2.3);       
            const expected = 7.3;   
            assert.closeTo(result, expected, 0.01);
        });

        it('Passing a valid negative floating point number should return correct result', function(){
            const result = mathEnforcer.addFive(-2.3);       
            const expected = 2.7;   
            assert.closeTo(result, expected, 0.01);
        });
    });

    describe('subtractTen tests', function(){
        it('Passing a string should return undefined', function(){
            const result = mathEnforcer.subtractTen('hello');          
            assert.isUndefined(result);
        });
        it('Passing an object should return undefined', function(){
            const result = mathEnforcer.subtractTen({'hello': 'world'});          
            assert.isUndefined(result);
        });
        it('Passing a valid positive number should return correct result', function(){
            const result = mathEnforcer.subtractTen(25);       
            const expected = 15;   
            assert.equal(result, expected);
        });
        it('Passing a valid negative number should return correct result', function(){
            const result = mathEnforcer.subtractTen(-5);       
            const expected = -15;   
            assert.equal(result, expected);
        });

        it('Passing a valid positive floating point number should return correct result', function(){
            const result = mathEnforcer.subtractTen(10.5);       
            const expected = 0.5;   
            assert.closeTo(result, expected, 0.01);
        });

        it('Passing a valid negative floating point number should return correct result', function(){
            const result = mathEnforcer.subtractTen(-10.5);       
            const expected = -20.5;   
            assert.closeTo(result, expected, 0.01);
        });
    });

    describe('sum tests', function(){
        //in reality it would return a string, but this is the case of the exercise
        it('Passing a string as parameter should return undefined', function(){ 
            const result = mathEnforcer.sum('hello', 5);
            assert.isUndefined(result);
        });
        //in reality it would return a string, but this is the case of the exercise
        it('Passing a string as parameter should return undefined', function(){
            const result = mathEnforcer.sum(5, 'hello');
            assert.isUndefined(result);
        });
        it('Passing an undefined as parameter should return undefined', function(){
            const result = mathEnforcer.sum(undefined, 5);
            assert.isUndefined(result);
        });

        it('Passing an undefined as parameter should return undefined', function(){
            const result = mathEnforcer.sum(5, undefined);
            assert.isUndefined(result);
        });

        it('Passing positive numbers should return correct result', function(){
            const result = mathEnforcer.sum(5, 5);
            const expected = 10;
            assert.equal(result, expected);
        });
        it('Passing negative numbers should return correct result', function(){
            const result = mathEnforcer.sum(-5, -5);
            const expected = -10;
            assert.equal(result, expected);
        });
        it('Passing positive floating point numbers should return correct result', function(){
            const result = mathEnforcer.sum(5.5, 5.5);
            const expected = 11;
            assert.closeTo(result, expected, 0.01);
        });
        it('Passing positive floating point numbers should return correct result', function(){
            const result = mathEnforcer.sum(-5.5, -5.5);
            const expected = -11;
            assert.closeTo(result, expected, 0.01);
        });
    });
});