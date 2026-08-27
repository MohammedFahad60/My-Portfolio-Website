import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";


function Page({ title }: { title: string }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#070707",
        color: "white",
        padding: "150px 20px",
      }}
    >
      <h1>{title}</h1>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <PageTransition />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}