import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "./error-boundary";
import Home from "./pages/About";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import "./App.css"; // Optional: global styles
import NotFound from "./pages/NotFound";
import Experience from "./pages/Experience";


export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate splash delay (optional)
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // 0.5s loading screen

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <div className="splash-screen">Loading...</div>; // Replace with real splash screen
  }

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
