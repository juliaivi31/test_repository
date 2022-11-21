import assert from "assert";
import { expect } from "chai";
import { Calculator } from "./calculator";

// mocha
describe("operations-mocha", () => {
    before(function() {
        console.log("mocha");
    });
    it("sum-positive", () => {
        const sum = new Calculator(1, `+`, 5);
        assert.equal(sum.result, 6);
    });
    it("sum-negative", () => {
        const sum = new Calculator(1, `+`, 3);
        assert.equal(sum.result, 6);
    });
    it("sub-positive", () => {
        const sub = new Calculator(5, `-`, 3);
        assert.equal(sub.result, 2);
    });
    it("sub-negative", () => {
        const sub = new Calculator(5, `-`, 3);
        assert.equal(sub.result, 3);
    });
    it("mult-positive", () => {
        const mult = new Calculator(5, `*`, 3);
        assert.equal(mult.result, 15);
    });
    it("mult-negative", () => {
        const mult = new Calculator(5, `*`, 2);
        assert.equal(mult.result, 15);
    });
    it("div-positive", () => {
        const div = new Calculator(8, `/`, 2);
        assert.equal(div.result, 4);
    });
    it("div-negative", () => {
        const div = new Calculator(8, `/`, 2);
        assert.equal(div.result, 3);
    });
    it("exp-negative", () => {
        const exp = new Calculator(2, `**`, 2);
        assert.equal(exp.result, 4);
    });
    it("exp-negative", () => {
        const exp = new Calculator(2, `**`, 2);
        assert.equal(exp.result, 5);
    });
});

// chai
describe("operations-chai", () => {
        before(function() {
            console.log("chai")
        });
    it("sum-positive", () => {
        const sum = new Calculator(1, `+`, 5);
        expect(sum.result).to.eq(6);
    });
    it("sum-negative", () => {
        const sum = new Calculator(1, `+`, 5);
        expect(sum.result).to.eq(4);
    });
    it("sub-positive", () => {
        const sub = new Calculator(5, `-`, 3);
        expect(sub.result).to.eq(2);
    });
    it("sub-negative", () => {
        const sub = new Calculator(5, `-`, 3);
        expect(sub.result).to.eq(4);
    });
    it("mult-positive", () => {
        const mult = new Calculator(5, `*`, 3);
        expect(mult.result).to.eq(15);
    });
    it("mult-negative", () => {
        const mult = new Calculator(5, `*`, 3);
        expect(mult.result).to.eq(10);
    });
    it("div-positive", () => {
        const div = new Calculator(8, `/`, 2);
        expect(div.result).to.eq(4);
    });
    it("div-negative", () => {
        const div = new Calculator(8, `/`, 2);
        expect(div.result).to.eq(7);
    });
    it("exp-negative", () => {
        const exp = new Calculator(2, `**`, 2);
        expect(exp.result).to.eq(4);
    });
    it("exp-negative", () => {
        const exp = new Calculator(2, `**`, 2);
        expect(exp.result).to.eq(5);
    });
});