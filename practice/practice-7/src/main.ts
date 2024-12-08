import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

// import getOnlyOneOccuranceLine from "./tasks/getOnlyOneOccuranceLine";

// const result: string = getOnlyOneOccuranceLine("abcdefgbbbb787");

import getLastWordLength from "./tasks/getLastWordLength";

const result: number = getLastWordLength("HelloWorld"); //getLastWordLength("Hello   World     ");

import "./tasks/online-1";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Practical Les - 7</h1>
    <p class="read-the-docs" id="output">
      ${result}
    </p>
  </div>
`;
