import React from "react";
import "./homepage.css";
import "./flogo.jpg";
import "./mylogo.png";
// import "./logic";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
import { useNavigate } from "react-router-dom";

//Problems: if resolved plz explain how
// 1. images not loading
// 2. All icons including: follow us , and those 3
// 3. chk in login signup showing again

export default function HomePage(props) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <>
        <header>
          <div className="container">
            <div className="logo">
              <a href="#">
                <img src="mylogo.png" alt="Fintech Company Name" />
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#contact">Contact US</a>
                </li>
                <li className="login-signup" onClick={handleLogin}>
                  <a href="#">Login/Signup</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Welcome to Cloud Capitalists!</h1>
              <p>
                We provide innovative solutions to help you manage your finances
                and achieve your financial goals.
              </p>
              <a href="#" className="btn btn-primary" onClick={handleLogin}>
                Get Started
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>About Cloud Capitalists</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  suscipit eleifend mauris ac consectetur. Donec quis sem ut
                  magna interdum venenatis.
                </p>
                <p>
                  Donec ullamcorper, dui vel fermentum aliquam, risus magna
                  finibus velit, sed interdum est elit in leo. Morbi sit amet
                  vulputate quam. Duis nec augue nec nulla pharetra sodales at
                  ac nisi.
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
              <div className="col-md-6">
                {/* <img src="logo.jpg" alt="About Fintech Company Name" /> */}
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div className="container">
            <h2>Our Features</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="feature-item">
                  <i className="fas fa-mobile-alt" />
                  <h3>Mobile App</h3>
                  <p>
                    Manage your finances on the go with our mobile app,
                    available for iOS and Android devices.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-item">
                  <i className="fas fa-chart-line" />
                  <h3>Investment Tools</h3>
                  <p>
                    Maximize your investment returns with our suite of
                    investment tools and resources.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-item">
                  <i className="fas fa-shield-alt" />
                  <h3>Security</h3>
                  <p>
                    Your data is safe with us. We use the latest encryption and
                    security technologies to protect your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ac neque nec eros vehicula consequat ut at odio."
                  </p>
                  <div className="testimonial-author">
                    <img src="flogo.jpg" alt="Testimonial Author" />
                    <h4>John Doe</h4>
                    <span>CEO, XYZ Corporation</span>
                  </div>
                </div>
              </div>
              {/* <div class="col-md-4">
      <div class="testimonial">
        <p>
          "Fusce sed aliquam tortor, eget ultricies risus. Vivamus varius
          sed mauris eu bibendum. Aliquam id ipsum a turpis efficitur
          iaculis."
        </p>
        <div class="testimonial-author">
          <img src="testimonial-author-2.jpg" alt="Testimonial Author" />
          <h4>Jane Smith</h4>
          <span>Investor</span>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="testimonial">
        <p>
          "Praesent sit amet sem et felis bibendum cursus. Aliquam vitae
          leo vel felis blandit consectetur. Pellentesque laoreet enim
          quis nulla tincidunt, sit amet vulputate justo gravida."
        </p>
        <div class="testimonial-author">
          <img src="testimonial-author-3.jpg" alt="Testimonial Author" />
          <h4>James Johnson</h4>
          <span>Small Business Owner</span>
        </div>
      </div>
    </div> */}
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="services" className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="feature-item">
                  <i className="fas fa-mobile-alt" />
                  <h3>Investment Management</h3>
                  <p>
                    Manage your finances on the go with our mobile app,
                    available for iOS and Android devices.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-item">
                  <i className="fas fa-chart-line" />
                  <h3>Financial Planning</h3>
                  <p>
                    Maximize your investment returns with our suite of
                    investment tools and resources.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-item">
                  <i className="fas fa-shield-alt" />
                  <h3>Financial Calculating</h3>
                  <p>
                    Your data is safe with us. We use the latest encryption and
                    security technologies to protect your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="services">
<div class="container">
  <h2>Our Services</h2>
  <div class="row">
    <div class="col-md-4">
      <div class="service">
        <i class="fas fa-chart-line"></i>
        <h3>Investment Management</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          neque nec eros vehicula consequat ut at odio.
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="service">
        <i class="fas fa-file-invoice-dollar"></i>
        <h3>Financial Planning</h3>
        <p>
          Maximize your investment returns with our suite of investment
          tools and resources.
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="service">
        <i class="fas fa-file-invoice-dollar"></i>
        <h3>Financial Calculating</h3>
        <p>
          Your data is safe with us. We use the latest encryption and
          security technologies to protect your information.
        </p>
      </div>
    </div>
  </div>
</div>
    </section> */}
        <section className="pricing">
          <div className="container">
            <h2>Pricing</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h3>Basic</h3>
                    <div className="price">
                      $9<span>/mo</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>1 Account</li>
                      <li>5 Transactions</li>
                      <li>1 Budget</li>
                      <li>1 Goal</li>
                    </ul>
                    <a href="#" className="btn btn-primary">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
              {/* <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h3>Pro</h3>
          <div class="price">$29<span>/mo</span></div>
        </div>
        <div class="card-body">
          <ul>
            <li>5 Accounts</li>
            <li>50 Transactions</li>
            <li>5 Budgets</li>
            <li>3 Goals</li>
          </ul>
          <a href="#" class="btn btn-primary">Choose Plan</a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h3>Premium</h3>
          <div class="price">$99<span>/mo</span></div>
        </div>
        <div class="card-body">
          <ul>
            <li>Unlimited Accounts</li>
            <li>Unlimited Transactions</li>
            <li>Unlimited Budgets</li>
            <li>Unlimited Goals</li>
          </ul>
          <a href="#" class="btn btn-primary">Choose Plan</a>
        </div>
      </div>
    </div> */}
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="htext"
                    name="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="hemail"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required=""
                    defaultValue={""}
                    style={{ backgroundColor: "#fff" }}
                  />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              {/* <div class="col-md-4">
      <h4>About Us</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        faucibus ipsum vitae nulla porttitor mattis. Fusce quis semper
        urna, at egestas enim.
      </p>
    </div> */}
              <div className="col-md-4">
                {/* <h4>Contact Us</h4> */}
                <p>
                  Ahmedabad
                  <br />
                  Gujarat, India 380058
                </p>
                <p>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                  <br />
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
              <hr />
              <div className="col-md-4">
                <h4>Follow Us</h4>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <p>© 2023 Cloud Capitalists. All rights reserved.</p>
          </div>
        </footer>
      </>
    </>
  );
}

// export default HomePage;
