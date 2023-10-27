import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import Intro from './components/Intro/Intro';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroImage />
    <Intro />
    <WhyChooseUs />
    </div>
  );
}

export default App;
