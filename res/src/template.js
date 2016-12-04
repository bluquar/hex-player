import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';

export class Template extends Renderable {
  constructor() {
    super();
    // ...
  }

  render(): HTMLElement {
    throw 'abstract';
  }

  log(): Loggable {
    throw 'abstract';
  }
};