import resumeFile from "../assets/resume.pdf";
import { Link } from "react-router-dom";

function Resume() {
    return (
        <section className="flex flex-col justify-center">
            <div className="py-4">
                <p className="text-xl">
                    Here is my resume file<br />
                    Please download it
                </p>
                <h2 className="mt-5">
                    <Link to={resumeFile} download="Resume(Joy)-PDF" target="_blank"
                        className="block py-3 px-2 border border-gold rounded-lg text-center text-gold hover:bg-gold hover:text-dark duration-500"
                    >
                        Download file
                    </Link>
                </h2>

                <div className="mt-8">
                    <h3 className="text-lg text-gold">Front-end proficiencies</h3>
                    <ul className="mt-3">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Responsive Design</li>
                    </ul>

                    <h3 className="mt-5 text-lg text-gold">Back-end proficiencies</h3>
                    <ul className="mt-3">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>APIs</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;