import Project from '../components/Project';

import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"
import project4 from "../assets/project-4.png"
import project5 from "../assets/project-5.png"

const projectsData = [
    {
        imgUrl: project1,
        alt: 'The main screen of Agronomix with crop background',
        title: 'Agronomix',
        description: 'Supplying location-based data and weather insights to benefit farmers and stakeholders',
        viewCode: 'https://github.com/amattock/Agronomix',
        viewApp: 'https://amattock.github.io/Agronomix/',
        marginLeft: false
    },
    {
        imgUrl: project2,
        alt: 'The main screen of Recipe Eats with delicious dessert photos',
        title: 'Recipe Eats',
        description: 'Explore diverse recipes, discover new flavors, and challenge your culinary skills',
        viewCode: 'https://github.com/KDonnelly33/Recipe-review',
        viewApp: 'https://protected-escarpment-11572-48e550723f6b.herokuapp.com/',
        marginLeft: true
    },
    {
        imgUrl: project3,
        alt: 'The main screen of Weather dashboard with search area on the left',
        title: 'Weather Dashboard',
        description: 'Stay informed about the weather with the Weather Dashboard app',
        viewCode: 'https://github.com/YISEO/weather-challenge-6',
        viewApp: 'https://yiseo.github.io/weather-challenge-6/',
        marginLeft: false
    },
    {
        imgUrl: project4,
        alt: 'A table-style schedule list with the current time highlighted in red',
        title: 'Work Day Scheduler',
        description: 'Manage your workday with the Scheduler app, your ideal time-management companion',
        viewCode: 'https://github.com/YISEO/scheduler-challenge-5',
        viewApp: 'https://yiseo.github.io/scheduler-challenge-5/',
        marginLeft: true
    },
    {
        imgUrl: project5,
        alt: 'The problem is displayed on the screen, and the remaining time is shown on the right',
        title: 'Coding quiz challenge',
        description: 'Try to answer the following code-related questions within the time limit',
        viewCode: 'https://github.com/YISEO/quiz-challenge-4',
        viewApp: 'https://yiseo.github.io/quiz-challenge-4/',
        marginLeft: false
    },
]

function Projects() {
    return (
        <section className="max-w-4xl">
            <h2 className="lg:text-3xl sm:text-2xl text-xl mt-10 mb-7">Projects</h2>
            <div className="projects-box">
                <ul className="flex flex-wrap">
                    {projectsData.map(( project, index ) => (
                        <Project key={index} {...project}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects;