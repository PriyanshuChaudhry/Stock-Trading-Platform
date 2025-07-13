import React from "react";

function Stats() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row d-flex flex-column-reverse flex-lg-row align-items-center">

          
          <div className="col-12 col-lg-6 py-4 px-3 px-lg-5">
            <h2 className="fw-bold mb-4">Your Trust, Our Responsibility</h2>

            <div className="mb-4">
              <h4 className="fs-5 fw-semibold">Built for Everyday Investors</h4>
              <p className="text-muted mb-0">
                Inphinity Stocks is trusted by thousands across India for seamless, secure, and smart investing. No matter your experience level.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fs-5 fw-semibold">No Clutter. Just Clarity.</h4>
              <p className="text-muted mb-0">
                No spam. No noise. Just real time tools and insights to help you invest with confidence.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fs-5 fw-semibold">All-in-One Stock Ecosystem</h4>
              <p className="text-muted mb-0">
                From IPOs to Mutual Funds to Derivatives, access every financial product under one sleek platform, fully integrated.
              </p>
            </div>

            <div>
              <h4 className="fs-5 fw-semibold">Smarter Features. Better Results.</h4>
              <p className="text-muted mb-0">
                With intelligent alerts, automated insights, and precision tools. We help you trade smarter, not harder.
              </p>
            </div>
          </div>

         
          <div className="col-12 col-lg-6 text-center py-4 px-3 px-lg-5">
            <img
              src="media/images/ecosystem.png"
              alt="Inphinity Stocks Ecosystem"
              className="img-fluid"
              style={{ maxWidth: "90%", borderRadius: "100px"}}
            />

            <div className="mt-4">
              <a href="#" className="me-4 text-decoration-none text-primary fw-semibold">
                Explore Inphinity Tools <i class="ri-arrow-right-up-line"></i>
              </a>
              <a href="#" className="text-decoration-none text-primary fw-semibold">
                Try Demo <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Stats;
