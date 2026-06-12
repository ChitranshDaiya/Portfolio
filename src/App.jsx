import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

console.log(
  "%c Hi... a curious one? 👀", 
  "color: #053da4; font-size: 24px; font-weight: bold; font-family: 'Playfair Display', serif; padding: 10px 0;"
);
console.log(
  "%c You deserve to share your thoughts and give feedback. Mail me at daichitransh@gmail.com ✉️", 
  "color: #555; font-size: 14px; font-family: 'Work Sans', sans-serif;"
);

// A helper component to ensure the page scrolls to the top when navigating routes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
