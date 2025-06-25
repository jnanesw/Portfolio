import Resume from "../assets/Resume.pdf"
import { TypeAnimation } from "react-type-animation";
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import photoImg from "../assets/photo3.png";
import { GitHub, LinkedIn } from '@mui/icons-material';
import { IoLogoMedium } from "react-icons/io5";

import "./Home.css";

function Home(){
  return(
    <div className="home-main">
      <div className="info">
        <div className="roles">
          <p className="greet">Hey!</p>
          <h1 className="name">I'm <span className="text-[#842059]">Jnaneswar</span></h1>
          <TypeAnimation 
            sequence={[
              "Software Developer", 600,
              "Web Developer", 600,
              "Technical Writer", 600,
            ]}
            
            wrapper="span"
            repeat={Infinity}
            className="role"
          />
        </div>
        <div className="social">
          <p className="follow-me">
            <span>Follow me</span> 
            <span><a href="https://github.com/jnanesw" target="_blank"><GitHub /></a></span>
            <span><a href="https://www.linkedin.com/in/jnaneswarrao7794/" target="_blank"><LinkedIn /></a></span>
            <span><a href="https://medium.com/@jnaneswarraonerella" target="_blank"><IoLogoMedium className="h-8 w-5" /></a></span>
          </p>
          <p className="address"><LocationOnOutlinedIcon /> <span>Andhra Pradesh, India</span></p>
        </div>
        <div className="buttons">
          <span className="button border-none"> <MailIcon className="icon" /> <a href="mailto:jnaneswarraonnerella@gmail.com">Email me</a></span>
          <span className="button bg-[#2B152F]"> <DownloadIcon className="icon" /> <span><a href={Resume} target="_blank">Resume</a></span></span>
        </div>
      </div>
      <div className="photo">
          <img src={photoImg} alt="Author photo" />
      </div>
      <div>
        <p className="follow-me2">
            <span>F</span>
            <span>o</span>
            <span>l</span>
            <span>l</span>
            <span>o</span> 
            <span>w</span> 
            <span className="lg:mt-6 md:mt-8"></span> 
            <span>m</span> 
            <span>e</span> 
            <span className="mt-8"><a href="https://github.com/jnanesw" target="_blank"><GitHub /></a></span>
            <span><a href="https://www.linkedin.com/in/jnaneswarrao7794/" target="_blank"><LinkedIn /></a></span>
            <span><a href="https://medium.com/@jnaneswarraonerella" target="_blank"><IoLogoMedium className="h-8 w-5" /></a></span>
          </p>
      </div>
    </div>
  )
}

export default Home;