const fizzBuzz = require("./index");

test('For n=6, resulting output is [1, "Cake", 3, "Cake", "Pie", "Cake"]', () => {
    expect(fizzBuzz(6)).toEqual([1, "Cake", 3, "Cake", "Pie", "Cake"]);
});

test('For n=10, resulting output is [1, "Cake", 3, "Cake", "Pie", "Cake", 7, "Cake", 9, "CakeAndPie"]', () => {
    expect(fizzBuzz(10)).toEqual([1, "Cake", 3, "Cake", "Pie", "Cake", 7, "Cake", 9, "CakeAndPie"]);
});
