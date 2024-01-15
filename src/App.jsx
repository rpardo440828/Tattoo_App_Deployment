import React from "react";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/HomePage";
import Portfolio from "./pages/Portfolio/PortfolioPage";
import FAQ from "./pages/FAQPage/FAQPage";
import Small from "./pages/Portfolio/Sub/SmPage/SmPage";
import Medium from "./pages/Portfolio/Sub/MPage/MPage";
import Large from "./pages/Portfolio/Sub/LPage/LPage";
import XLarge from "./pages/Portfolio/Sub/XLPage/XLPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
        <div className="Nav">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/small" element={<Small />} />
          <Route path="/portfolio/medium" element={<Medium />} />
          <Route path="/portfolio/large" element={<Large />} />
          <Route path="/portfolio/xtra_large" element={<XLarge />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
        <div className="foot">
          <Footer />
        </div>
        <ScrollToTop />
    </div>
  );
}

export default App;
