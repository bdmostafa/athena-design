import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/shared/Footer/Footer';
import PriceCard from './components/PriceCard/PriceCard';
import StayRunningCTA from './components/StayRunningCTA/StayRunningCTA';
import GetStartedCTA from './components/GetStartedCTA/GetStartedCTA';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <StayRunningCTA />
      <Achievements />
      <PriceCard />
      <GetStartedCTA />
      <Footer />
    </>
  );
}

export default App;
