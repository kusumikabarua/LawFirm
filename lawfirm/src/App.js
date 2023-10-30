
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import Intro from './components/Intro/Intro';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AreaOfPractices from './components/AreaOfPractices/AreaOfPractices';
import Clients from './components/Clients/Clients';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroImage />
    <Intro />
    <WhyChooseUs />
    <AreaOfPractices/>
    <Clients />
    </div>
  );
}

export default App;
