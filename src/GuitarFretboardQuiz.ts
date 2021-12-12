import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import './components/app-fretboard';


export class GuitarFretboardQuiz extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      display: block;
    }

    main {
      margin: 42px 0;
      padding: 32px;
    }
  `;

  render() {
    return html`
      <main>
        <app-fretboard></app-fretboard>
      </main>
    `;
  }
}
