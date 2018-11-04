function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let assert = require("chai").assert;
describe("sum(arr)", function() {
  it("should return 3 for [1, 2]", function() {
    const expected = 3;
    const result = sum([1, 2]);
    assert.equal(result, expected);
  });

  it("should return 0 for []", function(){
    const expected = 0;
    const result = sum([]);
    assert.equal(result, expected);
  });

  it("should return NaN for invalid data", function(){
    assert.isNaN(sum(['pesho', 5]));
  });
});
