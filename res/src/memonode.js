import equal from 'deep-equal';
import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';

export class MemoNode {
  _node: Node;
  _key: ?Loggable;

  constructor(node: Node, key: ?Loggable) {
    this._node = node;
    this._key = key;
  }

  update(renderable: Renderable, key: ?Loggable): Node {
    if (true || key === undefined || !equal(key, this._key)) {
      this._node = renderable.getNode();
      this._key = key;
    }
    return this._node;
  }
}