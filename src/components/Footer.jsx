import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full py-5 footer-wrap"> 
            <div className="text-center">
                <ul className="flex justify-center">
                    <li className="w-6">
                        <a href="https://github.com/YISEO" target="_blank" rel="noreferrer">
                            <img src={github} alt="github logo" />
                        </a>
                    </li>
                    <li className="w-6 ml-4">
                        <a href="https://www.linkedin.com/in/yiseo1122" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin logo" />
                        </a>
                    </li>
                </ul>

                <p className="mt-2.5 text-sm">Made with ❤ by Joy Kwon</p>
            </div>
        </footer>
    );
}

export default Footer;