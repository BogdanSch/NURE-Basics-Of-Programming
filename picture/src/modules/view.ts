import Circle from "./figures/circle";
import Point from "./figures/point";
import Rectangle from "./figures/rectangle";
import Picture from "./picture";

export default class View {
  public picture: Picture;
  public canvas: HTMLCanvasElement;

  constructor(picture: Picture, canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.picture = picture;
  }

  draw() {
    for (let point of this.picture.points) {
      if (point instanceof Circle) this.drawCircle(point);
      else if (point instanceof Rectangle) this.drawRectangle(point);
      else if (point instanceof Point) this.drawPoint(point);
    }
  }

  drawCircle(circle: Circle) {
    const context: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

    context.fillStyle = circle.color;
    context.beginPath();
    context.moveTo(circle.x + circle.radius, circle.y);
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.fill();
  }

  drawRectangle(rect: Rectangle) {
    const context: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

    context.fillStyle = rect.color;
    context.fillRect(
      rect.x - rect.width / 2,
      rect.y - rect.height / 2,
      rect.width,
      rect.height
    );
  }

  drawPoint(point: Point) {
    const radius: number = 10;
    this.drawCircle(new Circle(point.x, point.y, radius, point.color));
  }
}
