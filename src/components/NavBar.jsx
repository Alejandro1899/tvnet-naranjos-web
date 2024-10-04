import { Link } from "react-router-dom"


export const NavBar = ()=>    { 
return (
<>
<nav>
    <div className="logo-imagen">
        <h4>Logo</h4>
    </div>
    <div className="links-nav">
        <ul>
            <li><Link to='./'>Inicio</Link></li>
            <li><Link to= './components/AboutUs.jsx'>Sobre Nosotros</Link></li>
            <li><Link to= './components/Channels.jsx'>Canales</Link></li>
            <li><Link to='./components/PricePlans.jsx'> Paquetes</Link></li>
        </ul>
    </div>
</nav>
</>
)}