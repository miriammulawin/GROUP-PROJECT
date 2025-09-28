import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg fixed-top justify-content-center px-5 py-4">
      <div className="navigation">
        <ScrollLink
          className="navbar-brand mx-5"
          to="home"
          smooth={true}
          duration={100}
          offset={-100}
        >
          HOME
        </ScrollLink>

        <ScrollLink
          className="navbar-brand mx-5"
          to="about"
          smooth={true}
          duration={100}
          offset={-45}
        >
          ABOUT
        </ScrollLink>

        <ScrollLink
          className="navbar-brand mx-5"
          to="contact"
          smooth={true}
          duration={100}
        >
          CONTACT
        </ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;
