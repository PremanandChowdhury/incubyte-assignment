import {add } from "./index";

test("returns 0 for an empty input string to sum ", () => {
    expect(add("")).toBe(0);
    expect(add(" ")).toBe(0); // with space
    expect(add("  ")).toBe(0); // with multiple spaces
});

test("returns the sum of numbers with comma separated values", () => {
    expect(add("1,2,3")).toBe(6);
});

test("returns the sum of numbers with comma separated values along with spaces", () => {
    expect(add("1 ,2 , 3 , 4")).toBe(10);
});

test("returns the sum of numbers with comma separated with larger length", () => {
    expect(add("1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10, 11")).toBe(66);
});

test("returns the sum of numbers with new line in between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("returns the sum of numbers with multiple new line in between numbers", () => {
    expect(add("1\n2,3, 4\n4, 5, 6")).toBe(25);
});

test("returns the sum of numbers following the pattern: //[delimiter]\n[numbers...]", () => {
    expect(add("//;\n1;2;3")).toBe(6);
});

test("throws an error for negative numbers in the input", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test("throws an list of negative numbers in the input", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4");
});
