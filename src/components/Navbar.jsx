import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className={currentPage === "/about" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className={currentPage === "/projects" ? "nav-link active" : "nav-link"}>
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
