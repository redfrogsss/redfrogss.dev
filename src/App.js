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
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;