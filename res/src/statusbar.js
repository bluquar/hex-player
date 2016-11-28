import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';

export class StatusBar extends Renderable {
  constructor() {
    super();
    // ...
  }

  getNode(): Node {
    return document.createTextNode("Status Bar");
  }

  getKey(): ?Loggable {
    return "statttttsss bar";
  }

  log(): Loggable {
    return "status bar";
  }
};