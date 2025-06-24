import React from "react";
import ExperienceCard from "./components/ExperienceCard";
import Header from "./components/Header";
import { experiences } from "./data/portfolio"; // replace this with zustand/store if you're using it

const Experience: React.FC = () => {
  const isWideScreen = window.innerWidth > 768;

  return (
    <div className="experience-container">
      <Header title="Experience" />

      <div className={`experience-scroll ${isWideScreen ? "wide" : ""}`}>
        <div className={isWideScreen ? "experience-layout" : ""}>
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={isWideScreen ? "experience-card-wrapper" : ""}
            >
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
