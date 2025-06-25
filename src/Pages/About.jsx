import Tony from "../assets/SideImg.png";
import Lpu from "../assets/Lpu.webp";
import "./About.css";

function About() {
  return (
    <div>
      <div className="just-for-heading">
        <p className="heading">About me</p>
        <div className="about">
          <img className="MrStark" src={Tony} alt="Profile" />
          <div className="me">
            <span className="para">
              A self-driven and passionate software developer with hands-on experience in building full-stack web applications using <span className="highlight">ReactJS</span>, <span className="highlight">Node.js</span>, <span className="highlight">Tailwind CSS</span>, and <span className="highlight">Material UI</span>. Strong foundation in <span className="highlight">Python</span>, <span className="highlight">C++</span>, and <span className="highlight">JavaScript</span> with a keen interest in developing scalable, user-friendly software. Experienced in industry-level development through an internship at Celebal Technologies, and skilled in data analysis using <span className="highlight">Pandas</span>, <span className="highlight">Matplotlib</span>, and <span className="highlight">Plotly</span>.
            </span>
            <span className="para">
              Known for rapid learning, curiosity-driven development, and problem-solving ability. Enthusiastic about writing clean, maintainable code and eager to contribute to meaningful projects while continuing to grow as a developer.
            </span>
            <span className="education">
              <h1 className="edu-title">Education</h1>
              <div className="uni-details">
                <div><img src={Lpu} className="university" alt="LPU" /></div>
                <div>
                  <p className="duration">Aug, 2020 - Jul, 2024</p>
                  <p className="degree">B.Tech, Computer Science</p>
                  <p className="college">Lovely Professional University</p>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
