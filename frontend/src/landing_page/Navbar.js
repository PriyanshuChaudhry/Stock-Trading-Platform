import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-white navbar-expand-lg sticky-top shadow-sm" style={{ zIndex: 1030 }}>
      <div className="container d-flex align-items-center justify-content-between py-1">
        
        <NavLink className="navbar-brand d-flex align-items-center justify-content-center mb-0" to="/" style={{ whiteSpace: "nowrap" }}>
          <img
            src="media/images/favicon.png"
            alt="Inphinity Stocks"
            style={{
              height: "45px",
              width: "auto",
              objectFit: "contain"
            }}
          />
          <h2 className="fw-bold fs-3">
            <strong>Inphinity</strong> <span style={{ color: "rgb(43 83 147)" }}>Stocks</span>
          </h2>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center text-center mt-3 mt-lg-0">
            {[
              { name: "Home", path: "/" },
              { name: "Sign Up", path: "/signup" },
              { name: "About", path: "/about" },
              { name: "Product", path: "/products" },
              { name: "Pricing", path: "/pricing" },
              { name: "Support", path: "/support" },
            ].map((item, idx) => (
              <li key={idx} className="nav-item px-2">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-semibold text-primary"
                      : "nav-link fw-semibold text-dark"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
