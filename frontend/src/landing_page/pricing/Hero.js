import React from "react";

function Hero() {
  return (
    <div className="container">
      
      <div className="row p-4 mt-5 border-bottom text-center">
        <h1 className="fw-bold">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Enjoy zero brokerage on investments & flat ₹20 on trades
        </h3>
      </div>

     
      <div className="border-bottom row text-center mt-5 mb-5 justify-content-center">
        
        <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free Equity Delivery"
            style={{ maxWidth: "200px", height: "auto" }}
            className="mb-3"
          />
          <h2 className="fs-5 fw-semibold">Free Equity Delivery</h2>
          <p className="text-muted px-3">
            ₹0 brokerage on all equity delivery trades, invest without fees.
          </p>
        </div>

        
        <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday & F&O"
            style={{ maxWidth: "200px", height: "auto" }}
            className="mb-3"
          />
          <h2 className="fs-5 fw-semibold">Intraday and F&O Trades</h2>
          <p className="text-muted px-3">
            Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodities.
          </p>
        </div>

        
        <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free Mutual Funds"
            style={{ maxWidth: "200px", height: "auto" }}
            className="mb-3"
          />
          <h2 className="fs-5 fw-semibold">Free Direct Mutual Funds</h2>
          <p className="text-muted px-3">
            ₹0 commissions and DP charges on all direct mutual fund investments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
