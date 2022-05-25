import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main container mx-auto py-28 text-white justify-between gap-10">
        <div className="footer-text-1">
          <h4>Dee's Estate</h4>
          <p>
            Solution for easy and flexible house hunting.You can trust us
            anywhere through this platform
          </p>
        </div>
        <div className="footer-text">
          <h4>Property</h4>
          <p>Learning Modules</p>
          <p>Partnership</p>
          <p>Watch demo</p>
          <p>Event</p>
        </div>
        <div className="footer-text">
          <h4>About</h4>
          <p>Our Company</p>
          <p>Career</p>
          <p>Investors Relations</p>
          <p>Social Impact</p>
        </div>
        <div className="footer-text">
          <h4>Resources</h4>
          <p>Contact</p>
          <p>Give feedback</p>
          <p>System status</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
