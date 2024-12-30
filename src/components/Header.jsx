import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">MyApp</h1>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/add" onClick={() => setIsMenuOpen(false)}>
            Add Courses
          </Link>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
            Courses
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
