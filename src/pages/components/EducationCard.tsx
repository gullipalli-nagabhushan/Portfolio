import React from "react";
import styles from "./EducationCard.module.css";
import type { Education } from "../types/portfolio";
import { FiMapPin } from "react-icons/fi";

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {education.logo && (
          <img src={education.logo} alt="Institution Logo" className={styles.logo} />
        )}
        <div className={styles.headerContent}>
          <h3 className={styles.institution}>{education.institution}</h3>
          <p className={styles.degree}>
            {education.degree} in {education.field}
          </p>
          <p className={styles.date}>
            {formatDate(education.startDate)} - {formatDate(education.endDate)}
          </p>
          {education.location && (
            <div className={styles.location}>
              <FiMapPin size={14} />
              <span>{education.location}</span>
            </div>
          )}
        </div>
      </div>

      {education.description && <p className={styles.description}>{education.description}</p>}
    </div>
  );
};

export default EducationCard;
