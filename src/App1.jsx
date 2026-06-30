import React from 'react';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
      <Hero />
      <About />
    </div>
  );
}

export default App;