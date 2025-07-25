import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImproveSkills from './components/ImproveSkillSection';
import Quote from './components/QuoteSection';
import Chef from './components/ChefSection';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Navbar />
      <div className='container main'>
        <HeroSection />
        <ImproveSkills />
        <Quote />
        <Chef />
      </div>
      <Footer />
    </div>
  )
}
export default App
