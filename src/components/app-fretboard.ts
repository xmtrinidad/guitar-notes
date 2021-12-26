import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-fretboard')
export class AppFretboard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }

    .fretboard {
      background-color: #201c1c;
      width: 790px;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;
      position: relative;
      margin: auto;
    }

    .string {
      background-color: #fff;
      width: 100%;
      height: 4px;
    }

    .string1, .string2 {
      height: 2px;
    }

    .string3, .string4 {
      height: 3px;
    }

    .string5, .string6 {
      height: 4px;
    }

    .frets {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }

    .fret {
      height: 100%;
      width: 2px;
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .fret1, .fret13 {
      opacity: 0;
      pointer-events: none;
    }

    .fret1, .fret2, .fret3, .fret4 {
      margin-left: -10px;
    }

    .fret5, .fret6, .fret7, .fret8 {
      margin-left: -20px;
    }

    .fret9, .fret10, .fret11, .fret12, .fret13 {
      margin-left: -30px;
    }

    .fret-dot {
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 100%;
      position: absolute;
      top: 75px;
    }

    .fret3 .fret-dot {
      left: 31px;
    }

    .fret5 .fret-dot {
      left: 25px;
    }

    .fret7 .fret-dot {
      left: 25px;
    }

    .fret9 .fret-dot {
      left: 22px;
    }

    .fret12 .fret-dot {
      left: 20px;
    }

    .fret-dot-12-1 {
      top: 45px;
    }

    .fret-dot-12-2 {
      top: 104px;
    }

    .note-indicator {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: hotpink;
      position: absolute;
      top: 0;
      left: 0;
    }

  `;

  render() {
    return html`
      <div class="fretboard">
        <div class="note-indicator"></div>

        <div class="string string1"></div>
        <div class="string string2"></div>
        <div class="string string3"></div>
        <div class="string string4"></div>
        <div class="string string5"></div>
        <div class="string string6"></div>

        <div class="frets">
          <div class="fret fret1"></div>
          <div class="fret fret2"></div>
          <div class="fret fret3">
            <div class="fret-dot"></div>
          </div>
          <div class="fret fret4"></div>
          <div class="fret fret5">
            <div class="fret-dot"></div>
          </div>
          <div class="fret fret6"></div>
          <div class="fret fret7">
            <div class="fret-dot"></div>
          </div>
          <div class="fret fret8"></div>
          <div class="fret fret9">
            <div class="fret-dot"></div>
          </div>
          <div class="fret fret10"></div>
          <div class="fret fret11"></div>
          <div class="fret fret12">
            <div class="fret-dot fret-dot-12-1"></div>
            <div class="fret-dot fret-dot-12-2"></div>
          </div>
          <div class="fret fret13"></div>
        </div>

      </div>
    `;
  }
}
