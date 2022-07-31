import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Loading from './components/Loading';

function App() {

  // State to determine whether to show the loading screen
  const [showLoading, setShowLoading] = useState(true);

  // Loading screen's delay in ms
  const loadingDelayMs = 5000;

  useEffect(() => {
    // Hide loading screen after the delay time
    setTimeout(() => {
      setShowLoading(false);
    }, loadingDelayMs);
  }, []);

  return (
    <div className="App">
      {showLoading ? <Loading delayMs={loadingDelayMs} /> : <></>}
      <Intro />
      {/* {showLoading ? <></> : <Projects />} */}
      {showLoading ? <></> : <Footer />}
    </div >
  );
}

export default App;