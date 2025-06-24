import  { useState } from "react";
import Header from "./components/Header";
import SkillCard from "./components/SkillCard";
import { skills } from "./data/portfolio"; // Replace with real source (context or API)

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <div className="skills-container">
      <Header title="Skills" showBackButton />

      <div className="categories-scroll">
        <button
          className={`category-btn ${!selectedCategory ? "active" : ""}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div className="skill-card-wrapper" key={skill.id}>
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
