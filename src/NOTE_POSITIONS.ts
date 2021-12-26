import { css } from 'lit';

/**
 * Convention:
 * note_note-occurence_string-number
 * e_0_1
 */

const low_e_string = css`
  .e_0_1 {
    top: 0;
    left: 0;
  }

  .f_0_1 {
    top: 0;
    left: 23px;
  }

  .g_0_1 {
    top: 0;
    left: 176px;
  }
`;

const b_string = css`
  .b_0_2 {
    top: 29px;
    left: 0;
  }

  .c_0_2 {
    top: 29px;
    left: 23px;
  }

  .d_0_2 {
    top: 29px;
    left: 176px;
  }
`;

export const NOTE_POSITIONS = [
  low_e_string,
  b_string
];

export const NOTE_CLASSES = [
  'e_0_1', 'f_0_1', 'g_0_1',
  'b_0_2', 'c_0_2', 'd_0_2'
];
