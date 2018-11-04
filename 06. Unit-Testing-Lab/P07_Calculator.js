function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

const assert = require('chai').assert;
describe('createCalculator', () => {
    it('should return object with all properties', () => {
        const properties = ['get', 'add', 'subtract'];

        const result = createCalculator();

        assert.isObject(result);

        assert.containsAllKeys(result, properties);
    });

    it('all properties should be functions', () => {
        const result = createCalculator();

        Object.keys(result).forEach((key) => {
            assert.isFunction(result[key]);
        });
    });
});

describe('calculator.get()', () => {
    it('should return default value', () => {
        const calculator = createCalculator();

        const result = calculator.get();
    
        assert.equal(result, 0);
    });
});

describe('calculator operations', () => {
    let calculator;
    beforeEach(() => {
        calculator = createCalculator();
    });

    it('add should return correct value', () => {      
        calculator.add(2);
        calculator.add(3);

        const result = calculator.get();

        const expected = 5;

        assert.equal(result, expected);
    });

    it('subtract should return correct value', () => {
        calculator.subtract(2);
        calculator.subtract(3);

        const result = calculator.get();

        const expected = -5;

        assert.equal(result, expected);
    });

    it('subtract should return correct value', () => {
        calculator.add(5.3);
        calculator.subtract(1.1);

        const result = calculator.get();

        const expected = 4.2;
        const  precision = 0.1;

        assert.closeTo(result, expected, precision);
    });

    
    it('add should return NaN', () => {
        calculator.add('hello');

        const result = calculator.get();

        assert.isNaN(result);
    });

    it('subtract should return NaN', () => {
        calculator.subtract('hello');

        const result = calculator.get();

        assert.isNaN(result);
    });

    it('subtract and add should return correct value', () => {
        //add(10); subtract('7'); add('-2'); subtract(-1); get  2
        calculator.add(10);
        calculator.subtract(7);
        calculator.add(-2);
        calculator.subtract(-1);
        const expected = 2;
        const result = calculator.get();
        assert.equal(result, expected);
    });
});