import React from "react";

function Hero() {
  return (
    <section className="container-fluid pt-5 pb-5 bg-info text-white">
      
      <div className="d-flex justify-content-between align-items-center px-5 pt-4">
        <h4 className="fw-semibold">Inphinity Support</h4>
        <a href="#" className="text-white text-decoration-underline">Track Tickets</a>
      </div>

      
      <div className="row px-5 py-4">
        
        <div className="col-12 col-lg-7 mb-4">
          <h2 className="fs-4 fw-normal mb-4">
            Need help? Search or explore topics to raise a support ticket
          </h2>

          
          <div className="bg-white rounded d-flex align-items-center px-3 py-2 mb-4" style={{ maxWidth: "800px" }}>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Eg: how to activate intraday, resolve order rejection, F&O rules..."
            />
            <i className="ri-search-line text-secondary fs-5 ms-2"></i>
          </div>

          
          <div className="d-flex flex-wrap gap-4">
            <a href="#" className="text-white text-decoration-underline">Track account opening</a>
            <a href="#" className="text-white text-decoration-underline">Margin policies</a>
            <a href="#" className="text-white text-decoration-underline">Inphinity App guide</a>
            <a href="#" className="text-white text-decoration-underline">Withdrawals & deposits</a>
          </div>
        </div>

        
        <div className="col-12 col-lg-5">
          <h2 className="fs-4 fw-normal mb-3">Featured Updates</h2>
          <ol className="text-white ps-3">
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-underline">
                Account settlement policy update – July 2025
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-underline">
                List of delisted stocks from August 29, 2025
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Changes to Inphinity trading limits (New)
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
