import { NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg fixed-top justify-content-center px-5 py-4">
      <div className="navigation">
        <NavLink
          className="navbar-brand mx-5"
          to="/"
        >
          HOME
        </NavLink>

        <NavLink
          className="navbar-brand mx-5"
          to="/about"
        >
          ABOUT
        </NavLink>

        <NavLink
          className="navbar-brand mx-5"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
