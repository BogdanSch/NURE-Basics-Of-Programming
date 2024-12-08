function generateArray(arrayLength: number) {
  const numberSequence: number[] = [];

  for (let i = 0; i < arrayLength; i++) {
    if (i % 2 === 0) numberSequence.push(1);
    else numberSequence.push(2);
  }

  return numberSequence;
}

const ARRAY_LENGTH = 5;

let numberSequence = generateArray(ARRAY_LENGTH);
console.log(numberSequence);
