import React from "react";
import { Link } from "react-router-dom";
import b1 from "./Image/blog/b1.jpg"
import b2 from "./Image/blog/b2.jpg"
import b3 from "./Image/blog/b3.jpg"
import b4 from "./Image/blog/b4.jpg"
import a5 from "./Image/about/a4.png"


function Blog() {
  return (
    <div>
      <section id="header">
        <a href>
          <img src="img/logo.png" class="logo" alt="" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a class="active" href="Blog.html">
                Blog
              </a>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <a href="Contact.html">Contact</a>
            </li>
            <li id="lg-bag">
              <a href="Cart.html">
                <i class="mdi mdi-cart"></i>
              </a>
            </li>
            <a href id="close">
              <i class="mdi mdi-close"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <i class="mdi mdi-cart"></i>
          </a>
          <i id="bar" class="mdi mdi-menu"></i>
        </div>
      </section>

      <section id="page-header" class="blog-header">
        <h2>#readmore</h2>

        <p>Read all case studies about our products</p>
      </section>

      <section id="blog">
        <div class="blog-box">
          <div class="blog-img">
            <img src={b1} alt="" />
          </div>
          <div class="blog-details">
            <h4>The cotton jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book, Raclette Waistcoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href>CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src={b2} alt="" />
          </div>
          <div class="blog-details">
            <h4>How to style a Quiff</h4>
            <p>
              Kickstarter man braid godard coloring book, Raclette Waistcoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href>CONTINUE READING</a>
          </div>
          <h1>13/04</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src={b3} alt="" />
          </div>
          <div class="blog-details">
            <h4>Have AniBen Items</h4>
            <p>
              Kickstarter man braid godard coloring book, Raclette Waistcoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href>CONTINUE READING</a>
          </div>
          <h1>13/09</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img
              src={b4}
              alt=""
            />
          </div>
          <div class="blog-details">
            <h4>Runway-Inspired Trends</h4>
            <p>
              Kickstarter man braid godard coloring book, Raclette Waistcoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href>CONTINUE READING</a>
          </div>
          <h1>13/02</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src={a5} alt="" />
          </div>
          <div class="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>
              Kickstarter man braid godard coloring book, Raclette Waistcoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href>CONTINUE READING</a>
          </div>
          <h1>13/06</h1>
        </div>
      </section>

      <section id="pagination" class="section-p1">
        <a href>1</a>
        <a href="blog2.html">2</a>
        <a href>3</a>
      </section>

      <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Sign Up for Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="your email address" />
          <button class="normal">Sign Up</button>
        </div>
      </section>

      <footer class="section-p1">
        <div class="col">
          <img class="logo" src="img/logo.png" alt="" />
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
          <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
              <i class="mdi mdi-facebook"></i>
              <i class="mdi mdi-pinterest"></i>
              <i class="mdi mdi-instagram"></i>
              <i class="mdi mdi-twitter"></i>
              <i class="mdi mdi-youtube"></i>
            </div>
          </div>
        </div>

        <div class="col">
          <h4>About</h4>
          <a href="about.html">About Us</a>
          <a href>Delivery Information</a>
          <a href>Privacy Policy</a>
          <a href>Terms & Condition</a>
          <a href="contact.html">Contact Us</a>
        </div>

        <div class="col">
          <h4>My Account</h4>
          <a href>My Account</a>
          <a href>Sign In</a>
          <a href>View Cart</a>
          <a href>My Wishlist</a>
          <a href>Track My Order</a>
          <a href>Help</a>
        </div>

        <div class="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div class="row">
            <img src="img/pay/app.jpg" alt="" />
            <img src="img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payments Gateways</p>
          <img src="img/pay/pay.png" alt="" />
        </div>

        <div class="copyright">
          <p>© 2022 Aniben Collection</p>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
