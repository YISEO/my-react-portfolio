import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="flex nav nav-bars">
            <li className="ml-10">
                <Link to="/" className={currentPage === "/" ? "text-gold" : "hover:text-gold duration-500"}>
                    ABOUT
                </Link>
            </li>
            <li className="ml-10">
                <Link to="/projects" className={currentPage === "/projects" ? "text-gold" : "hover:text-gold duration-500"}>
                    PROJECTS
                </Link>
            </li>
            <li className="ml-10">
                <Link to="/contact" className={currentPage === "/contact" ? "text-gold" : "hover:text-gold duration-500"}>
                    CONTACT
                </Link>
            </li>
            <li className="ml-10">
                <Link to="/resume" className={currentPage === "/resume" ? "text-gold" : "hover:text-gold duration-500"}>
                    RESUME
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
