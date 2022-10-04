import React from "react";
import { removeHyphensAndCapitalize } from "../utils/helpers";

function Project({ project}) {

    const { name, description, link, repo } = project;

    return (
        <div classnmame="project" key={name}>
            <img
                src={require(`../../assets/projects/${name}.jpg`)}
                alt={removeHyphensAndCapitalize(name)}
                className="project-bg"
            />
            <div className="project-text">
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Project;