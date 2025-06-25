import project1 from "../assets/FoodOrder.png";
import project2 from "../assets/ReviewScrapper.jpg";
import project3 from "../assets/project3.jpg";
import "./Work.css";

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <h2 className="work-title">Projects</h2>
        <p className="work-subtitle">A few highlights of my recent work:</p>
      </div>

      <div className="project-list">
        <div className="project-card">
          <img src={project1} alt="Project 1" className="project-image" />
          <div className="project-content">
            <div className="tech-tags">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Material UI</span>
            </div>
            <h3 className="project-name">Food Ordering Application</h3>
            <p className="project-duration">May 2023 - Jun 2023</p>
            <p className="project-description">
             User can find the item just by entering the name of it. Users have the option to fast search their orders based on preferences. This website consists of various food items which can ordered from any device (Responsive).
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={project2} alt="Project 3" className="project-image" />
          <div className="project-content">
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">BeautifulSoup</span>
            </div>
            <h3 className="project-name">Review Scraper</h3>
            <p className="project-duration">Apr 2022 - May 2022</p>
            <p className="project-description">
                Extracting the Name, Rating, and Comment of the Reviewer of an Item on the Flipkart web page and storing all the data in MongoDB by creating new Database and Collections.
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={project3} alt="Project 2" className="project-image" />
          <div className="project-content">
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Matplotlib</span>
              <span className="tech-tag">Plotify</span>
              <span className="tech-tag">Seaborn</span>
              <span className="tech-tag">Pandas</span>
            </div>
            <h3 className="project-name">Uber Data Analysis</h3>
            <p className="project-duration">Jan 2022 - Feb 2022</p>
            <p className="project-description">
              Analyzing uber bookings using popular libraries like matplotlib, plotly, and seaborn and visualizing which area has more bookings in a Map. Located areas on a world map where more bookings are made, using folium library.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;