function inverseArraySegment(arr: number[], start: number, end: number): void {
  for (; start < end; start++, end--) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
}

function swapSegments(numbers: number[], n: number, m: number): void {
  if (n + m > numbers.length) return;

  inverseArraySegment(numbers, 0, n - 1);

  inverseArraySegment(numbers, n, n + m - 1);

  inverseArraySegment(numbers, 0, n + m - 1);
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const n: number = 5;
const m: number = 2;

swapSegments(numbers, n, m);
console.log(numbers);

// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const n: number = 4;
// const m: number = 5;

// swapSegments(numbers, n, m);
// console.log(numbers);
