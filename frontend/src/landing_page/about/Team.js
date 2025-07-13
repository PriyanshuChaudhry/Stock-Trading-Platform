import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row pt-5 mt-5 border-top">
        <h1 className="text-center">People Behind Inphinity</h1>
      </div>

      <div className="row align-items-center py-5 mb-5 text-muted">
        <div className="col-md-6 d-flex flex-column align-items-center mb-4 mb-md-0">
          <img
            src="media/images/priyanshu.jpg"
            alt="Priyanshu Chaudhary"
            className="rounded-circle"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              border: "4px solid #e0e0e0",
              objectPosition: "center -40px",
            }}
          />
          <h4 className="mt-4 mb-1 text-dark text-center">
            Priyanshu Chaudhary
          </h4>
          <h6 className="text-secondary text-center">Founder, CEO & CTO </h6>
        </div>

        <div className="col-md-6 px-4 text-dark">
          <p>
            Priyanshu founded Inphinity Stocks with a mission to make stock
            trading in India simpler, smarter, and accessible to all. With a
            strong background in computer science and a deep passion for
            fintech, he envisions transforming how new age investors engage with
            the market.
          </p>
          <p>
            Apart from building modern trading tools, he focuses on educating
            and empowering the next generation of investors through practical
            resources and open platforms.
          </p>
          <p>
            A believer in consistent self growth and innovation, Priyanshu
            balances his work with a love for fitness and startup ideation.
          </p>
          <p>
            Connect on{"  "}
            <a
              href="https://www.linkedin.com/in/priyanshu-chaudhary-1b7593255/"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-decoration-none"
            >
              LinkedIn <i class="ri-linkedin-box-fill"></i>
            </a>
            {"  "}/{"  "}
            <a
              href="https://codolio.com/profile/priyanshu_chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-none"
            >
              Portfolio <i class="ri-info-card-fill"></i>
            </a>
            {"  "}/{"  "}
            <a
              href="https://x.com/Priyanshu_C_K?t=DpbK4iWCQjhHBS-a5FW3CA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-none"
            >
              Twitter <i class="ri-twitter-x-fill"></i>
            </a>
            /{" "}
            <a
              href="https://github.com/PriyanshuChaudhry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-none"
            >
              Github <i class="ri-github-fill"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
