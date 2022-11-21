import assert from "assert";
import {expect} from "chai";

//mocha
describe("Car list", function() {
    it("Check user has list of the cars: positive", () => {
        assert.equal(["bmw", "audi"].length, 2, "The list of the cars in incorrect");
    });
    // it("Check user has list of the cars: negative", () => {
    //     assert.equal(["bmw", "audi", "toyota"].length, 2, "The list of the cars in incorrect");
    // });
}); 

// chai
describe("Car list 2", function() {
    const expected = ["bmw", "audi", "toyota"];
    const actual = ["bmw", "audi"];
    it("Check user has list of the cars: negative", () => {
        expect(actual).to.not.deep.equal(expected);
    });
}); 