import linearSearchCounter from "./linearSearch";

export default function getOnlyOneOccuranceLine(line: string) {
  let result: string = "";

  for (let i: number = 0; i < line.length; i++) {
    const symbol: string = line[i];

    if (linearSearchCounter(line, symbol) === 1) result += symbol;
  }

  return result;
}
