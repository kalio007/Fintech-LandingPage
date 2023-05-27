import React from 'react';


import Jobs from './pages/Jobs';
import SiteHeader from './Components/SiteHeader';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Features from './Components/Features';
// import Testimonal from './Components/Testimonal';
import Footer from './Components/Footer';
import FooterLag from './Components/FooterLag';
import PastClient from './Components/PastClients';
//import JObTest from './pages/jobTest';



function App() {
  return (
    
    <div className="text-white">
      
      <NavBar/>
      <Hero/>
      <Features/>
      <Jobs/>
      <PastClient />
      {/* <JObTest/> */}
      {/* <Testimonal/> */}
      <Footer/>
      <FooterLag/>
    </div>
  
  );
}

export default App;
