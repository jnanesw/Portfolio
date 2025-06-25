import TCS from "../assets/tcs.svg";
import Celebal from "../assets/celebal.webp";
import "./Experience.css";

function Experience() {
  return (
    <div className="min-h-screen w-screen max-w-[100vw] overflow-x-hidden flex items-center justify-center bg-purple-300">
        <div className="experience-container">
        <div className="experience-header">
            <h1 className="experience-title">Experience</h1>
            <p className="experience-subtitle">Here is a quick summary of my most recent experiences:</p>
        </div>

        <div className="experience-list">
            <div className="experience-card tcs-border bg-opacity-95 shadow-lg">
                <img src={TCS} className="experience-logo tcs-ring" alt="TCS Logo" />
                <div className="experience-content">
                    <p className="experience-role">Back-End Developer</p>
                    <ul className="experience-points">
                    <li>Debugged production issues and improved API performance</li>
                    <li>Focused on building scalable, secure, and maintainable backend services that integrated with multiple systems.</li>
                    <li>Worked as a backend developer in a large-scale enterprise project, responsible for designing and maintaining RESTful APIs and business logic using Spring</li>
                    </ul>
                    <p className="experience-duration">July 2024 - Present</p>
                </div>
            </div>

            <div className="experience-card celebal-border bg-opacity-95 shadow-lg">
                <img src={Celebal} className="experience-logo celebal-ring" alt="Celebal Logo" />
                <div className="experience-content">
                    <p className="experience-role">React JS Developer</p>
                    <ul className="experience-points">
                    <li>This internship gave me an emphasis on learning new skills with a deeper understanding of concepts through the hands-on application of Industrial knowledge.</li>
                    </ul>
                    <p className="experience-duration">May 2023 - July 2023</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Experience;
