import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Loading from './components/Loading';

function App() {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {showLoading ? <Loading /> : <></>}
      <Intro />
      <Projects />
      <Footer />
    </div >
  );
}

export default App;