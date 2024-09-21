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
import Galaxy from './components/notes/geography/astronomy/Galaxy';
import Stars from './components/notes/geography/astronomy/Stars';
import ScrollToTop from './ScrollToTop';
import BlackHole from './components/notes/geography/astronomy/BlackHole';
import CelestialObject from './components/notes/geography/astronomy/CelestialObject';
import SolarSystem from './components/notes/geography/astronomy/SolarSystem';


function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/geography" element={<GeoSyllabus />} />
        {/* astronomy  */}
        <Route path="/universe" element={<Universe />} />
        <Route path="/galaxies" element={<Galaxy />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/black-holes" element={<BlackHole />} />
        <Route path="/celestial-objects" element={<CelestialObject />} />
        <Route path="/solar-system" element={<SolarSystem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
