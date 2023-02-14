import React from "react";
import "../App.css";
import BestSeller from "./BestSeller";
import Category from "./Category";
import Contact from "./Contact";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
    <div className="home-sec">
      <Navbar />
      <div className="intro">
        Planting a garden is similar to believing in tommorow.
      </div>
      <div className="desc">
        <p>
          Blessed are you who sow. Every seed you so plant, will grow into
          bountiful crops for great harvest...
        </p>
        <button type="button" className="btn-home">
          Check Now <i className="fa-solid fa-leaf"></i>
        </button>
      </div>

      <div className="image-sec">
        </div> 
        <div className="imag-1"></div>
        </div>
        <div className="category-sec d-flex justify-content-center">
          <Category heading="Plants for Health" url="health-img" />
          <Category heading="Plants for Showcase" url="showcase-img" />
          <Category heading="Plants for Meditation" url="meditation-img" />
          
        </div>
     <div className="bestSell-container">
      <BestSeller/>
     </div>
     <Contact/>
     </>
  );
}

export default Home;


