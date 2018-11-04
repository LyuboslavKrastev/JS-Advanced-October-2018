function isSymmetric(arr) {
  if (!Array.isArray(arr))
    return false; // Non-arrays are non-symmetric
  let reversed = arr.slice(0).reverse(); // Clone + reverse
  let equal = 
    (JSON.stringify(arr) == JSON.stringify(reversed));
  return equal;
}

let assert = require("chai").assert;
describe("isSymmetric(arr)", function() {
    it("should return true", function() {
      const result = isSymmetric([1, 2, 3, 3, 2, 1]);
      assert.equal(result, true);
    });

    it("should return true", function() {
        const result = isSymmetric([-1,2,-1]);
        assert.equal(result, true);
    });

    it("should return true", function() {
        const result = isSymmetric([1]);
        assert.equal(result, true);
    });

    it("should return true", function() {
        const result = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
        assert.equal(result, true);
    });


    it("should return false", function() {
        const result = isSymmetric([-1,2,1]);
        assert.equal(result, false);
    });

    it("should return false", function() {
        const result = isSymmetric([-1,2,1]);
        assert.equal(result, false);
    });

    it("should return false", function() {
        const result = isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5]);
        assert.equal(result, false);
    });

    it("should return false", function() {
        const result = isSymmetric(1,2,2,1);
        assert.equal(result, false);
    });

    it("should return false", function() {
        const result = isSymmetric([1,2]);
        assert.equal(result, false);
    });
});