export type Loggable =
  | string
  | number
  | null
  | Array<any>
  | Object;

export class Renderable {
  _children: Renderable[];

  constructor(children: ?Renderable[]) {
    this._children = children || [];
  }

  addChild(child: Renderable) {
    this._children.push(child);
  }

  *children(): Iterable<Renderable> {
    for (let child of this._children) {
      yield child;
    }
  }

  render(): HTMLElement {
    throw 'abstract';
  }

  getNode(): HTMLElement {
    throw 'abstract';
  }

  log(): Loggable {
    throw 'abstract';
  }
}