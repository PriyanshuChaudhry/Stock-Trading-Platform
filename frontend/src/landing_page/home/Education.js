import React from "react";

function Education() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">

         
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <img
              src="media/images/education.svg"
              alt="Education"
              className="img-fluid"
              style={{ maxWidth: "80%", objectFit: "contain" }}
            />
          </div>

          
          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-3">Learn Stock Markets for Free</h2>
            <p className="text-muted">
              Introducing <strong>Inphinity Learn</strong> is our free, self-paced learning platform to master the world of trading and investing. From beginner basics to advanced strategies, we’ve got you covered.
            </p>
            <a href="#" className="text-decoration-none text-primary fw-semibold">
              Start Learning <i className="ri-arrow-right-up-line"></i>
            </a>

            <p className="mt-5 text-muted">
              Join our <strong>Inphinity Community</strong> — India’s most curious trading tribe. Ask questions, share insights, and grow together.
            </p>
            <a href="#" className="text-decoration-none text-primary fw-semibold">
              Visit Community <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;
