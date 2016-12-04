import {Renderable} from 'renderable.js';

import {makeDiv} from 'domutils.js';

import type {Loggable} from 'renderable.js';

export class StatusBar extends Renderable {
  constructor() {
    super();
    // ...
  }

  getNode(): HTMLElement {
    return makeDiv(null, 'statusbar', 'Status Bar');
  }

  getKey(): ?Loggable {
    return 'statttttsss bar';
  }

  log(): Loggable {
    return 'status bar';
  }
}