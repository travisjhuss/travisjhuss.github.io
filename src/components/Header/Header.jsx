import { Link, animateScroll as scroll } from "react-scroll";
import './Header.css';

export default function Header() {



    return (
        <div className="header">
            <Link
                className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                // offset={}
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
                // offset={}
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
                // offset={}
                duration={500}
            >
                Contact
            </Link>
        </div>
    )
};
