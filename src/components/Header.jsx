import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-dark">
            <div className="m-auto flex justify-between items-center max-w-6xl py-3.5 px-5">
                <h1 className="w-24">
                    <Link to="/">
                        <img src={logo} alt="My personal logo, which is written 'SEO'" />
                    </Link>
                </h1>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
