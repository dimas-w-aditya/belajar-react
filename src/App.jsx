import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import './index.css';

function App () {
  return (
    <BrowserRouter>
      <nav style={{ padding: '16px 40px', background: '#2563eb', display: 'flex', gap: '24px', margin: '0px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none'}}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none'}}>About</Link>
        <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none'}}>Portfolio</Link>
      </nav>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;