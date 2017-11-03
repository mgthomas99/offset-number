var expect = require("chai").expect;
var offset = require("./../dist/commonjs/offset").offset;

describe("Offset", function () {
    it("Should apply an offset to `x`", function () {
        var x = 42;
        offset(x, 5);

        expect(x).to.be.gte(37);
        expect(x).to.be.lte(47);
    });
});
