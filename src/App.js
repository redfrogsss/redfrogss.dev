import React from 'react';
import DanceCanvas from './components/DanceCanvas';

function App() {
  return (
    <div className="App">

      <div class="grid grid-cols-2 gap-4 px-64">
        <div>
          <DanceCanvas />
        </div>
        <div>
          <p class="py-64">
            <center>
              <h1 className="text-5xl font-bold font-mono">
                Hello world!
              </h1>
            </center>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;