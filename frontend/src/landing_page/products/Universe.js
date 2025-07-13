import React from "react";

function Universe() {
  const universeItems = [
    {
      img: "media/images/favicon.png",
      title: "Curated stock baskets",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "media/images/sensibullLogo.svg",
      title: "Inphinity Learn",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: "media/images/goldenpiLogo.png", 
      title: "Educational content platform",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      img: "media/images/streakLogo.png",
      title: "Market research & insights",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "media/images/smallcaseLogo.png",
      title: "Smallcase",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      img: "media/images/dittoLogo.png",
      title: "AI powered trading tools",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container border-top mt-5">
      <div className="text-center mt-5">
        <h1 className="fw-bold">The Inphinity Universe</h1>
        <p className="text-muted fs-5">
          Supercharge your trading experience with our ecosystem of smart platforms and partners.
        </p>
      </div>

      <div className="row mt-4">
        {universeItems.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center text-center p-4"
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ maxWidth: "80px", height: "auto", marginBottom: "15px" }}
            />
            <h5 className="fw-semibold">{item.title}</h5>
            <p className="text-muted small">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary px-4 py-2 fs-5">Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
