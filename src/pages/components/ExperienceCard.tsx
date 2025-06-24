import React from "react";
import styles from "./ExperienceCard.module.css";
import type { Experience } from "../types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {experience.logo && (
          <img src={experience.logo} alt={`${experience.company} logo`} className={styles.logo} />
        )}
        <div className={styles.headerContent}>
          <h3 className={styles.company}>{experience.company}</h3>
          <p className={styles.position}>{experience.position}</p>
          <p className={styles.date}>
            {formatDate(experience.startDate)} – {formatDate(experience.endDate)}
          </p>
        </div>
      </div>

      <p className={styles.description}>{experience.description}</p>

      <div className={styles.technologies}>
        {experience.technologies.map((tech, index) => (
          <span key={index} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
