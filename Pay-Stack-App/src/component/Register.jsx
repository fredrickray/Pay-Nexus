import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [fnameReg, setFnameReg] = useState("");
  const [lnameReg, setLnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusinessName] = useState("");
  const [business_phone, setBusinessPhone] = useState("");
  const [state, setState] = useState("");
  const [username, setUserName] = useState("");
  // const [address, setAddress] = useState("")
  const [sector, setSector] = useState("");

  const register = () => {
    Axios.post("http://localhost:8080/register", {
      fname: fnameReg,
      lname: lnameReg,
      password: passwordReg,
      email: emailReg,
      phone: phone,
      business_name: business,
      business_phone: business_phone,
      state: state,
      username: username,
      business_sector: sector,
    })
      .then((response) => {
        console.log("response", response);

        if (response) {
          localStorage.setItem("firstname", fnameReg);
          localStorage.setItem("lastname", lnameReg);
          localStorage.setItem("email", emailReg);
          localStorage.setItem("username", username);
          localStorage.setItem("phone", phone);
          localStorage.setItem("business", business);
          localStorage.setItem("business_phone", business_phone);
          localStorage.setItem("state", state);
          window.location.href = "/Home";
        } else {
          console.log("not working");
          alert("Could not Register User");
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
        // window.location.href = "/Home"
        alert("Error");
        console.log(err.config.data);
      });
  };

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    // 'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "button",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  return (
    <div>
      <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
        <div className="container">
          <button
            className="navbar-toggler shadow-none ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link me-2" to="/Register">
                  <i className="fas fa-user-circle opacity-6  me-1"></i>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-2" to="/">
                  <i className="fas fa-key opacity-6  me-1"></i>
                  {/* <Link to="/">Sign In</Link> */}
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}

      <main className="main-content  mt-0">
        <div
          className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg')",
            backgroundPosition: "top",
          }}
        >
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                <p className="text-lead text-white">
                  Use these awesome forms to login or create new account in your
                  project for free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4">
                  <h5>Register with</h5>
                </div>
                <div className="row px-xl-5 px-sm-4 px-3">
                  <div className="col-3 ms-auto px-1">
                    <a
                      className="btn btn-outline-light w-100"
                      href="javascript"
                    >
                      <svg
                        width="24px"
                        height="32px"
                        viewBox="0 0 64 64"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            transform="translate(3.000000, 3.000000)"
                            fillRule="nonzero"
                          >
                            <circle
                              fill="#3C5A9A"
                              cx="29.5091719"
                              cy="29.4927506"
                              r="29.4882047"
                            ></circle>
                            <path
                              d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="col-3 px-1">
                    <a
                      className="btn btn-outline-light w-100"
                      href="javascript"
                    >
                      <svg
                        width="24px"
                        height="32px"
                        viewBox="0 0 64 64"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            transform="translate(7.000000, 0.564551)"
                            fill="#000000"
                            fillRule="nonzero"
                          >
                            <path d="M40.9233048,32.8428307 C41.0078713,42.0741676 48.9124247,45.146088 49,45.1851909 C48.9331634,45.4017274 47.7369821,49.5628653 44.835501,53.8610269 C42.3271952,57.5771105 39.7241148,61.2793611 35.6233362,61.356042 C31.5939073,61.431307 30.2982233,58.9340578 25.6914424,58.9340578 C21.0860585,58.9340578 19.6464932,61.27947 15.8321878,61.4314159 C11.8738936,61.5833617 8.85958554,57.4131833 6.33064852,53.7107148 C1.16284874,46.1373849 -2.78641926,32.3103122 2.51645059,22.9768066 C5.15080028,18.3417501 9.85858819,15.4066355 14.9684701,15.3313705 C18.8554146,15.2562145 22.5241194,17.9820905 24.9003639,17.9820905 C27.275104,17.9820905 31.733383,14.7039812 36.4203248,15.1854154 C38.3824403,15.2681959 43.8902255,15.9888223 47.4267616,21.2362369 C47.1417927,21.4153043 40.8549638,25.1251794 40.9233048,32.8428307 M33.3504628,10.1750144 C35.4519466,7.59650964 36.8663676,4.00699306 36.4804992,0.435448578 C33.4513624,0.558856931 29.7884601,2.48154382 27.6157341,5.05863265 C25.6685547,7.34076135 23.9632549,10.9934525 24.4233742,14.4943068 C27.7996959,14.7590956 31.2488715,12.7551531 33.3504628,10.1750144"></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="col-3 me-auto px-1">
                    <a
                      className="btn btn-outline-light w-100"
                      href="javascript"
                    >
                      <svg
                        width="24px"
                        height="32px"
                        viewBox="0 0 64 64"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            transform="translate(3.000000, 2.000000)"
                            fillRule="nonzero"
                          >
                            <path
                              d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                              fill="#4285F4"
                            ></path>
                            <path
                              d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                              fill="#FBBC05"
                            ></path>
                            <path
                              d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                              fill="#EB4335"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="mt-2 position-relative text-center">
                    <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                      or
                    </p>
                  </div>
                </div>

                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationFirstName"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationFirstName"
                        required
                        placeholder="First Name"
                        aria-label="First Name"
                        onChange={(e) => {
                          setFnameReg(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please provide a Firstname.
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationLastName"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationLastName"
                        required
                        placeholder="Last Name"
                        aria-label="Last Name"
                        onChange={(e) => {
                          setLnameReg(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please provide a Lastname.
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationCustomUsername"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                        placeholder="Username"
                        aria-label="Username"
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please provide a username.
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationEmail"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="validationEmail"
                        required
                        placeholder="Email"
                        aria-label="Email"
                        onChange={(e) => {
                          setEmailReg(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please provide an email.
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationPassword"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="validationPassword"
                        required
                        placeholder="Password"
                        aria-label="Password"
                        onChange={(e) => {
                          setPasswordReg(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please provide a password.
                      </div>
                    </div>

                    <label
                      htmlFor="validationPhone"
                      className="form-control-label"
                    >
                      Phone
                    </label>
                    <div className="mb-4 input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        +234
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationPhone"
                        required
                        placeholder="91-456-789-12"
                        aria-label="Phone"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please put a phone number.
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationBusiness"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationBusiness"
                        required
                        placeholder="Business Name"
                        aria-label="Business Name"
                        onChange={(e) => {
                          setBusinessName(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please choose a Business Name.
                      </div>
                    </div>

                    <label
                      htmlFor="validationBusinessPhone"
                      className="form-control-label"
                    >
                      Business Phone
                    </label>
                    <div className="mb-4 input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        +234
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationBusinessPhone"
                        placeholder="12-456-789-12"
                        aria-label="Phone"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          setBusinessPhone(e.target.value);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please put in a phone number.
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationState"
                      >
                        State
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="validationState"
                        required
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                      >
                        <option selected>Select...</option>
                        <option>Abia</option>
                        <option>Adamawa</option>
                        <option>Akwa-Ibom</option>
                        <option>Anambra</option>
                        <option>Bauchi</option>
                        <option>Bayelsa</option>
                        <option>Benue</option>
                        <option>Borno</option>
                        <option>Cross-River</option>
                        <option>Delta</option>
                        <option>Ebonyi</option>
                        <option>Edo</option>
                        <option>Ekiti</option>
                        <option>Enugu</option>
                        <option>FCT- Abuja</option>
                        <option>Gombe</option>
                        <option>Imo</option>
                        <option>Jigawa</option>
                        <option>Kaduna</option>
                        <option>Kano</option>
                        <option>Katsina</option>
                        <option>Kebbi</option>
                        <option>Kogi</option>
                        <option>Kwara</option>
                        <option>Lagos</option>
                        <option>Nasarawa</option>
                        <option>Niger</option>
                        <option>Ogun</option>
                        <option>Ondo</option>
                        <option>Osun</option>
                        <option>Oyo</option>
                        <option>Plateau</option>
                        <option>Rivers</option>
                        <option>Sokoto</option>
                        <option>Taraba</option>
                        <option>Yobe</option>
                        <option>Zamfara</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please select a state.</div>
                    </div>

                    <div className="mb-4">
                      <label
                        // htmlFor="example-text-input"
                        className="form-control-label"
                        htmlFor="validationSector"
                      >
                        Business Sector
                      </label>
                      <select
                        className="form-select"
                        id="validationSector"
                        required
                        aria-label="Default select example"
                        onChange={(e) => {
                          setSector(e.target.value);
                        }}
                      >
                        <option selected>Select...</option>
                        <option>Agriculture</option>
                        <option>Aviation</option>
                        <option>Commercial/Retail</option>
                        <option>Construction</option>
                        <option>Education and Training</option>
                        <option>Fashion</option>
                        <option>Financial Service</option>
                        <option>Health Care</option>
                        <option>ICT</option>
                        <option>Manfacturing</option>
                        <option>Media & Entertainment</option>
                        <option>Others</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please select a Business Sector.
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        className="btn bg-gradient-dark w-100 my-4 mb-2"
                        onClick={register}
                      >
                        Sign up
                      </button>
                    </div>
                    <p className="text-sm mt-3 mb-0">
                      Already have an account?{" "}
                      <Link to="/" className="text-dark font-weight-bolder">
                        Sign in
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- --> */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4 mx-auto text-center">
              <a
                href="javascript"
                className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Company
              </a>
              <a
                href="javascript"
                className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                About Us
              </a>
              <a
                href="javascript"
                className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Team
              </a>
              <a
                href="javascript"
                className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Products
              </a>
              <a
                href="javascript"
                className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
              >
                Blog
              </a>
            </div>
            <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
              <a href="javascript" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-dribbble"></span>
              </a>
              <a href="javascript" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-twitter"></span>
              </a>
              <a href="javascript" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-instagram"></span>
              </a>
              <a href="javascript" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-pinterest"></span>
              </a>
              <a href="javascript" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-github"></span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-auto text-center mt-1">
              <p className="mb-0 text-secondary">
                Copyright ©{" "}
                <script>document.write(new Date().getFullYear())</script>{" "}
                Fredrick.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Register;
