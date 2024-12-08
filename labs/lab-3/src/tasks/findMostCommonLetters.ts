const getWords = (sequence: string): string[] => {
  let words: string[] = [];
  let currentWord: string = "";

  for (let i: number = 0; i < sequence.length; i++) {
    const character: string = sequence[i];

    if (character === " " || character === "," || character === ".") {
      if (currentWord) {
        words.push(currentWord);
        currentWord = "";
      }
    } else {
      currentWord += character;
    }
  }

  // if (currentWord) {
  //   words.push(currentWord);
  // }

  return words;
};

const getMaxCountLetterAppearance = (letterCount: {
  [key: string]: number;
}): number => {
  let maxCountLetterAppearance: number = 0;

  for (const letter in letterCount) {
    if (letterCount[letter] > maxCountLetterAppearance) {
      maxCountLetterAppearance = letterCount[letter];
    }
  }

  return maxCountLetterAppearance;
};

const implode = (characters: string[], joinSymbol: string): string => {
  let result: string = "";

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (i === characters.length - 1) result += character;
    else result += `${character}${joinSymbol}`;
  }

  return result;
};

const findMostCommonLetters = (sequence: string): string => {
  const letterCount: { [key: string]: number } = {};
  const words: string[] = getWords(sequence);

  for (let i: number = 0; i < words.length; i++) {
    const word: string = words[i];
    const seenLetters: { [key: string]: boolean } = {};

    for (let j: number = 0; j < word.length; j++) {
      const letter: string = word[j];

      if (!seenLetters[letter]) {
        seenLetters[letter] = true;
        letterCount[letter] = (letterCount[letter] || 0) + 1;
      }
    }
  }
  // console.log(letterCount);

  let maxCountLetterAppearance: number =
    getMaxCountLetterAppearance(letterCount);

  const mostCommonLetters: string[] = [];
  for (const letter in letterCount) {
    if (letterCount[letter] === maxCountLetterAppearance) {
      mostCommonLetters.push(letter);
    }
  }

  let result: string =
    "Letters that appear in the most words: " +
    implode(mostCommonLetters, ", ");

  return result;
};

export default findMostCommonLetters;
