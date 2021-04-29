import { Link } from 'react-scroll';

export default function HeaderLinks() {
    return(
        <div className="header-nav">
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
    )
}