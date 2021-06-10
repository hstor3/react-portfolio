import React from 'react';
import Header from './components/Header';
import Navbar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
