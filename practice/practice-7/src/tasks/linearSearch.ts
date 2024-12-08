export default function linearSearchCounter(
  input: string,
  desiredSymbol: string
): number {
  let count: number = 0;

  for (let i: number = 0; i < input.length; i++) {
    if (input[i] === desiredSymbol) count++;
  }

  return count;
}
