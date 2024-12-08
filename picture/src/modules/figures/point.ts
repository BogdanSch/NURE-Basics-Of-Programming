class Point {
  public x: number = 0;
  public y: number = 0;
  public color: string;

  constructor(x: number = 0, y: number = 0, color: string = "blue") {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  add(other: Point): void {
    this.x += other.x;
    this.y += other.y;
  }

  distаnceTo(other: Point): number {
    return ((this.x - other.x) ** 2 + (this.y - other.y) ** 2) ** 0.5;
  }

  length(): number {
    return this.distаnceTo(new Point(0, 0));
  }

  toString(): string {
    return `Point: x=${this.x}  y=${this.y}`;
  }
}

export default Point;
