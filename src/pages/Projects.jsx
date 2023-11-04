import { Link } from "react-router-dom";
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"
import project4 from "../assets/project-4.png"
import project5 from "../assets/project-5.png"

function Projects() {
    return (
        <section className="max-w-4xl">
            <h2 className="lg:text-3xl sm:text-2xl text-xl mt-10 mb-7">Projects</h2>
            <div className="projects-box">
                <ul className="flex flex-wrap">
                    <li className="w-full ">
                        <img className="w-full h-48" src={project1} alt="The main screen of Agronomix with crop background" />
                        <h3 className="mt-3 lg:text-lg font-bold">Agronomix</h3>
                        <p className="mt-1 text-sm">Supplying location-based data and weather insights to benefit farmers and stakeholders</p>
                        <div className="mt-4">
                            <Link to="https://github.com/amattock/Agronomix" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs">
                                View the code
                            </Link>
                            <Link to="https://github.io/amattock/agronomix" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2">
                                View the app
                            </Link>
                        </div>
                    </li>
                    <li className="w-full mt-8 sm:ml-5 sm:mt-0">
                        <img className="w-full h-48" src={project2} alt="The main screen of Recipe Eats with delicious dessert photos" />
                        <h3 className="mt-3 lg:text-lg font-bold">Recipe Eats</h3>
                        <p className="mt-1 text-sm">Explore diverse recipes, discover new flavors, and challenge your culinary skills</p>
                        <div className="mt-4">
                            <Link to="https://github.com/KDonnelly33/Recipe-review" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs">
                                View the code
                            </Link>
                            <Link to="https://protected-escarpment-11572-48e550723f6b.herokuapp.com/" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2">
                                View the app
                            </Link>
                        </div>
                    </li>
                    <li className="w-full mt-8">
                        <img className="w-full h-48" src={project3} alt="The main screen of Weather dashboard with search area on the left" />
                        <h3 className="mt-3 lg:text-lg font-bold">Weather Dashboard</h3>
                        <p className="mt-1 text-sm">Stay informed about the weather with the Weather Dashboard app</p>
                        <div className="mt-4">
                            <Link to="https://github.com/YISEO/weather-challenge-6" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs">
                                View the code
                            </Link>
                            <Link to="https://yiseo.github.io/weather-challenge-6/" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2">
                                View the app
                            </Link>
                        </div>
                    </li>
                    <li className="w-full mt-8 sm:ml-5">
                        <img className="w-full h-48" src={project4} alt="A table-style schedule list with the current time highlighted in red" />
                        <h3 className="mt-3 lg:text-lg font-bold">Work Day Scheduler</h3>
                        <p className="mt-1 text-sm">Manage your workday with the Scheduler app, your ideal time-management companion</p>
                        <div className="mt-4">
                            <Link to="https://github.com/YISEO/scheduler-challenge-5" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs">
                                View the code
                            </Link>
                            <Link to="https://yiseo.github.io/scheduler-challenge-5/" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2">
                                View the app
                            </Link>
                        </div>
                    </li>
                    <li className="w-full mt-8">
                        <img className="w-full h-48" src={project5} alt="The problem is displayed on the screen, and the remaining time is shown on the right" />
                        <h3 className="mt-3 lg:text-lg font-bold">Coding quiz challenge</h3>
                        <p className="mt-1 text-sm">Try to answer the following code-related questions within the time limit</p>
                        <div className="mt-4">
                            <Link to="https://github.com/YISEO/quiz-challenge-4" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs">
                                View the code
                            </Link>
                            <Link to="https://yiseo.github.io/quiz-challenge-4/" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2">
                                View the app
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Projects;