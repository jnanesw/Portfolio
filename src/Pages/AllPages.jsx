// import Header from "./components/Header"
import About from './About';
import Skills from './/Skills';
import Experience from "./Experience";
import Contact from "./Contact";
import Work from "./Work"
import Home from "./Home"

function AllPages(){
    return(
        <>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Work />
            <Contact />
        </>
    )
}

export default AllPages;