import React from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Loading />
      <Intro />
      <Projects />
      <Footer />
    </div >
  );
}

export default App;