import React from 'react';
import DanceCanvas from './components/DanceCanvas';
import { SocialIcon } from 'react-social-icons';
import FadeIn from 'react-fade-in';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <div class="grid grid-cols-2 px-64 content-center h-[100vh]">
        <h1 className="text-5xl font-bold font-mono">Projects</h1>
        <h1 className="text-5xl font-bold font-mono">Projects</h1>
      </div>
    </div >
  );
}

export default App;