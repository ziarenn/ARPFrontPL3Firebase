import { it, expect, describe } from "vitest";
import calculate from "./fn.js";

// Triple A pattern / AAA
// 1. Arrange
// 2. Act
// 3. Assert

describe("fn.js", () => {
  ///
  it("should return something", () => {
    // Arrange
    // const h1 = document.query
    const a = 5;
    const b = 10;
    // Act
    const result = calculate(a, b);

    // Assert
    expect(result).toBeDefined();
  });
  ///
  it("should return a number", () => {
    const a = 10;
    const b = 15;
    const result = calculate(a, b);
    expect(result).toBeTypeOf("number");
    expect(result).not.toBeNaN();
  });
  ///
  it("should throw an error if argument of type other than number is provided", () => {
    const a = "lalalalal";
    const b = true;

    const result = calculate(a, b);
    expect(result).toBeNaN();
  });
  // do testowania czy funkcja się wywala z twardym błędem: expect(x).toThrow()
});
