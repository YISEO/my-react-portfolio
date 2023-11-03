import Navbar from "./Navbar";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full header-wrap">
            <div className="m-auto flex justify-between items-center max-w-6xl py-3.5 px-5">
                <h1 className="w-24">
                    <a href="/">
                        <img src={logo} alt="My personal logo, which is written 'SEO'" />
                    </a>
                </h1>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
