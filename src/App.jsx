import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;