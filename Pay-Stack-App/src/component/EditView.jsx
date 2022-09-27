import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import Swal from 'sweetalert2'

function EditView() {

  const remove = (e) => {
    e.preventDefault();
    let id = e.target.id
    console.log(id)

    axios.post("http://localhost:8080/product-delete", 
    {id: id}).then((response) => {
      console.log(response)
      Swal.fire({
        title: 'Welcome Back',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then(
        window.location.href = "/EditProduct"
      )

    })

  }
  return (
    <div class="g-sidenav-show   bg-gray-100">
      <div
        class="position-absolute w-100 min-height-300 top-0"
        style={{
          backgroundIimage:
            "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg')",
          backgroundPosition: 50,
        }}
      >
        <span class="mask bg-primary opacity-6"></span>
      </div>

      <aside
        className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          />
          <Link className="navbar-brand m-0" to="/Home/Profile" target="_blank">
            <img
              src="./assets/img/logo-ct-dark.png"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold">Argon Dashboard 2</span>
          </Link>
        </div>
        <hr className="horizontal dark mt-0" />
        <div
          className="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Commerce
              </h6>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/Products" type="button" data-bs-toggle="collapse" data-bs-target="#collapseproduct" aria-expanded="false" aria-controls="collapseExample">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-bag-17 text-warning text-sm opacity-10" />
                </div>
                <span className="text-uppercase  font-weight-bolder">Store Fronts</span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseproduct">
              <Link className="nav-link " to="/Products" type="button" data-bs-toggle="collapse" data-bs-target="#collapsestore" aria-expanded="false" aria-controls="collapseExample">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  {/* <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" /> */}
                </div>
                <span className="nav-link-text ms-1 font-weight-bold">Store</span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapsestore">
              <Link className="nav-link " to="/NewStore">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-shop text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">New Store</span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapsestore">
              <Link className="nav-link " to="/Store">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-shop text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">Store List</span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseproduct">
              <Link className="nav-link active" to="/Products" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-bold">Product</span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseExample">
              <Link className="nav-link " to="/NewProduct">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-scissors text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">New Product</span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseExample">
              <Link className="nav-link " to="/Products">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-scissors text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">Product Page</span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseExample">
              <Link className="nav-link active" to="/EditProduct">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-scissors text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">Edit Product</span>
              </Link>
            </li>

            

            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Payments
              </h6>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Card">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card text-success text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Card</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Transaction">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-money-coins text-success text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Transactions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Virtual">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-app text-info text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Virtual Reality</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./pages/rtl.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-world-2 text-danger text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Profile">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link " to="/">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-copy-04 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link " to="/">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-collection text-info text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </Link>
            </li> */}
          </ul>
        </div>
        <div class="sidenav-footer mx-3 ">
          <div class="card card-plain shadow-none" id="sidenavCard">
            <img
              class="w-50 mx-auto"
              src="../assets/img/illustrations/icon-documentation.svg"
              alt="sidebar_illustration"
            />
            <div class="card-body text-center p-3 w-100 pt-0" />
          </div>
          {/* <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard"  class="btn btn-dark btn-sm w-100 mb-3">Documentation</a> */}
          <Link class="btn btn-primary btn-sm mb-0 w-100" to="/" type="button">
            Log Out
          </Link>
        </div>
      </aside>

      <div class="main-content position-relative max-height-vh-100 h-100">
        {/* <!-- Navbar --> */}
        <nav class="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2 mt-n11">
          <div class="container-fluid py-1">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 ps-2 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm">
                  <Link class="text-white opacity-5" to="/Home">
                    Home
                  </Link>
                </li>
                <li class="breadcrumb-item text-sm text-white">
                  <Link class="text-white opacity-5" to="/EditProduct">
                    Edit Product
                  </Link>
                </li>
                <li
                  class="breadcrumb-item text-sm text-white active"
                  aria-current="page"
                >
                  Edit View
                </li>
              </ol>
              <h6 class="text-white font-weight-bolder ms-2">Edit View</h6>
            </nav>
            <div
              class="collapse navbar-collapse me-md-0 me-sm-4 mt-sm-0 mt-2"
              id="navbar"
            >
              <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                <div class="input-group">
                  <span class="input-group-text text-body">
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul class="navbar-nav justify-content-end">
                <li class="nav-item d-flex align-items-center">
                  <a href class="nav-link text-white font-weight-bold px-0">
                    <i class="fa fa-user me-sm-1"></i>
                    <span class="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li class="nav-item d-xl-none ps-3 pe-0 d-flex align-items-center">
                  <a href="javascript" class="nav-link text-white p-0">
                    <a
                      href="javascript"
                      class="nav-link text-white p-0"
                      id="iconNavbarSidenav"
                    >
                      <div class="sidenav-toggler-inner">
                        <i class="sidenav-toggler-line bg-white"></i>
                        <i class="sidenav-toggler-line bg-white"></i>
                        <i class="sidenav-toggler-line bg-white"></i>
                      </div>
                    </a>
                  </a>
                </li>
                <li class="nav-item px-3 d-flex align-items-center">
                  <a href="javascript" class="nav-link text-white p-0">
                    <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                  </a>
                </li>
                <li class="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    href="javascript"
                    class="nav-link text-white p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-bell cursor-pointer"></i>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end px-2 py-3 ms-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li class="mb-2">
                      <a class="dropdown-item border-radius-md" href>
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              class="avatar avatar-sm me-3"
                              alt=""
                            />
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              <span class="font-weight-bold">New message</span>{" "}
                              from Laur
                            </h6>
                            <p class="text-xs text-secondary mb-0">
                              <i class="fa fa-clock me-1"></i>
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-2">
                      <a class="dropdown-item border-radius-md" href>
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              class="avatar avatar-sm bg-gradient-dark me-3"
                              alt=""
                            />
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              <span class="font-weight-bold">New album</span> by
                              Travis Scott
                            </h6>
                            <p class="text-xs text-secondary mb-0">
                              <i class="fa fa-clock me-1"></i>1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item border-radius-md" href>
                        <div class="d-flex py-1">
                          <div class="avatar avatar-sm bg-gradient-secondary me-3 my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fill-rule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        class="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      ></path>
                                      <path
                                        class="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p class="text-xs text-secondary mb-0">
                              <i class="fa fa-clock me-1"></i>2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}

        <div class="card shadow-lg mx-4 card-profile-bottom">
          <div class="card-body p-3">
            <div class="row gx-4">
              <div class="col-auto">
                <div class="avatar avatar-xl position-relative">
                  <img
                    src="../assets/img/team-1.jpg"
                    alt="profile_image"
                    class="w-100 border-radius-lg shadow-sm"
                  />
                </div>
              </div>
              <div class="col-auto my-auto">
                <div class="h-100">
                  <h5 class="mb-1">Sayo Kravits</h5>
                  <p class="mb-0 font-weight-bold text-sm">Public Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="d-flex align-items-center">
                    <p class="mb-1 font-weight-bold">Product Information</p>
                    <button class="btn btn-primary btn-sm ms-auto">Save</button>
                  </div>
                </div>
                <div class="card-body">
                  <p class="text-uppercase text-sm">Store</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          //   value="lucky.jesse"
                        />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Price
                        </label>
                        <input class="form-control" type="number"  />
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Amount
                        </label>
                        <input class="form-control" type="number" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          style={{height: 130, width: 500}}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <hr class="horizontal dark" />
                  <p class="text-uppercase text-sm">Contact Information</p>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Email
                        </label>
                        <input
                          class="form-control"
                          type="email"
                          //   value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          FaceBook
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value="New York"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Instagram
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value="United States"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Twitter
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          //   value="437300"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-tel-input"
                          class="form-control-label"
                        >
                          Phone
                        </label>
                        <input
                          class="form-control"
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          //   value="437300"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <hr class="horizontal dark" />
                  <p class="text-uppercase text-sm">About me</p>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          About me
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                        />
                      </div>

                      <div className="d-flex align-items-center"><button className="btn btn-danger btn-lg ms-auto" onClick={remove}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 ">
              <div class="card card-profile align-items-center">
                <img
                  src="https://i5.walmartimages.com/asr/33a91dba-ccf1-4544-b482-8fad58c6d5f4_1.f28368ccac65e664d34bfb1342627e26.jpeg?odnBg=ffffff"
                  alt=""
                  class="card w-100 h-100"
                />

                {/* <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
                  <div class="d-flex justify-content-between">
                    <a
                      href="javascript"
                      class="btn btn-sm btn-info mb-0 d-none d-lg-block"
                    >
                      Edit
                    </a>
                    <a
                      href="javascript"
                      class="btn btn-sm btn-info mb-0 d-block d-lg-none"
                    >
                      <i class="ni ni-collection"></i>
                    </a>
                    <a
                      href="javascript"
                      class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                    >
                      Delete
                    </a>
                    <a
                      href="javascript"
                      class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"
                    >
                      <i class="ni ni-email-83"></i>
                    </a>
                  </div>
                </div> */}

                {/* <div class="card-body pb-0">
                  <div class="text-center mt-0">
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <footer class="footer pt-3  ">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    © <script>document.write(new Date().getFullYear())</script>,
                    made with <i class="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      class="font-weight-bold"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div class="col-lg-6">
                  <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        class="nav-link text-muted"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        class="nav-link text-muted"
                      >
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        class="nav-link text-muted"
                      >
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        class="nav-link pe-0 text-muted"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}

export default EditView;

