import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

import "./tasks/task-1";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Practical Les - 9</h1>
  </div>
`;
