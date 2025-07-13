import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top my-5 py-5 ">
      <div className="row align-items-center">
        
        
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>

        
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDesription}</p>

        
          <div className="mb-4">
            {tryDemo && (
              <a href={tryDemo} className="btn btn-outline-primary me-3">
                Try Demo
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="btn btn-link text-decoration-none fw-semibold">
                Learn More <i class="ri-arrow-right-up-line"></i>
              </a>
            )}
          </div>

        
          <div className="d-flex justify-content-center justify-content-md-start flex-wrap">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  style={{ height: "40px", marginRight: "20px" }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                  style={{ height: "40px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
