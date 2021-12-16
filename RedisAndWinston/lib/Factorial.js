/**
 * !n = 1 * 2 * 3 ...
 * !1 = 1
 * !0 = 1
 * @param {number} n int number
 * @returns {number} the factorial of n
 * */

const factorial = number => {
    if (number === 1 || number === 0) return 1;
    return factorial(number - 1) * number;
}

export default factorial;