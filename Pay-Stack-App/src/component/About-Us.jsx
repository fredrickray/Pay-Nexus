import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import "../vendors/mdi/css/materialdesignicons.min.css"
import { FiMenu } from "react-icons/fi";
import {MdClose} from "react-icons/md"
import f1Pic from "./Image/features/f1.png"
import f2Pic from "./Image/features/f2.png"
import f3Pic from "./Image/features/f3.png"
import f4Pic from "./Image/features/f4.png"
import f5Pic from "./Image/features/f5.png"
import f6Pic from "./Image/features/f6.png"
import vid from "./Image/about/1.mp4"
import about from "./Image/about/a6.jpg"

function About() {
    // const [open, setOpen] = useState(false);
  const bar = document.getElementById("bar");
  const close = document.getElementById("close");
  const nav = document.getElementById("navbar");

  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }

  const date = new Date().getFullYear()

  return (
    <div>
      <section id="header">
        <Link to>
          <img src="img/logo.png" className="logo" alt="" />
        </Link>

        <div>
          <ul id="navbar">
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link className="active" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <Link to id="close">
                <MdClose/>
              {/* <i class="mdi mdi-close"></i> */}
            </Link>
          </ul>
        </div>

        <div id="mobile">
          <FiMenu id="bar"  />
          <i id="bar" className="mdi mdi-menu"></i>
        </div>
      </section>

      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Read all case studies about our products</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={about} alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            assumenda dolorem eveniet. Maiores id vero sapiente repellendus
            aliquid officia illum cum accusamus explicabo dolores aperiam eos,
            magnam repudiandae, sunt pariatur!
          </p>

          <abbr title="">
            Create stunning images with as much or as little contol as you like
            thanks to a choice of Basic and Creative modes
          </abbr>

          <br />
          <br />

          {/* <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little contol as you like thanks to a choice of Basic and Creative modes
            </marquee> */}
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download Our <Link to="https://www.google.com/">App</Link>
        </h1>
        <div className="video">
          <video autoPlay muted loop src={vid}></video>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={f1Pic} alt="" />
          <h6>Free Delivery</h6>
        </div>
        <div className="fe-box">
          <img src={f2Pic} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={f3Pic} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={f4Pic} alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={f5Pic} alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={f6Pic} alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          {/* <img class="logo" src="img/logo.png" alt="" /> */}
          <h4>Contact</h4>
          <p>
            <strong>Adress: </strong> shopping complex, No 32,Kaduna
          </p>
          <p>
            <strong>Phone: </strong> +234-707-734-9
          </p>
          <p>
            <strong>Hours: </strong> shopping complex, No 32,Kaduna
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="mdi mdi-facebook"></i>
              <i className="mdi mdi-pinterest"></i>
              <i className="mdi mdi-instagram"></i>
              <i className="mdi mdi-twitter"></i>
              <i className="mdi mdi-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <Link to>About Us</Link>
          <Link to>Delivery Information</Link>
          <Link to>Privacy Policy</Link>
          <Link to>Terms & Condition</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <Link to>My Account</Link>
          <Link to>Sign In</Link>
          <Link to>View Cart</Link>
          <Link to>My Wishlist</Link>
          <Link to>Track My Order</Link>
          <Link to>Help</Link>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="./Image/pay/pay.png" alt="" />
            <img src="./Image/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payments Gateways</p>
          <img src="./Image/pay/pay.png" alt="" />
        </div>

        <div className="copyright">
          <p>© {date} Fredrick</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
