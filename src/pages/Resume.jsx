import resumeFile from "../assets/resume.pdf";
import { Link } from "react-router-dom";

function Resume() {
    return (
        <section className="flex flex-col justify-center">
            <p className="text-xl">
                Here is my resume file<br />
                Please download it
            </p>
            <h2 className="mt-5 max-w-">
                <Link to={resumeFile} download="Resume(Joy)-PDF" target="_blank" 
                    className="block py-3 px-2 border border-gold rounded-lg text-center text-gold hover:bg-gold hover:text-dark duration-500"
                >
                    Download file
                </Link>
            </h2>
            
        </section>
    )
}

export default Resume;