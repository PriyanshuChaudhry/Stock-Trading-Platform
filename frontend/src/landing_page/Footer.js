import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top">
      <div className="container py-5">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mb-4">
            <a
              className="navbar-brand d-flex align-items-center justify-content-center justify-content-md-start mb-3"
              href="#"
              style={{ whiteSpace: "nowrap" }}
            >
              <img
                src="media/images/favicon.png"
                alt="Inphinity Stocks"
                style={{ height: "30px", width: "auto", objectFit: "contain" }}
              />
              <h5 className="fw-bold fs-5 ms-2">
                <strong>Inphinity</strong> <span style={{ color: "#6f42c1" }}>Stocks</span>
              </h5>
            </a>
            <p className="text-muted small">
              &copy; 2024 Inphinity Stocks. All rights reserved.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none ">About</a></li>
              <li><a href="#" className="text-decoration-none ">Products</a></li>
              <li><a href="#" className="text-decoration-none ">Pricing</a></li>
              <li><a href="#" className="text-decoration-none ">Careers</a></li>
              <li><a href="#" className="text-decoration-none ">Blog</a></li>
              <li><a href="#" className="text-decoration-none ">Media</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none ">Contact</a></li>
              <li><a href="#" className="text-decoration-none ">Help Center</a></li>
              <li><a href="#" className="text-decoration-none ">Downloads</a></li>
              <li><a href="#" className="text-decoration-none ">FAQs</a></li>
              <li><a href="#" className="text-decoration-none ">List of Charges</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none">Open an Account</a></li>
              <li><a href="#" className="text-decoration-none ">Fund Transfer</a></li>
              <li><a href="#" className="text-decoration-none ">Kite Demo</a></li>
              <li><a href="#" className="text-decoration-none ">Security Tips</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-4 border-top pt-3">
          <p className="text-muted small">
            Investments in securities market are subject to market risks. Read all investment related documents carefully before investing. Inphinity Stocks is a modern platform built for transparency and simplicity, we never offer unsolicited investment advice or trading tips.
          </p>
          <p className="text-muted small">
            Always ensure your contact information is up-to-date with your broker. Receive trade confirmations directly from exchanges on your registered mobile and email.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
