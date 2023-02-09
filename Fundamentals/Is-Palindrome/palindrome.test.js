const isPalindrome = require("./index");

test("'pizza' is not a palindrome", () => {
    expect(isPalindrome("pizza")).toBe(false);
});

test("'tacocat' is a palindrome", () => {
    expect(isPalindrome("tacocat")).toBe(true);
});
