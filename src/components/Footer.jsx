import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
    return (
        <footer className="footer"> 
            <div className="footer-box">
                <ul className="sns-lists">
                    <li>
                        <a href="https://github.com/YISEO" target="_blank" rel="noreferrer">
                            <img src={github} alt="github logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yiseo1122" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin logo" />
                        </a>
                    </li>
                </ul>

                <p>Made with ❤ by Joy Kwon</p>
            </div>
        </footer>
    );
}

export default Footer;