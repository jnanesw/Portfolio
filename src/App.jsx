import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import Header from "./components/Header"
import About from './Pages/About';
import Skills from './Pages/Skills';
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work"

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  )
}

export default App;