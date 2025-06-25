import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"

function Header() {
  return (
    <nav className="navbar scroll-smooth">
        <div className="nav-container">
            <div className="logo"><img src={logo} className="transition-transform duration-500 rounded-full hover:hue-rotate-60 hover:rotate-45 sm:block hidden" /></div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    </nav>

  );
}

export default Header;
