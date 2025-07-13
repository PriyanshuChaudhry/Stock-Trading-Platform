import React from "react";

function Brokerage() {
  return (
    <div className="container border-top mt-5 mb-5 pt-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Brokerage & Charges</h2>
        <p className="text-muted fs-6">
          Transparent and simple pricing. No hidden fees. Know your costs upfront.
        </p>
      </div>

      <div className="row g-4">
       
        <div className="col-12 col-md-8">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">Brokerage Calculator</h5>
              <ul className="text-muted small" style={{ lineHeight: "1.9" }}>
                <li>
                  ₹50 + GST per order for Call & Trade and RMS auto-squareoff.
                </li>
                <li>
                  Contract notes are sent via email. Physical copies cost ₹20 + courier.
                </li>
                <li>
                  NRI (Non-PIS): 0.5% or ₹100 per equity order (whichever is lower).
                </li>
                <li>
                  NRI (PIS): 0.5% or ₹200 per equity order (whichever is lower).
                </li>
                <li>
                  ₹40 per executed order if account is in debit balance.
                </li>
              </ul>
              <a href="#" className="btn btn-outline-primary mt-3">
                Try Calculator
              </a>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow-sm d-flex align-items-center justify-content-center text-center p-4">
            <div>
              <h5 className="fw-semibold mb-3">Full List of Charges</h5>
              <p className="text-muted small">
                View the detailed breakdown of all Inphinity Stocks account charges.
              </p>
              <a href="#" className="btn btn-primary mt-2">
                View Charges
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
