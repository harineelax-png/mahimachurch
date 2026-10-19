import React from "react";
import Hero from "../sections/Hero";
import WelcomeSection from "../sections/WelcomeSection";
// import QuickLinks from "../sections/QulickLinks";
import QuickLinks from "../sections/QulickLinks";
import Mission from "./Mission";
import MissionVision from "../sections/Missions";

function Home () {
    return (
        <div>
             <Hero />
             <WelcomeSection/>
             <MissionVision/>
             <Mission/>
             <QuickLinks/>
        </div>
    )
}

export default Home