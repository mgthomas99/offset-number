var expect = require("chai").expect;
var entropize = require("./../dist/commonjs/entropize").entropize;

describe("entropize", function () {
    it("Should apply entropy to `x`", function () {
        var x = 42;
        entropize(x, 5);

        expect(x).to.be.gte(37);
        expect(x).to.be.lte(47);
    });
});
