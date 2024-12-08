import "./includes";

// import findMostCommonLetters from "./tasks/findMostCommonLetters";
// import "./tasks/chessBoard";
// import "./tasks/swapSegments";
import "./tasks/recursiveFunction";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container mt-5">
    <div class="alert alert-secondary" role="alert">
      <h1 class="heading">
        Programming - Lab Work 4, Arrays
      </h1>
      <div id="outputMostCommonLetters">
          <h3>Task1. Most common letters</h3>
      </div>
      <div id="outputArmstrongNumbers">
          <h3>Task2. Chess board</h3>
      </div>
    </div>
  </div>
`;

// Example usage:
// const sequence1: string = "dfgggg dkl fgggrty dgggqwe zxc.";
// console.log(sequence1, findMostCommonLetters(sequence1)); // Expected output: "q, w, e"
// const sequence2: string = "cat, dog, camel, batt.";
// console.log(sequence2, findMostCommonLetters(sequence2)); // Expected output: "a"
