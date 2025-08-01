import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/home';
import Recipes from './pages/recipes';
import Settings from './pages/settings';
import About from './pages/about';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <div className='container main'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
export default App
