import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/sections/Hero";
import About from "./components/pages/About";
import Sundays from "./components/pages/Sundays";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Donate from "./components/pages/Donate";
import Whattoexpect from "./components/pages/whattoexpect";
import Beliefs from "./components/pages/Beliefs";
import Leadership from "./components/pages/Leadersipe";
import Mission from "./components/pages/Mission";
import OurStory from "./components/pages/OurStory";
import VideoSection from "./components/pages/Watchonline"
import Home from "./components/pages/Home"
// import Events from "./components/pages/Events";
import COMEvents from "./components/sections/COMEvents";
import PrayerRequest from "./components/pages/PrayerRequest";
import Care from "./components/pages/Care";
import "./theme.css";
import Footer from "./components/Footer";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* Add space below navbar */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch-online" element={<VideoSection />} />
          <Route path="/locations" element={<Sundays />} />
          <Route path="/donate"  element={<Donate />} />
          <Route path="/what-to-expect" element={<Whattoexpect/>} />
          <Route path="/about/our-story" element={<OurStory />}/>
          <Route path="/about/leadership" element={<Leadership />}/>
          <Route path="/about/mission" element={< Mission/>}/>
          <Route path="/about/beliefs" element={<Beliefs />}/>
          <Route path="/care" element={<Care />}/>
           {/* <Route path="/care" element={<Care />}/> */}
          <Route path="/events" element={<COMEvents />}/>
          <Route path="/prayer" element={<PrayerRequest/>}/>
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;