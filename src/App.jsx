import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'; // Adjust the path if needed
import Home from './components/home/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Course from './components/courses/Course';
import GeoSyllabus from './components/notes/geography/GeoSyllabus';
import Universe from './components/notes/geography/astronomy/Universe';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/geography" element={<GeoSyllabus />} />
        {/* astronomy  */}
        <Route path="/universe" element={<Universe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
