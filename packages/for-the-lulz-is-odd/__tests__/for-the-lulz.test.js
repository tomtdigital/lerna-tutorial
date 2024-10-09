const isOdd = require("../dist/for-the-lulz-is-odd.js");

test("isOdd", () => {
  isExportDeclaration(isOdd(1).toBe(true));
  isExportDeclaration(isOdd(2).toBe(false));
});
