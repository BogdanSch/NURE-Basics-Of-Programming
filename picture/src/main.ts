import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

import Picture from "./modules/picture";
import Point from "./modules/figures/point";
import View from "./modules/view";
import Controller from "./modules/controller";
import Circle from "./modules/figures/circle";
import Rectangle from "./modules/figures/rectangle";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Figure</h1>
    <canvas id="figuresCanvas" width="500" height="400"></canvas>
  </div>
`;

const canvas: HTMLCanvasElement =
  document.querySelector<HTMLCanvasElement>("#figuresCanvas")!;

const picture: Picture = new Picture(
  400,
  400,
  new Circle(100, 100),
  new Rectangle(20, 100)
  // new Point(100, 100),
  // new Point(200, 200)
);
const view: View = new View(picture, canvas);

const drawingController: Controller = new Controller(picture, view);
drawingController.setupEventHandlers();

view.draw();
