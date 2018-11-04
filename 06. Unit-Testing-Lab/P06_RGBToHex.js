function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let assert = require("chai").assert;
describe("rgbToHexColor(red, green, blue)", function() {
  
    it("should return undefined", function() {
        assert.isUndefined(rgbToHexColor(1, 2, 'hello'));
        assert.isUndefined(rgbToHexColor(0, -1, 0));
        assert.isUndefined(rgbToHexColor(0, 0, 256));
        assert.isUndefined(rgbToHexColor());
        assert.isUndefined(rgbToHexColor("5", [3], {8:9}));

    });

    it("should return #FF9EAA", function() {
        const result = rgbToHexColor(255, 158, 170);
        const expected = '#FF9EAA';
        assert.equal(result, expected);
    });

    it("should return #000000", function() {
        const result = rgbToHexColor(0, 0, 0);
        const expected = '#000000';
        assert.equal(result, expected);
    });

    it("should return #0C0D0E", function() {
        const result = rgbToHexColor(12, 13, 14);
        const expected = '#0C0D0E';
        assert.equal(result, expected);
    });

    it("should return #FFFFFF", function() {
        const result = rgbToHexColor(255, 255, 255);
        const expected = '#FFFFFF';
        assert.equal(result, expected);
    });
});