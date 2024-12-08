// const calculateExpression = (a: number, n: number): number => {
//   let result: number = a;

//   for (let i = 1; i <= n; i++) {
//     result *= a - i * n;
//   }

//   return result;
// };

// console.log(`Result: ${calculateExpression(2, 5)}`);

// const calculateFraction = (num: number = 103): number => {
//     let result: number = 1 / num;

//     for (let i: number = num - 2; i >= 1; i -= 2) {
//         result = 1 / (i + result);
//     }

//     return result;
// }

// console.log(`Result: ${calculateFraction()}`);

const calculateFraction = (num: number, x: number): number => {
    let result: number = num / (x * x);

    for (let i: number = num / 2; i >= 1; i /= 2) {
        result = i / (x * x + result);
    }

    return x * result;
}

console.log(`Result: ${calculateFraction(256, 10)}`);