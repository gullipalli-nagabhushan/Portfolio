import React from "react";
import type { Certificate } from "../types/portfolio";
import { FiExternalLink } from "react-icons/fi";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const handleOpenUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const verifyNPTEL = () => {
    handleOpenUrl("https://nptel.ac.in/nptelstars/disciplinestars#:~:text=Gullipalli%20Nagabhushan");
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        {certificate.logo && (
          <img src={certificate.logo} alt="Logo" style={styles.logo} />
        )}
        <div style={styles.headerContent}>
          <h3 style={styles.name}>{certificate.name}</h3>
          <p style={styles.issuer}>{certificate.issuer}</p>
          <p style={styles.date}>
            Issued: {formatDate(certificate.date)}
            {certificate.expiryDate && ` • Expires: ${formatDate(certificate.expiryDate)}`}
          </p>
        </div>
      </div>

      {certificate.description && <p style={styles.description}>{certificate.description}</p>}

      {certificate.credentialId && (
        <p style={styles.credentialId}>Credential ID: {certificate.credentialId}</p>
      )}

      <div style={styles.buttons}>
        {certificate.url && (
          <button style={styles.linkButton} onClick={() => handleOpenUrl(certificate.url)}>
            View Certificate <FiExternalLink />
          </button>
        )}
        <button style={styles.linkButton} onClick={verifyNPTEL}>
          Verify on NPTEL <FiExternalLink />
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  header: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    marginBottom: "0.75rem",
  },
  logo: {
    width: 48,
    height: 48,
    objectFit: "contain",
    borderRadius: "4px",
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: 600,
    margin: 0,
  },
  issuer: {
    fontSize: "0.9rem",
    color: "#555",
    margin: "0.25rem 0",
  },
  date: {
    fontSize: "0.85rem",
    color: "#888",
  },
  description: {
    margin: "0.5rem 0",
    fontSize: "0.95rem",
    color: "#333",
  },
  credentialId: {
    fontSize: "0.85rem",
    color: "#666",
  },
  buttons: {
    marginTop: "0.75rem",
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
  },
  linkButton: {
    backgroundColor: "#f0f0f0",
    border: "none",
    padding: "0.5rem 0.75rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
};

export default CertificateCard;
