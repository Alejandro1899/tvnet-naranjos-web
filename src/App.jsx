import { Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Channels from './components/Channels';
import PricePlans from './components/PricePlans';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import  NavigationBar  from './components/NavigationBar';

function App() {
  return (
    <>
    <NavigationBar/>
      <Routes>
        <Route path="/" >
          <Route path="/Home" index element={<Home />} />
          <Route path="/Channels" element={<Channels />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PricePlans" element={<PricePlans />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
