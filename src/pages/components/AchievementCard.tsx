import React from "react";
import type { Achievement } from "../types/portfolio";
import { FaTrophy, FaGithub, FaMicrophone } from "react-icons/fa";

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const renderIcon = () => {
    switch (achievement.icon) {
      case "award":
      case "trophy":
        return <FaTrophy />;
      case "github":
        return <FaGithub />;
      case "mic":
        return <FaMicrophone />;
      default:
        return <FaTrophy />;
    }
  };

  return (
    <div className="achievement-card">
      <div className="achievement-icon">{renderIcon()}</div>
      <div className="achievement-content">
        <h3 className="achievement-title">{achievement.title}</h3>
        <p className="achievement-date">{formatDate(achievement.date)}</p>
        <p className="achievement-description">{achievement.description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;