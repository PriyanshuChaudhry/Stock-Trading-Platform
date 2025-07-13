import React from "react";

function CreateTicket() {
  return (
    <div className="container border-top py-5">
     
      <h2 className="fw-bold fs-4 mb-4">To create a ticket, select a relevant topic</h2>

     
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
       
        <div className="col">
          <h5 className="fw-semibold fs-5 mb-3">
            <i className="ri-add-circle-line me-2"></i>Account Opening
          </h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Resident individual</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Minor</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Non Resident Indian (NRI)</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Company, Partnership, HUF and LLP</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Glossary</a></li>
          </ul>
        </div>

        
        <div className="col">
          <h5 className="fw-semibold fs-5 mb-3">
            <i className="ri-user-line me-2"></i>Your Inphinity Account
          </h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Your Profile</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Account modification</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Client Master Report (CMR)</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Nomination</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Transfer and conversion of securities</a></li>
          </ul>
        </div>

        <div className="col">
          <h5 className="fw-semibold fs-5 mb-3">
            <i className="ri-stock-line me-2"></i>Trading with Inphinity
          </h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">IPO</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Trading FAQs</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Margin Trading & Leverage</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Charts and Orders</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Alerts and Nudges</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">General</a></li>
          </ul>
        </div>
      </div>

      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      
        <div className="col">
          <h5 className="fw-semibold fs-5 mb-3">
            <i className="ri-bank-card-line me-2"></i>Funds
          </h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Add money</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Withdraw money</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Add bank accounts</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">eMandates</a></li>
          </ul>
        </div>

        
        <div className="col">
          <h5 className="fw-semibold fs-5 mb-3">
            <i className="ri-dashboard-line me-2"></i>Dashboard Console
          </h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Portfolio</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Corporate actions</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Funds statement</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Reports</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Profile</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Segments</a></li>
          </ul>
        </div>

        
        <div className="col">
          <h5 className="fw-semibold fs-5 mb-3">
            <i className="ri-copper-coin-line me-2"></i>Inphinity Coin
          </h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Mutual funds</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">National Pension Scheme (NPS)</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Fixed Deposit (FD)</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Features on Coin</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">Payments and Orders</a></li>
            <li><a href="#" className="text-primary text-decoration-none d-block mb-1">General</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
