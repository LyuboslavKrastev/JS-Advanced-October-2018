function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const assert = require('chai').assert;

describe('lookupChar tests', function() {
    describe('Undefined output cases', function() {
        it('Passing an object instead of string(should return undefined)', function (){
            const result = lookupChar({}, 5);

            assert.isUndefined(result);
        });
        it('Passing a floating point number instead of integer(should return undefined)', function (){
            const result = lookupChar('hello', 5.3);

            assert.isUndefined(result);
        });
    });

    describe('Index validity tests', function(){
        it('Passing a negative index(should return "Incorrect index")', function() {
            const result = lookupChar('hello', -4);
            const expected = 'Incorrect index';
            assert.equal(result, expected);
        });

        it('Passing an out of range index(should return "Incorrect index")', function() {
            const result = lookupChar('hello', 15);
            const expected = 'Incorrect index';
            assert.equal(result, expected);
        });
        
        it('Passing an index equal to the string length(should return "Incorrect index")', function() {
            const result = lookupChar('hello', 5);
            const expected = 'Incorrect index';
            assert.equal(result, expected);
        });
    });

    describe('Valid input tests', function (){
        it('Should return the symbol at the corresponding index', function (){
            const result = lookupChar('hello', 1);
            const expected = 'e';

            assert.equal(result, expected);
        });
        it('Should return the symbol at the corresponding index', function (){
            const result = lookupChar('hello', 4);
            const expected = 'o';

            assert.equal(result, expected);
        });
    });
});