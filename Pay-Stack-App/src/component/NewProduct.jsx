import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import Swal from 'sweetalert2'

function NewProduct() {
  // const [name, setName] = useState("")
  // const [currency, setCurrency] = useState("")
  // const [store_link, setLink] = useState("")

  // const product = ()=> {

  //   axios.post("http://localhost/8080/store",
  //   {name: name, currency: currency, store_link: store_link}).then((response) => {
  //     if(response) {
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: "You've created a new store successfully",
  //         showConfirmButton: false,
  //         timer: 1500
  //       }).then(
  //         window.location.href = "/store"
  //       )

  //     } else{
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Failed to create store!',
  //         footer: '<a href="">Why do I have this issue?</a>'
  //       })
  //     }

  //   }).catch((error) => {
  //     console.log(error)
  //   })

  // }

  return (
    <div class="g-sidenav-show   bg-gray-100">
      <div class="min-height-110 bg-primary position-relative w-100"></div>

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
              <Link className="nav-link active" to="/NewProduct">
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
              <Link className="nav-link " to="/EditProduct">
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

      <main className="main-content position-relative border-radius-lg ">
        {/* <!-- Navbar --> */}
        <nav
          class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          data-scroll="false"
        >
          <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-100 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm">
                  <Link class="opacity-5 text-black" to="/Home">
                    Home
                  </Link>
                </li>
                <li
                  class="breadcrumb-item text-sm text-black active"
                  aria-current="page"
                >
                  New Product
                </li>
              </ol>
              <h6 class="font-weight-bolder text-black mb-0">New Product</h6>
            </nav>
            <div
              class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
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
              <ul class="navbar-nav  justify-content-end">
                <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a
                    href
                    class="nav-link text-black p-0"
                    id="iconNavbarSidenav"
                  >
                    <div class="sidenav-toggler-inner">
                      <i class="sidenav-toggler-line bg-black"></i>
                      <i class="sidenav-toggler-line bg-black"></i>
                      <i class="sidenav-toggler-line bg-black"></i>
                    </div>
                  </a>
                </li>
                <li class="nav-item px-3 d-flex align-items-center">
                  <a href class="nav-link text-black p-0">
                    <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                  </a>
                </li>
                <li class="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    href
                    class="nav-link text-black p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-bell cursor-pointer"></i>
                  </a>
                  <ul
                    class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li class="mb-2">
                      <a class="dropdown-item border-radius-md" href>
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              class="avatar avatar-sm  me-3 "
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
                      <a
                        class="dropdown-item border-radius-md"
                        href="javascript"
                      >
                        <div class="d-flex py-1">
                          <div class="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              class="avatar avatar-sm bg-gradient-dark  me-3 "
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
                      <a
                        class="dropdown-item border-radius-md"
                        href="javascript"
                      >
                        <div class="d-flex py-1">
                          <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
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
            {/* <div class="row gx-4">
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
              <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div class="nav-wrapper position-relative end-0">
                  <ul class="nav nav-pills nav-fill p-1" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center "
                        data-bs-toggle="tab"
                        href
                        role="tab"
                        aria-selected="true"
                      >
                        <i class="ni ni-app"></i>
                        <span class="ms-2">App</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center "
                        data-bs-toggle="tab"
                        href
                        role="tab"
                        aria-selected="false"
                      >
                        <i class="ni ni-email-83"></i>
                        <span class="ms-2">Messages</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center "
                        data-bs-toggle="tab"
                        href
                        role="tab"
                        aria-selected="false"
                      >
                        <i class="ni ni-settings-gear-65"></i>
                        <span class="ms-2">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="d-flex align-items-center">
                    <p class="mb-0">Edit Profile</p>
                    <button class="btn btn-primary btn-sm ms-auto">
                      Next
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <p class="text-uppercase text-sm">User Information</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Username
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value="lucky.jesse"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Email address
                        </label>
                        <input
                          class="form-control"
                          type="email"
                          value="jesse@example.com"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          First name
                        </label>
                        <input class="form-control" type="text" value="Jesse" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Last name
                        </label>
                        <input class="form-control" type="text" value="Lucky" />
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
                          Address
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          City
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
                          Country
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
                          Postal code
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value="437300"
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
                          class="form-control"
                          type="text"
                          value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
      </main>
    </div>
  );
}

export default NewProduct;
