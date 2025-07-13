import React from "react";

function Pricing() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          
          
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">Simple & Transparent Pricing</h2>
            <p className="text-muted">
              At Inphinity Stocks, we believe great investing tools should be affordable for everyone.
              No hidden fees. No complicated structures. Just flat pricing, always.
            </p>
            <a href="#" className="text-decoration-none fw-semibold text-primary">
              View Full Pricing <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

          
          <div className="col-12 col-md-6">
            <div className="row text-center g-3">
              <div className="col-12 col-sm-6">
                <div className="p-4 border rounded h-100">
                  <h1 className="fw-bold text-success">₹0</h1>
                  <p className="text-muted mb-0">
                    Zero fees on <br /> Equity Delivery & Mutual Funds
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="p-4 border rounded h-100">
                  <h1 className="fw-bold text-danger">₹20</h1>
                  <p className="text-muted mb-0">
                    Flat fees on <br /> Intraday & F&O Orders
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
