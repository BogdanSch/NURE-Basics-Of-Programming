import Point from "./point";

export default class Rectangle extends Point {
  public width: number;
  public height: number;

  constructor(
    x: number,
    y: number,
    width: number = 50,
    height: number = 50,
    color: string = "red"
  ) {
    super(x, y, color);
    this.width = width;
    this.height = height;
  }

  zoom(k: number) {
    this.width *= k;
    this.height *= k;
  }
}
