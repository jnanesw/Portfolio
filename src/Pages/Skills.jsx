import "./Skills.css";
import JavaScript from "../assets/JavaScript.svg"
import React from "../assets/React.svg"
import Express from "../assets/express.svg"
import Git from "../assets/Git.svg"
import Java from "../assets/Java.svg"
import Linux from "../assets/Linux.svg"
import MicroServices from "../assets/Microservices.png"
import MongoDB from "../assets/MongoDB.svg"
import MySql from "../assets/MySql.svg"
import NodeJs from "../assets/NodeJs.svg"
import Spring from "../assets/Spring.svg"
import TailwindCSS from "../assets/TailwindCss.svg"

function Skills(){
    return (
        <div className="skills-details">
            <div className="header">
                <span>Skills</span>
                <p>Tools and technologies I am really good at:</p>
            </div>
            <div className="skills">
                <div className="details">
                    <span className="skill-span">
                        <img src={JavaScript} className="skill-img" />
                        <p className="skill-name">JavaScript</p>
                    </span>
                    <span className="skill-span">
                        <img src={React} className="skill-img" />
                        <p className="skill-name">React</p>
                    </span>
                    <span className="skill-span">
                        <img src={Express} className="skill-img" />
                        <p className="skill-name">Express</p>
                    </span>
                    <span className="skill-span">
                        <img src={Git} className="skill-img" />
                        <p className="skill-name">Git</p>
                    </span>
                    <span className="skill-span">
                        <img src={Java} className="skill-img" />
                        <p className="skill-name">Java</p>
                    </span>
                    <span className="skill-span">
                        <img src={Linux} className="skill-img" />
                        <p className="skill-name">Linux</p>
                    </span>
                </div>
                <div className="details">
                    <span className="skill-span">
                        <img src={MicroServices} className="skill-img lg:ml-5" />
                        <p className="skill-name">MicroServices</p>
                    </span>
                    <span className="skill-span">
                        <img src={MongoDB} className="skill-img" />
                        <p className="skill-name">MongoDB</p>
                    </span>
                    <span className="skill-span">
                        <img src={MySql} className="skill-img" />
                        <p className="skill-name">MySql</p>
                    </span>
                    <span className="skill-span">
                        <img src={NodeJs} className="skill-img" />
                        <p className="skill-name">NodeJs</p>
                    </span>
                    <span className="skill-span">
                        <img src={Spring} className="skill-img" />
                        <p className="skill-name">Spring</p>
                    </span>
                    <span className="skill-span">
                        <img src={TailwindCSS} className="skill-img" />
                        <p className="skill-name">TailwindCSS</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills;