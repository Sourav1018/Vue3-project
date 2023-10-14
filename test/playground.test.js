// import { describe, it, expect } from "vitest"; -> global declear inside the vite.js file
/*
import { evenOrOdd, multiply } from "../src/playground";

//we can nest describe

//describe -> for describing what we are testing and take arrow function
describe("basic math", () => {
  //it -> for it does what, take arrow functiom
  it("adds two numbers", () => {
    //expect -> call actual data, tobe() -> match with expected data.
    expect(1 + 1).toBe(2);
  });
  describe("evenOrOdd", () => {
    it("check number is even ", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });
  describe("evenOrOdd", () => {
    it("check number is odd ", () => {
      expect(evenOrOdd(5)).toBe("Odd");
    });
  });
  describe("multiplication", () => {
    it("multiply two numbers", () => {
      expect(multiply(2, 2)).toBe(4);
    });
  });
});

/*
describe("evenOrOdd", () => {
  it("check number is even or odd", () => {
    expect(evenOrOdd(4)).toBe("Even");
  });
});
*/
