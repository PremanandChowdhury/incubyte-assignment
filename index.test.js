const sum = require("./index");

test("returns 0 for an empty input string to sum ", () => {
    expect(sum("")).toBe(0);
});
