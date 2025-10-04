import React from 'react'

function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer
        className="ht-footer full-width-ft"
        style={{
          backgroundColor: "#0d1b2a",   // dark blue background
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between", // left & right
          alignItems: "center"
        }}
      >
        {/* Left Side */}
        <div className="ft-left">
          <p style={{ margin: 0 }}>
            © 2025{" "}
            <span className="logo-inline">
              <span className="star" style={{ color: "#00AEEF", fontWeight: "bold" }}>Star</span>
              <span className="flix" style={{ color: "#F9A825", fontWeight: "bold" }}>Flix</span>
            </span>. All Rights Reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="backtotop">
          <a
            href="#top"
            id="back-to-top"
            onClick={handleBackToTop}
            style={{ color: "#f5c518", textDecoration: "none", fontWeight: "bold" }}
          >
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
