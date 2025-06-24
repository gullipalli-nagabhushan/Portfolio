// src/components/SectionHeader.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { theme } from "../../constants/theme";

interface SectionHeaderProps {
  title: string;
  navigateTo?: string;
}

export default function SectionHeader({ title, navigateTo }: SectionHeaderProps) {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      {navigateTo && (
        <button onClick={() => navigate(navigateTo)} style={styles.viewAllButton}>
          <span style={styles.viewAllText}>View All</span>
          <FiChevronRight size={16} color={theme.colors.primary} />
        </button>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
    padding: `0 ${theme.spacing.md}px`,
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.text,
  },
  viewAllButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  viewAllText: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.primary,
    marginRight: theme.spacing.xs,
    fontWeight: theme.typography.fontWeights.medium,
  },
};
