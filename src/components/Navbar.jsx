import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>TeacherHub Ethiopia 🇪🇹</h2>

      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>{" "}

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>{" "}

        <NavLink
          to="/money"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Money
        </NavLink>{" "}

        <NavLink
          to="/opportunities"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Opportunities
        </NavLink>{" "}

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;