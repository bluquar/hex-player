import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';

export class Template extends Renderable {
  constructor() {
    super();
    // ...
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
};