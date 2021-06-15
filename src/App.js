import React from 'react';
import Header from './components/Header';
import NavigationBar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Languages from './components/Languages'

function App() {
  return (
    <div>
      <Header>
        {/* <Languages /> */}
      </Header>
        <NavigationBar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
