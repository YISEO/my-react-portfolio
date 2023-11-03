import Navbar from "./Navbar";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header className="header">
            <h1>
                <a href="/">
                    <img src={logo} alt="My personal logo, which is written 'SEO'" />
                </a>
            </h1>
            <Navbar />
        </header>
    );
}

export default Header;
