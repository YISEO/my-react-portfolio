import MainImage from "../assets/main-bg.png";

function About() {
    return (
        <section className="flex flex-col justify-center items-center py-6 text-center">
            <div className="inline-block">
                <img src={MainImage} alt="main image" />
            </div>
            <div className="lg:w-4/5 about-text">
                <p className="mt-7 lg:text-3xl font-bold ">
                    Hello, I&#39;m Joy Kwon<br />
                    Web Developer
                </p>
                <p className="mt-7">
                    I have gained approximately 2 years of experience as a web developer in Korea.<br />
                    I thoroughly enjoyed collaborating with the design team to produce user-friendly outcomes.<br />
                    Crafting web pages using code and creating a medium for effective client communication is exceptionally gratifying, in my perspective.
                </p>
                <p className="mt-7">
                    <strong className="text-xl">Previous Work</strong><br />
                    In my previous role, I played a key role in the complete redesign of the company&#39;s website, utilizing HTML, CSS, and jQuery to develop the web pages and making minor adjustments to simple PHP code when needed.
                    I embarked on a new project collaborating with fellow developers to build a chatbot, but my journey led me to relocate to the United States.
                </p>
            </div>
        </section>
    )
}

export default About;