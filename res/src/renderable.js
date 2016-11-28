import {MemoNode} from 'memonode.js';

export type Loggable =
  | string
  | number
  | null
  | Array<any>
  | Object;

export class Renderable {
  _children: Renderable[];
  _node: MemoNode;

  constructor(children: ?Renderable[]) {
    this._children = children || [];
    this._node = new MemoNode(
      this.getPlaceholder(),
      this.getKey(),
    );
  }

  addChild(child: Renderable) {
    this._children.push(child);
  }

  *children(): Iterable<Renderable> {
    for (let child of this._children) {
      yield child;
    }
  }

  render(): Node {
    return this._node.update(this, this.getKey());
  }

  getPlaceholder(): Node {
    let div = document.createElement('div');
    div.className = this.constructor.name;
    return div;
  }

  getNode(): Node {
    throw "abstract";
  }

  getKey(): ?Loggable {
    throw "abstract";
  }

  log(): Loggable {
    throw "abstract";
  }
}