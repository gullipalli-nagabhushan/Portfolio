import React from "react";
import type { Profile } from "../types/portfolio";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

interface AboutTabProps {
  profile: Profile;
}

export const AboutTab: React.FC<AboutTabProps> = ({ profile }) => {
  const formatDisplayText = (url: string): string => {
    if (!url) return "";
    let formatted = url.replace(/^https?:\/\/(www\.)?/i, "");
    return formatted.replace(/\/+$/, "");
  };

  const contactItems = [
    { icon: <FaEnvelope />, label: "Email", value: profile.email },
    { icon: <FaPhone />, label: "Phone", value: profile.phone },
    { icon: <FaMapMarkerAlt />, label: "Location", value: profile.location },
    { icon: <FaGithub />, label: "GitHub", value: profile.github },
    { icon: <FaLinkedin />, label: "LinkedIn", value: profile.linkedin },
    { icon: <SiHackerrank />, label: "HackerRank", value: profile.hackerrank },
  ].filter((item) => item.value);

  const handleClick = (label: string, value: string) => {
    if (label === "Email") window.open(`mailto:${value}`, "_blank");
    else if (label === "Phone") window.open(`tel:${value}`, "_blank");
    else if (label === "Location")
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(value)}`, "_blank");
    else window.open(value, "_blank");
  };

  const handleViewResume = () => {
    if (!profile.resumeImage) return;
    let url = profile.resumeImage;
    if (url.includes("drive.google.com") && !url.includes("/view")) {
      url = `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(url)}`;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="about-tab">
      <section>
        <h2>About Me</h2>
        <div className="about-card">
          <p>{profile.summary}</p>
        </div>
      </section>

      <section>
        <h2>Contact Information</h2>
        <div className="contact-card">
          {contactItems.map((item, index) => (
            <div
              className="contact-item"
              key={index}
              onClick={() => handleClick(item.label, item.value!)}
            >
              <div className="contact-icon">{item.icon}</div>
              <div>
                <p className="contact-label">{item.label}</p>
                <p className="contact-value">{formatDisplayText(item.value!)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="resume-button" onClick={handleViewResume}>
        <FaFileAlt />
        <span>View Resume</span>
      </button>
    </div>
  );
};

export default AboutTab;