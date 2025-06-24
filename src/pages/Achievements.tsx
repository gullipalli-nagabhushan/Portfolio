import React from "react";
import AchievementCard from "./components/AchievementCard";
import Header from "./components/Header";
import { achievements } from "./data/portfolio"; // Replace with actual data or context

const Achievements: React.FC = () => {
  const isWideScreen = window.innerWidth > 768;

  return (
    <div className="achievements-container">
      <Header title="Achievements" />

      <div className={`achievements-scroll ${isWideScreen ? "wide" : ""}`}>
        <div className={isWideScreen ? "achievements-grid" : ""}>
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={isWideScreen ? "achievement-card-wrapper" : ""}
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
