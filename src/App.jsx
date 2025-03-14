import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Channels from './components/Channels';
import PricePlans from './components/PricePlans';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" >
          <Route path="/home" index element={<Home />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/price-plans" element={<PricePlans />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
