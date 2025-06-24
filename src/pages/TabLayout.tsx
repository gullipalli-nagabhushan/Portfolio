import { NavLink, Outlet } from "react-router-dom";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoPersonOutline,
  IoTrophyOutline,
} from "react-icons/io5";


export default function TabLayout() {
  return (
    <div className="tab-layout">
      <Outlet />

      <nav className="tab-bar">
        <NavLink to="/" end className="tab-link">
          <IoHomeOutline size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/projects" className="tab-link">
          <IoBriefcaseOutline size={24} />
          <span>Projects</span>
        </NavLink>
        <NavLink to="/skills" className="tab-link">
          <IoBriefcaseOutline size={24} />
          <span>Skills</span>
        </NavLink>
        <NavLink to="/experience" className="tab-link">
          <IoBriefcaseOutline size={24} />
          <span>Experience</span>
        </NavLink>
        <NavLink to="/education" className="tab-link">
          <IoSchoolOutline size={24} />
          <span>Education</span>
        </NavLink>
        <NavLink to="/achievements" className="tab-link">
          <IoPersonOutline size={24} />
          <span>Achievements</span>
        </NavLink>
        <NavLink to="/about" className="tab-link">
          <IoTrophyOutline size={24} />
          <span>About</span>
        </NavLink>
      </nav>
    </div>
  );
}
