import React from "react";
import type { Profile } from "../types/portfolio";
import { Mail, Phone, MapPin, Award } from "react-feather";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ProfileHeaderProps {
  profile: Profile;
}

const openLink = (url: string) => {
  if (!url) return;
  const formattedUrl = url.includes("@")
    ? `mailto:${url}`
    : url.startsWith("+")
    ? `tel:${url}`
    : url.startsWith("http")
    ? url
    : `https://${url}`;
  window.open(formattedUrl, "_blank", "noopener,noreferrer");
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div style={styles.container}>
      <div style={styles.avatarSection}>
        <img src={profile.avatar} alt={profile.name} style={styles.avatar} />
      </div>

      <div style={styles.infoSection}>
        <h2 style={styles.name}>{profile.name}</h2>
        <p style={styles.title}>{profile.title}</p>
        <div style={styles.location}>
          <MapPin size={16} />
          <span style={{ marginLeft: 4 }}>{profile.location}</span>
        </div>

        <div style={styles.socials}>
          <button onClick={() => openLink(profile.email)} style={styles.iconBtn}><Mail size={20} /></button>
          {profile.phone && <button onClick={() => openLink(profile.phone)} style={styles.iconBtn}><Phone size={20} /></button>}
          {profile.website && <button onClick={() => openLink(profile.website)} style={styles.iconBtn}><Award size={20} /></button>}
          {profile.github && <button onClick={() => openLink(profile.github)} style={styles.iconBtn}><FaGithub size={20} /></button>}
          {profile.linkedin && <button onClick={() => openLink(profile.linkedin)} style={styles.iconBtn}><FaLinkedin size={20} /></button>}
          {profile.twitter && <button onClick={() => openLink(profile.twitter)} style={styles.iconBtn}><FaTwitter size={20} /></button>}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    gap: "1rem",
  },
  avatarSection: {
    flex: "0 0 auto",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    objectFit: "cover",
  },
  infoSection: {
    flex: "1",
    minWidth: "250px",
  },
  name: {
    fontSize: "1.5rem",
    margin: "0 0 0.5rem 0",
  },
  title: {
    fontSize: "1rem",
    color: "#666",
    margin: "0 0 0.5rem 0",
  },
  location: {
    display: "flex",
    alignItems: "center",
    color: "#444",
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  socials: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.25rem",
    color: "#333",
  },
};

export default ProfileHeader;
