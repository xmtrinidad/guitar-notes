

import { Note } from './interfaces/Note';

const e_string: Note[] = [
  {name: 'e', string: 1, fret: 0, position: [-10, 0]},
  {name: 'f', string: 1, fret: 1, position: [23, 0]},
  {name: 'g', string: 1, fret: 3, position: [176, 0]}
];

const b_string: Note[] = [
  {name: 'b', string: 2, fret: 0, position: [-10, 29]},
  {name: 'c', string: 2, fret: 1, position: [23, 29]},
  {name: 'd', string: 2, fret: 3, position: [176, 29]}
];

export const NOTES: Note[] = [
  ...e_string, ...b_string
];
