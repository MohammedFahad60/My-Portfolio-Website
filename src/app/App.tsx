import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/navigation/PageTransition";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Experience from "../pages/Experience/Experience";
import Contact from "../pages/Contact/Contact";
import CustomCursor from "../components/CustomCursor";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import NotFound from "../pages/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />

      <PageTransition />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}