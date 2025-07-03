import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer for the current page */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <p>© 2025 Job Portal. All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com/ErGauravRajput" target="_blank">Gaurav Kumar</a>
        </p>
        <p>
          <p>Privacy Policy | Terms of Service</p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
