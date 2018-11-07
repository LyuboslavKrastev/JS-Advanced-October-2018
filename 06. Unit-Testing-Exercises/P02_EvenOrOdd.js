function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('isOddOrEven tests', () => {
    it('Passing a number parameter should return undefined', () => {
        const result = isOddOrEven(5);
        assert.isUndefined(result);
    });
    it('Passing an object parameter should return undefined', () => {
        const result = isOddOrEven({});
        assert.isUndefined(result);
    });

    it('Passing an even length string should return correct result', () => {
        const result = isOddOrEven('okay');
        const expected = 'even';
        assert.equal(result, expected);
    });
    it('Passing an odd length string should return correct result', () => {
        const result = isOddOrEven('hello');
        const expected = 'odd';
        assert.equal(result, expected);
    });
});