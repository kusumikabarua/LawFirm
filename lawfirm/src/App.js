
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import Intro from './components/Intro/Intro';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AreaOfPractices from './components/AreaOfPractices/AreaOfPractices';
import Clients from './components/Clients/Clients';
import OurTeam from './components/OurTeam/OurTeam';
import Faq from './components/FAQ/Faq'
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroImage />
    <Intro />
    <WhyChooseUs />
    <AreaOfPractices/>
    <Clients />
    <OurTeam />
    <Faq />
    <Subscribe />
    </div>
  );
}

export default App;
