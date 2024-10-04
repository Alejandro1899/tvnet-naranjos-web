import { Route, Routes } from 'react-router-dom'
import {Home} from './components/Home.jsx'
import { AboutUs } from './components/AboutUs.jsx'
import {Channels} from './components/Channels.jsx'
import { PricePlans } from './components/PricePlans.jsx'
import { NavBar } from './components/NavBar.jsx'
import './styles/NavBar.css'


function App() {

  return (
    <>
    <header>
      <NavBar/>
    </header>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/components/AboutUs.jsx' element={<AboutUs/>}/>
        <Route path='/components/Channels.jsx' element={<Channels/>}/>
        <Route path='/components/PricePlans.jsx' element={<PricePlans/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
