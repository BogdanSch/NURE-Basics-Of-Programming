const getLastWord = (line: string): string => {
  let currentWord: string = "";

  for (let i: number = line.length - 1; i >= 0; i--) {
    const symbol: string = line[i];

    if (symbol === " ") {
      if (currentWord) break;
      continue;
    } else {
      currentWord += symbol;
    }
  }

  console.log(currentWord);

  return currentWord;
};

export default function getLastWordLength(line: string): number {
  const lastWord = getLastWord(line);
  return lastWord.length;
}
