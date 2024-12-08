import Point from "./figures/point";

class Picture {
  private _selectedPoint: Point | null | undefined = null;

  get selectedPoint() {
    return this._selectedPoint;
  }

  private _width: number = 0;

  get width() {
    return this._width;
  }

  set width(newWidth) {
    this._width = newWidth;
  }

  private _height: number = 0;

  get height() {
    return this._height;
  }

  set height(newHeight) {
    this._height = newHeight;
  }

  private _points: Point[] = [];

  get points() {
    return this._points;
  }

  set points(newPoints) {
    this._points = newPoints;
  }

  constructor(width: number, height: number, ...points: Point[]) {
    this._width = width;
    this._height = height;
    this._points = points.slice();
  }

  addPoint(point: Point): void {
    if (!point) {
      console.error("Point must not be empty.");
      return;
    }
    if (point.x > this._width || point.y > this._height) {
      console.error("Outside the picture.");
      return;
    }
    this._points.push(point);
  }

  selectPoint(x: number, y: number) {
    const EPSILON: number = 3;
    let xy = new Point(x, y);
    this._selectedPoint = this._points.find(
      (point: Point) => point.distаnceTo(xy) < EPSILON
    );
  }

  deleteSelectedPoint() {
    this.points = this.points.filter((p) => p !== this._selectedPoint);
    this._selectedPoint = null;
  }

  toString() {
    return (
      "Picture:\n" + this._points.map((p: Point) => p.toString()).join("\n")
    );
  }
}

export default Picture;
