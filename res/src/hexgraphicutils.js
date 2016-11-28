import {GraphicPoint} from 'graphicpoint.js';
import {Point} from 'point.js';

import {ROW_WIDTHS} from 'board.js';

const MAX_ROW_WIDTH = 9;
const ROW_OFFSET = 40;
const COL_OFFSET = 47;
const HALF_COL_OFFSET = COL_OFFSET / 2;

export function graphicPointOnBoard(
  point: Point
): GraphicPoint {
  const row = point.row;
  const col = point.col;
  const rowWidth = ROW_WIDTHS[row];
  const colIndentation = MAX_ROW_WIDTH - rowWidth;
  const graphicColIndentation = HALF_COL_OFFSET * colIndentation;
  const colOffset = COL_OFFSET * col;
  const graphicCol = graphicColIndentation + colOffset;
  const graphicRow = ROW_OFFSET * row;
  return new GraphicPoint(graphicRow, graphicCol);
}