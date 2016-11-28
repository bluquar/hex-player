import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';

export class AIController extends Renderable {
  constructor() {
    super();
    // ...
  }

  getNode(): Node {
    return document.createTextNode("AI Controller");
  }

  getKey(): ?Loggable {
    return "ayy controller";
  }

  log(): Loggable {
    return "ai controller";
  }
};