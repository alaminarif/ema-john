import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const date = today.getFullYear();
  return (
    <div className="footer">
      <p>almin copyright &copy; {date} All rights reserved.</p>
    </div>
  );
};

export default Footer;
