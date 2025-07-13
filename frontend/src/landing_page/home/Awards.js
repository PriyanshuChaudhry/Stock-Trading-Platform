import React from "react";

function Awards() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          
          
          <div className="col-lg-6 text-center">
            <img
              src="media/images/largestBroker.svg"
              alt="Award Illustration"
              className="img-fluid"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>

          
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <h2 className="fw-bold mb-3">
                India's Most Trusted New Age Stock Trading Platform
              </h2>
              <p className="mb-4">
                Thousands of smart investors choose <strong>Inphinity Stocks</strong> for a fast, secure & modern investing experience.
              </p>

              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="ri-funds-fill text-primary me-2"></i> Futures and Options
                    </li>
                    <li className="mb-2">
                      <i className="ri-funds-fill text-primary me-2"></i> Commodity derivatives
                    </li>
                    <li className="mb-2">
                      <i className="ri-funds-fill text-primary me-2"></i> Currency derivatives
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="ri-stock-fill text-success me-2"></i> Stocks & IPOs
                    </li>
                    <li className="mb-2">
                      <i className="ri-stock-fill text-success me-2"></i> Direct mutual funds
                    </li>
                    <li className="mb-2">
                      <i className="ri-stock-fill text-success me-2"></i> Bonds & Govt. Securities
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4">
                <img
                  src="media/images/pressLogos.png"
                  alt="Press Logos"
                  className="img-fluid"
                  style={{ maxWidth: "90%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
