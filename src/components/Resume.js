import React from "react";

function Resume() {
    return (
        <section className="my-5">
            <div className="my-2">
                <p>
                    Download my <a href="https://docs.google.com/document/d/1OOxIGQNgq2afmb0CGv4sRLPzMXgOKx6Ef-LYJ-xBfU4/edit?usp=sharing">resume!</a>
                </p>
                <h3>Front-end Skills</h3>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Skills</h3>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;