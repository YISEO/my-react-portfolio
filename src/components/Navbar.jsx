import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-bars">
            <li className="nav-item">
                <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                    ABOUT
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className={currentPage === "/projects" ? "nav-link active" : "nav-link"}>
                    PROJECTS
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>
                    CONTACT
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/resume" className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>
                    RESUME
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
