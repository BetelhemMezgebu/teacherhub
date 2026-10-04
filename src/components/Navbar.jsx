
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-navbar">
      <Link to="/" className="brand">
        <div className="brand-icon">T</div>

        <div className="brand-text">
          <strong>TeacherHub</strong>
          <span>Ethiopia 🇪🇹</span>
        </div>
      </Link>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/money"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Money
        </NavLink>

        <NavLink
          to="/opportunities"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Opportunities
        </NavLink>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="login-link">
          Login
        </Link>

        <Link to="/register" className="nav-register">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
