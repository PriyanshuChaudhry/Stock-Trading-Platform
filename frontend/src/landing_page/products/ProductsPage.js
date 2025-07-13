import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Experience lightning fast trading with Kite, a sleek and intuitive platform offering live market data, pro charts, and seamless usage on both Android and iOS."
        tryDemo="#kite"
        learnMore="#kite"
        googlePlay="#kite"
        appStore="#kite"
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="Your central dashboard for managing trades, tracking investments, and analyzing performance with beautiful visualizations and powerful insights."
        learnMore="#console"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Invest in direct mutual funds with zero commission directly into your Demat account. Fully digital and available across mobile devices."
        tryDemo="#coin"
        learnMore="#coin"
        googlePlay="#coin"
        appStore="#coin"
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Use our simple HTTP/JSON APIs to build your own trading platforms or investment tools. Ideal for startups, developers, and fintech innovators."
        learnMore="#kiteconnect"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDesription="Learn the stock market on the go! Varsity offers structured lessons, bite-sized learning cards, and engaging illustrations, all in your pocket."
        tryDemo="#varsity"
        learnMore="#varsity"
        googlePlay="#varsity"
        appStore="#varsity"
      />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out {" "}
        <a
          href="#"
          className="fw-semibold text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          TheInphinityStocks.tech <i className="ri-arrow-right-up-line"></i>
        </a>{" "}
        blog.
      </p>

      <Universe />
    </>
  );
}

export default PricingPage;
