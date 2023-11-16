/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Project({ imgUrl, alt, title, description, viewCode, viewApp, marginLeft }) {
    return (
        <li className={`w-full mb-8 ${marginLeft ? "sm:ml-5" : ""}`}>
            <img className="w-full h-48" src={imgUrl} alt={alt} />
            <h3 className="mt-3 lg:text-lg font-bold">{title}</h3>
            <p className="mt-1 text-sm">{description}</p>
            <div className="mt-4">
                <Link to={viewCode} target="_blank" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs">
                    View the code
                </Link>
                <Link to={viewApp} target="_blank" className="py-2 px-3 border rounded-lg text-center hover:bg-white hover:text-dark duration-500 text-xs ml-2">
                    View the app
                </Link>
            </div>
        </li>
    );
}

export default Project;
