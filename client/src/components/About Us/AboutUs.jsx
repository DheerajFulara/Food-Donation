import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="info-text">
        <h1 className="info-heading">Share The Meal</h1>
        <p className="info-subheading">
          This is a place where we aim to feed the hungry by connecting generous donors 
          with those in need. Through our collective efforts, we gather food donations 
          from individuals, organizations, and communities to ensure that no one goes to bed hungry.
          <br /><br />
          With every contribution, big or small, we bring hope to someone’s plate and strive 
          toward a future free of hunger and malnutrition. Join us in making a real difference—one meal at a time.
        </p>
      </div>
      <div className="info-img"></div>
    </div>
  );
};

export default AboutUs;
