import { Link } from "react-router-dom";
import logo from './images/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="StudioHub logo" />
      <div className="links">
        <Link to="/">Hubs</Link>
        <Link to="/create" className="primary-button">Create Hub</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;