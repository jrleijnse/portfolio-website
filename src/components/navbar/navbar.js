import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link
          href="home"
          to="App"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          name="Home"
          className="link dim white f6 f3-l dib mr3 mr4-l"
          title="Home"
        >
          Home
        </Link>
        <Link
          href="about"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          name="About"
          className="link dim white f6 f3-l dib mr3 mr4-l"
          title="About"
        >
          About
        </Link>
        <Link
          href="projects"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          name="Projects"
          className="link dim white f6 f3-l dib mr3 mr4-l"
          title="Projects"
        >
          Projects
        </Link>
        <Link
          href="contact"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          name="Contact"
          className="link dim white f6 f3-l dib mr3 mr4-l"
          title="Contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
