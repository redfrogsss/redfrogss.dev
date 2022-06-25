import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Loading from './components/Loading';

function App() {

  const [showLoading, setShowLoading] = useState(true);

  const loadingDelayMs = 5000;

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, loadingDelayMs);
  }, []);

  return (
    <div className="App">
      {showLoading ? <Loading delayMs={loadingDelayMs} /> : <></>}
      <Intro />
      <Projects />
      <Footer />
    </div >
  );
}

export default App;