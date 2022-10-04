import React from "react";
import Project from "./Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: "Groove",
            description: "Groove is a simple productivity app specifically designed this to keep you from only focusing on the tasks that you are doing and nothing else. This is not just to keep track of your todos, you can also use this to track your habits. Get into the Groove.",
            link: "https://groovey.herokuapp.com",
            repo: "https://github.com/dennismacc/Groove"
        },
        {
            name: "DÜDL",
            description: "DÜDL is a multiplayer drawing and guessing game that can be played with friends anytime, anywhere!",
            link: "https://dudl.herokuapp.com",
            repo: "https://github.com/dennismacc/DUDL-Game"
        },
        {
            name: "Tech Blog",
            description: "Tech Blog app allows tech writers to create CMS-style blog sites that publish articles, blog posts, and other content. The app follows he MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
            link: "https://tech-blog-macc.herokuapp.com/",
            repo: "https://github.com/dennismacc/Tech-Blog",    
        },
        {
            name: "What's Streamin'?",
            description: "A simple web application that randomly generates a movie or show to watch based on user input criteria.",
            link: "https://dennismacc.github.io/Whats-Streamin/",
            repo: "https://github.com/dennismacc/Stream_Availability",
        },
        {
            name: "E-Commerce Back End",
            description: "Built out back end for a sample internet retail company that uses the latest technologies to make their website more competitive with other e-commerce companies.",
            repo: "https://github.com/dennismacc/E-Commerce-Back-End",
        },
        {
            name: "Employee Tracker",
            description: "Command-line application that can be used to manage a company's employee database. It allows users to easily view and interact with information stored in databases, and manage the departments, roles, and employees in a company.",
            repo: "https://github.com/dennsmacc/Employee-Tracker",
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                        project={project}
                        key={"project" + idx}
                    ></Project>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;

