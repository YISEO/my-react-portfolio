import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="flex nav nav-bars">
            <li className="ml-10">
                <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                    ABOUT
                </Link>
            </li>
            <li className="ml-10">
                <Link to="/projects" className={currentPage === "/projects" ? "nav-link active" : "nav-link"}>
                    PROJECTS
                </Link>
            </li>
            <li className="ml-10">
                <Link to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>
                    CONTACT
                </Link>
            </li>
            <li className="ml-10">
                <Link to="/resume" className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>
                    RESUME
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
