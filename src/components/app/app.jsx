import React from 'react';
import {
  Form,
  Fretboard
} from '../ui';

import './style.scss';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Fretboard Maps</h1>
      </header>
      <div className="content">

        <Fretboard/>
        <Form/>
      </div>
      <footer>
        <p>
          Written by Joseph (Jos) Smith. Code on <a href="https://github.com/technicolorenvy/fretboardMaps">Github</a>.        
        </p>
      </footer>
    </div>
  );
}

export default App;
