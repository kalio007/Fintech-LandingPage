import logo from './logo.svg';
import React from 'react';


import Homepage from './pages/Homepage';
import SiteHeader from './Components/SiteHeader';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Testimonal from './Components/Testimonal';
import Footer from './Components/Footer';



function App() {
  return (
    
    <div className="text-white">
      
      <NavBar/>
      <Hero/>
      <Features/>
      <Homepage/>
      <Testimonal/>
      <Footer/>
    </div>
  
  );
}

export default App;
