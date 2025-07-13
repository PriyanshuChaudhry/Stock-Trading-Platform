import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
      <div className="text-center">
        <h1 className="display-4 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted mb-4">
          Oops! It seems like the page you're looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary px-4 py-2">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
