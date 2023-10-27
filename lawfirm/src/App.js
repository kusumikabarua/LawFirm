
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import Intro from './components/Intro/Intro';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AreaOfPractices from './components/AreaOfPractices/AreaOfPractices';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroImage />
    <Intro />
    <WhyChooseUs />
    <AreaOfPractices/>
    </div>
  );
}

export default App;
