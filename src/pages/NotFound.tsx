import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! This screen does not exist.</h1>
      <Link to="/" style={styles.link}>
        Go to home screen!
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: 20,
    textAlign: "center" as const,
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "#007bff",
    textDecoration: "underline",
    fontSize: "16px",
  },
};
