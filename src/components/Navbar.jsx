import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <nav style={{ padding: '16px 40px', background: '#2563eb', display: 'flex', gap: '24px', margin: '0px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none'}}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none'}}>About</Link>
        <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none'}}>Portfolio</Link>
      </nav>
  );
}

export default Navbar;