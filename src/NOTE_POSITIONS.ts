

import { Note } from './interfaces/Note';

const e_string: Note[] = [
  {name: 'E', string: 1, fret: 0, position: [-10, 0]},
  {name: 'F', string: 1, fret: 1, position: [23, 0]},
  {name: 'G', string: 1, fret: 3, position: [176, 0]}
];

const b_string: Note[] = [
  {name: 'B', string: 2, fret: 0, position: [-10, 29]},
  {name: 'C', string: 2, fret: 1, position: [23, 29]},
  {name: 'D', string: 2, fret: 3, position: [176, 29]}
];

export const NOTES: Note[] = [
  ...e_string, ...b_string
];
