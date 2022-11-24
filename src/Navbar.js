import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>StudioHub</h1>
      <div className="links">
        <Link to="/">Hubs</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Create Hub</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;