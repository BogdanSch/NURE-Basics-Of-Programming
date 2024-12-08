import Point from "./point";

export default class Circle extends Point {
  public radius: number;

  constructor(
    x: number,
    y: number,
    radius: number = 25,
    color: string = "green"
  ) {
    super(x, y, color);
    this.radius = radius;
  }

  zoom(k: number): void {
    this.radius *= k;
  }
}
