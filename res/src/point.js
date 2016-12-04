import {Offset} from 'offset.js';
import {RowColPair} from 'rowcolpair.js';

import {addOffset} from 'board.js';

export class Point extends RowColPair {
  plus(delta: Offset): Point {
    return addOffset(this, delta);
  }
}