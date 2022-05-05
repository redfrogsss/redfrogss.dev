import React from 'react';
import DanceCanvas from './components/DanceCanvas';
import { SocialIcon } from 'react-social-icons';
import FadeIn from 'react-fade-in';

function App() {
  return (
    <div className="App">
      <div class="grid grid-cols-2 px-64 content-center">
        <div class="flex justify-center items-center h-screen">
          <DanceCanvas />
        </div>
        <div class="flex justify-center items-center h-screen">
          <FadeIn>
            <center>
              <h1 className="text-5xl font-bold font-mono">
                Hello world!
              </h1>
              <p className="text-lg font-mono pt-8">
                Hello Worlds
              </p>
              <span class="inline-grid grid-cols-3 gap-4 py-8">
                <span>
                  <SocialIcon url="https://github.com/redfrogsss" bgColor='#f3f4f6' />
                </span>
                <span>
                  <SocialIcon url="https://twitter.com/redfrogss" />
                </span>
                <span>
                  <SocialIcon url="mailto:hello@redfrogss.dev" bgColor='#f3f4f6' />
                </span>
              </span>
            </center>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default App;