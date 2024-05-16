import {sum} from "../Sum"

test("Sum function should calculate the sim of 2 numbers", () => {
    const result = sum(3,4);

    // Assertion
    expect(result).toBe(7);
})