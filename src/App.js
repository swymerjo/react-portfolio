import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
   <HeroSection />
   <ProjectCards />
   <Footer />
    </div>
  );
}

export default App;
