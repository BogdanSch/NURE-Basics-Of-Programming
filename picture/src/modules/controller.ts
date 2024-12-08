import Picture from "./picture";
import View from "./view";

import Point from "./figures/point";
import Rectangle from "./figures/rectangle";
import Circle from "./figures/circle";

enum KeyAction {
  Rectangle = "r",
  Circle = "c",
  Point = "p",
}

export default class Controller {
  public picture: Picture;
  public view: View;

  constructor(picture: Picture, view: View) {
    this.picture = picture;
    this.view = view;
  }

  setupEventHandlers() {
    const canvas: HTMLCanvasElement = this.view.canvas;
    let currentKey: KeyAction | null = null;

    canvas.addEventListener("dblclick", (e) => {
      let figure: Point =
        currentKey === KeyAction.Rectangle
          ? new Rectangle(e.offsetX, e.offsetY)
          : currentKey === KeyAction.Circle
          ? new Circle(e.offsetX, e.offsetY)
          : new Point(e.offsetX, e.offsetY);

      this.picture.addPoint(figure);
      this.view.draw();
    });

    canvas.addEventListener("click", (e) => {
      this.picture.selectPoint(e.offsetX, e.offsetY);
      this.view.draw();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Delete") {
        this.picture.deleteSelectedPoint();
        this.view.draw();
      } else if (Object.values(KeyAction).includes(e.key as KeyAction)) {
        currentKey = e.key as KeyAction;
      }
    });
  }
}
