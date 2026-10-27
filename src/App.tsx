import { Routes, Route } from "react-router";
import HomePage from "./app/page";
import Navbar from "./components/Navbar";
import About from "./app/about/page";
import Resume from "./app/resume/page";
import Projects from "./app/projects/page";
import ProjectPage from "./app/projects/[slug]/page";
import NotFound from "./app/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
