import { useEffect, useState } from "react";
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Home from './assets/containers/home/index.jsx'
import About from './assets/containers/about/index.jsx'
import Resume from './assets/containers/resume/index.jsx'
import Skills from './assets/containers/skills/index.jsx'
import Portfolio from './assets/containers/portfolio/index.jsx'
import Contact from './assets/containers/contact/index.jsx'
import Navbar from './assets/components/navBar/index.jsx'
import particles from './assets/utils.js/particles.js'

function App() {

  const location = useLocation();
  console.log(location);

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const renderParticleJsInHomePage = location.pathname === '/';

  return (
    <>
      <div className="App">

        {/* particles background */}
        {renderParticleJsInHomePage && init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particles}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}

        {/* Navbar */}
        <Navbar />

        {/* main page content */}

        <div className="App__main-page-content">

          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </div>

      </div>
    </>
  )
}

export default App;
