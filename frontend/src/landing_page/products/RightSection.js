import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    
    <div className="container border-top ">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-6 p-4">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDesription}</p>
          <a href={learnMore} className="text-primary fw-semibold" style={{ textDecoration: "none" }}>
            Learn More <i class="ri-arrow-right-up-line"></i>
          </a>
        </div>

        
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
