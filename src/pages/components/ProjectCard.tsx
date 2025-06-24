import React from "react";
import type { Project } from "../types/portfolio";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div style={styles.card}>
      {project.image && (
        <img src={project.image} alt={project.title} style={styles.image} />
      )}

      <div style={styles.content}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.description}>{project.description}</p>

        <div style={styles.techStack}>
          {project.technologies.map((tech, index) => (
            <span key={index} style={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        <div style={styles.buttons}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              <IoGlobeOutline size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1.5rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "1rem",
  },
  title: {
    margin: "0 0 0.5rem 0",
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  description: {
    fontSize: "0.95rem",
    color: "#444",
    marginBottom: "0.75rem",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  techBadge: {
    backgroundColor: "#eef2f7",
    color: "#333",
    padding: "0.3rem 0.6rem",
    borderRadius: "5px",
    fontSize: "0.8rem",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    textDecoration: "none",
    padding: "0.4rem 0.8rem",
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    color: "#333",
    fontSize: "0.85rem",
    transition: "background-color 0.2s",
  },
};

export default ProjectCard;
