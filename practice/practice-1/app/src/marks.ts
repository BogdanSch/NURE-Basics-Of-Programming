function getGrade(score: number): { letter: string; fivePoint: number } {
  const gradeMap = [
    { min: 96, max: 100, letter: "A", fivePoint: 5 },
    { min: 90, max: 95, letter: "B", fivePoint: 5 },
    { min: 75, max: 89, letter: "C", fivePoint: 4 },
    { min: 66, max: 74, letter: "D", fivePoint: 3 },
    { min: 60, max: 65, letter: "E", fivePoint: 2 },
    { min: 1, max: 59, letter: "F", fivePoint: 1 },
  ];

  for (const grade of gradeMap) {
    if (score >= grade.min && score <= grade.max) {
      return { letter: grade.letter, fivePoint: grade.fivePoint };
    }
  }

  throw new Error("Invalid score");
}

let score = 85;
let grade = getGrade(score);
console.log(
  `Score: ${score}, Letter Grade: ${grade.letter}, Five-Point Scale: ${grade.fivePoint}`
);
