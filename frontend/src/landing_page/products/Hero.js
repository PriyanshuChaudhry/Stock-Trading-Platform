import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="text-center mt-5 px-3">
        <h1 className="fw-bold">Cutting Edge Technology</h1>
        <h3 className="text-muted mt-3 fs-5">
          Intuitive, lightning fast, and reliable trading platforms
        </h3>
        <p className="mt-3 mb-5 text-secondary">
          Discover our range of advanced yet user friendly platforms for every kind of investor.  
          <br className="d-none d-md-block" />
          Explore all{" "}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-decoration-none fw-semibold text-primary"
          >
            investment tools{" "}
            <i class="ri-arrow-right-up-line"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
