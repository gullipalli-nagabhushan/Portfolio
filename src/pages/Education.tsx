import React from "react";
import Header from "./components/Header";
import EducationCard from "./components/EducationCard";
import CertificateCard from "./components/CertificateCard";
import SectionHeader from "./components/SectionHeader";
import { education, certificates } from "./data/portfolio"; // replace with your state/store if needed

const Education: React.FC = () => {
  const isWideScreen = window.innerWidth > 768;

  return (
    <div className="education-container">
      <Header title="Education & Certificates" />

      <div className={`education-content ${isWideScreen ? "wide" : ""}`}>
        <div className="education-columns">
          <div className="education-column">
            <SectionHeader title="Education" />
            {education.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>

          <div className="education-column">
            <SectionHeader title="Certificates" />
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
