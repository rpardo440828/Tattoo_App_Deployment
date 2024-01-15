import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="Home">
      <div className="container">
        <HeroSection />
      </div>
      
    </div>
  );
};

export default HomePage;