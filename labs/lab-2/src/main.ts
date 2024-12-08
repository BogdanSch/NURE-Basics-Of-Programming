import calculateArmstrongNumber from "./tasks/armstrongNumbers";
import findCombinations from "./tasks/zoo";
import checkAtLeastTwoDifferentNumbers from "./tasks/twoDifferentNumbers";

import "./includes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container text-center mt-5">
    <h1 class="heading">
      Programming - Lab Work 2
    </h1>
    <p id="outputAnimalCombinations">
        ${findCombinations(24, 4)}
        ${"-".repeat(10)}
        ${findCombinations(34, 6)}
    </p>
    <p id="outputArmstrongNumbers">
      ${calculateArmstrongNumber(10e4)}
    </p>
  </div>
`;

console.log(checkAtLeastTwoDifferentNumbers(1111));
// console.log("-".repeat(10));

// console.log(calculateArmstrongNumber(1000));
// console.log("-".repeat(10));

// console.log(findCombinations(20, 4));
// console.log("-".repeat(10));
