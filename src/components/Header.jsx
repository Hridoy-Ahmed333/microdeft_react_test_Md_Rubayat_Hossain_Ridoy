import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tok = localStorage.getItem("authToken");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  function logoutFn() {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">My Course App</h1>
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
          {tok && (
            <div>
              <button className="logout-btn" onClick={logoutFn}>
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
