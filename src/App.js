import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/shared/Footer/Footer';
import PriceCard from './components/PriceCard/PriceCard';
import StayRunningCTA from './components/StayRunningCTA/StayRunningCTA';
import GetStartedCTA from './components/GetStartedCTA/GetStartedCTA';
import Navbar from './components/shared/Header/Navbar/Navbar';
import Banner from './components/shared/Header/Banner/Banner';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <WhatWeDo />
      <StayRunningCTA />
      <Achievements />
      <PriceCard />
      <GetStartedCTA />
      <Footer />
    </div>
  );
}

export default App;
