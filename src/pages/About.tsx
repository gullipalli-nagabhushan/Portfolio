import React from "react";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import AboutTab from "./components/AboutTab";
import { profile } from "./data/portfolio"; // import your actual profile data
import TabLayout from "./TabLayout";


const About: React.FC = () => {
  const isWideScreen = window.innerWidth > 768;

  return (
    <div className="about-container">
      <Header title="About Me" />

      <div className={`about-content ${isWideScreen ? "wide" : ""}`}>
        {isWideScreen ? (
          <div className="about-grid">
            <div className="about-column">
              <ProfileHeader profile={profile} />
            </div>
            <div className="about-column">
              <AboutTab profile={profile} />
            </div>
            <div className="about-column">
                <TabLayout />
            </div>
          </div>
        ) : (
          <>
            <ProfileHeader profile={profile} />
            <AboutTab profile={profile} />
            <TabLayout />
          </>
        )}
      </div>
    </div>
  );
};

export default About;
