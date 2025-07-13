import React from "react";

function Hero() {
  return (
    <div className="container">
     
      <div className="row py-5 mt-5 mb-4 text-center">
        <div className="col">
          <h1 className="fs-2">
           <strong>Redefining Stock Trading in India.</strong><br></br>
            Inphinity Stocks is not just a platform, it's a movement towards smarter, faster, and more transparent investing.
          </h1>
          
        </div>
      </div>

     
      <div
        className="row border-top py-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        
        <div className="col-md-6 mb-4 mb-md-0 px-4">
          <p>
            Founded in 2025, Inphinity Stocks was built with one mission in mind:
            to eliminate complexity and high costs from retail trading. We focus
            on user first design, robust tools, and absolute pricing clarity.
          </p>
          <p>
            Today, we serve thousands of traders across India with powerful
            features, zero-commission delivery, and a suite of modern investing
            products, all in one place.
          </p>
          <p>
            With every trade placed through our platform, we get closer to our
            vision of a financially literate and empowered India.
          </p>
        </div>

        
        <div className="col-md-6 px-4">
          <p>
            Beyond trading, we are deeply invested in educating the next
            generation of investors. Our learning modules, blog articles, and community forums make learning accessible to all.
          </p>
          <p>
            Our fintech initiatives aim to support rising startups and
            innovation in capital markets. We're proud of our commitment to
            transparency, technology, and trust.
          </p>
          <p>
            Want to stay updated? Follow us on our official channels and see
            how we’re reshaping the future of investing, one update at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
