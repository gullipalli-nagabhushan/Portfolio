import React from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <div style={styles.content}>
        {showBackButton && (
          <button style={styles.backButton} onClick={() => navigate(-1)}>
            <IonIcon icon={arrowBackOutline} style={styles.icon} />
          </button>
        )}
        <h1 style={styles.title}>{title}</h1>
        <div style={styles.rightSpacer}></div>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#f8f9fa",
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #e0e0e0",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  icon: {
    fontSize: "1.5rem",
    color: "#333",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    margin: 0,
  },
  rightSpacer: {
    width: 24,
  },
};

export default Header;
