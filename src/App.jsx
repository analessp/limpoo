import './styles/styles.css';
import './styles/services.css';
import './styles/appointments.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Appointments from "./pages/Appointments";

export default function App() {
    return (
        <BrowserRouter>
        <header>
        <nav>
            <div className="header-logo-text">
                <a>
                    <img id="logo" src="/src/assets/logo-limpoo.png" alt="Logotipo Limpoo" />
                    </a>
                    <div>
                        <h1>Limpoo</h1>
                        <p>A Nova Forma de Limpar</p>
                    </div>
            </div>
        </nav>
        <nav>
        <ul className="navbar-list">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/appointments">Agendamentos</Link></li>
            </ul>
            </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointments" element={<Appointments />} />
            </Routes>
            </BrowserRouter>
    );
}