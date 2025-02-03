import { capitalize, reverseString, calculator, abc, analyzeArray } from "./index.js";

test("Analyze Array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
}); 