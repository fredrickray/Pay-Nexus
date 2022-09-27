import React from "react";
import { Link } from "react-router-dom";
import {ImBin2} from "react-icons/im"
// import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'

function Transaction() {
  // const click = () => {
  //   Swal.fire({
  //     position: "center",
  //     icon: "success",
  //     title: "Your work has been saved",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // };

  return (
    <div class="g-sidenav-show   bg-gray-100">
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
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
                  {/* <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" /> */}
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
              <Link className="nav-link " to="/Products" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
              <Link className="nav-link active" to="/Transaction">
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

      <main class="main-content position-relative border-radius-lg ">
        {/* <!-- Navbar --> */}
        <nav
          class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm">
                  <Link class="opacity-5 text-white" to="/Home">
                    Home
                  </Link>
                </li>
                <li
                  class="breadcrumb-item text-sm text-white active"
                  aria-current="page"
                >
                  Transaction
                </li>
              </ol>
              <h6 class="font-weight-bolder text-white mb-0">Transaction</h6>
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

            </div>
          </div>
        </nav>
        {/* <-- Navbar End --> */}

        {/* <button onClick={click}>Click Me</button> */}
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-0">
                  <h4>All Transactions</h4>
                </div>
                <div class="card-header pb-5">
                  <h6>My List of customers and product bought</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Item & Customer
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Price
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Quantity
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Date Bought
                          </th>
                          <th class="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="https://www.tackroominc.com/images/Ariat-Fuse-Womens-Sneakers-10030486-Black.jpg"
                                  class="avatar avatar-sm me-3"
                                  alt="user1"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">John Michael</h6>
                                <p class="text-xs text-secondary mb-0">
                                  john@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            {/* <p class="text-xs font-weight-bold mb-0">Manager</p> */}
                            <p class="text-xs  font-weight-bold mb-0">
                            ₦ 80,000
                            </p>
                          </td>
                          <td class="align-middle text-center text-sm">                            
                              20
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              23/04/18
                            </span>
                          </td>
                          <td class="align-middle">
                          <ImBin2/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-3.jpg"
                                  class="avatar avatar-sm me-3"
                                  alt="user2"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Alexa Liras</h6>
                                <p class="text-xs text-secondary mb-0">
                                  alexa@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">
                              Programator
                            </p>
                            <p class="text-xs text-secondary mb-0">Developer</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              11/01/19
                            </span>
                          </td>
                          <td class="align-middle">
                          <ImBin2 />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-4.jpg"
                                  class="avatar avatar-sm me-3"
                                  alt="user3"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                                <p class="text-xs text-secondary mb-0">
                                  laurent@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">
                              Executive
                            </p>
                            <p class="text-xs text-secondary mb-0">Projects</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              19/09/17
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="javascript"
                              class="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-3.jpg"
                                  class="avatar avatar-sm me-3"
                                  alt="user4"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Michael Levi</h6>
                                <p class="text-xs text-secondary mb-0">
                                  michael@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">
                              Programator
                            </p>
                            <p class="text-xs text-secondary mb-0">Developer</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              24/12/08
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="javascript"
                              class="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-2.jpg"
                                  class="avatar avatar-sm me-3"
                                  alt="user5"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Richard Gran</h6>
                                <p class="text-xs text-secondary mb-0">
                                  richard@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">Manager</p>
                            <p class="text-xs text-secondary mb-0">Executive</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              04/10/21
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="javascript"
                              class="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-4.jpg"
                                  class="avatar avatar-sm me-3"
                                  alt="user6"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">Miriam Eric</h6>
                                <p class="text-xs text-secondary mb-0">
                                  miriam@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0">
                              Programtor
                            </p>
                            <p class="text-xs text-secondary mb-0">Developer</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              14/09/20
                            </span>
                          </td>
                          <td class="align-middle">
                            <a
                              href="javascript"
                              class="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="row">
            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-0">
                  <h6>Projects table</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center justify-content-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Project
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Budget
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Status
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                            Completion
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-spotify.svg"
                                  class="avatar avatar-sm rounded-circle me-2"
                                  alt="spotify"
                                />
                              </div>
                              <div class="my-auto">
                                <h6 class="mb-0 text-sm">Spotify</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-sm font-weight-bold mb-0">$2,500</p>
                          </td>
                          <td>
                            <span class="text-xs font-weight-bold">
                              working
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="me-2 text-xs font-weight-bold">
                                60%
                              </span>
                              <div>
                                <div class="progress">
                                  <div
                                    class="progress-bar bg-gradient-info"
                                    role="progressbar"
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 60 }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle">
                            <button class="btn btn-link text-secondary mb-0">
                              <i class="fa fa-ellipsis-v text-xs"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-invision.svg"
                                  class="avatar avatar-sm rounded-circle me-2"
                                  alt="invision"
                                />
                              </div>
                              <div class="my-auto">
                                <h6 class="mb-0 text-sm">Invision</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-sm font-weight-bold mb-0">$5,000</p>
                          </td>
                          <td>
                            <span class="text-xs font-weight-bold">done</span>
                          </td>
                          <td class="align-middle text-center">
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="me-2 text-xs font-weight-bold">
                                100%
                              </span>
                              <div>
                                <div class="progress">
                                  <div
                                    class="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 100 }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle">
                            <button
                              class="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fa fa-ellipsis-v text-xs"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-jira.svg"
                                  class="avatar avatar-sm rounded-circle me-2"
                                  alt="jira"
                                />
                              </div>
                              <div class="my-auto">
                                <h6 class="mb-0 text-sm">Jira</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-sm font-weight-bold mb-0">$3,400</p>
                          </td>
                          <td>
                            <span class="text-xs font-weight-bold">
                              canceled
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="me-2 text-xs font-weight-bold">
                                30%
                              </span>
                              <div>
                                <div class="progress">
                                  <div
                                    class="progress-bar bg-gradient-danger"
                                    role="progressbar"
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="30"
                                    style={{ width: 30 }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle">
                            <button
                              class="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fa fa-ellipsis-v text-xs"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-slack.svg"
                                  class="avatar avatar-sm rounded-circle me-2"
                                  alt="slack"
                                />
                              </div>
                              <div class="my-auto">
                                <h6 class="mb-0 text-sm">Slack</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-sm font-weight-bold mb-0">$1,000</p>
                          </td>
                          <td>
                            <span class="text-xs font-weight-bold">
                              canceled
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="me-2 text-xs font-weight-bold">
                                0%
                              </span>
                              <div>
                                <div class="progress">
                                  <div
                                    class="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="0"
                                    style={{ width: 0 }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle">
                            <button
                              class="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fa fa-ellipsis-v text-xs"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-webdev.svg"
                                  class="avatar avatar-sm rounded-circle me-2"
                                  alt="webdev"
                                />
                              </div>
                              <div class="my-auto">
                                <h6 class="mb-0 text-sm">Webdev</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-sm font-weight-bold mb-0">$14,000</p>
                          </td>
                          <td>
                            <span class="text-xs font-weight-bold">
                              working
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="me-2 text-xs font-weight-bold">
                                80%
                              </span>
                              <div>
                                <div class="progress">
                                  <div
                                    class="progress-bar bg-gradient-info"
                                    role="progressbar"
                                    aria-valuenow="80"
                                    aria-valuemin="0"
                                    aria-valuemax="80"
                                    style={{ width: 80 }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle">
                            <button
                              class="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fa fa-ellipsis-v text-xs"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-xd.svg"
                                  class="avatar avatar-sm rounded-circle me-2"
                                  alt="xd"
                                />
                              </div>
                              <div class="my-auto">
                                <h6 class="mb-0 text-sm">Adobe XD</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-sm font-weight-bold mb-0">$2,300</p>
                          </td>
                          <td>
                            <span class="text-xs font-weight-bold">done</span>
                          </td>
                          <td class="align-middle text-center">
                            <div class="d-flex align-items-center justify-content-center">
                              <span class="me-2 text-xs font-weight-bold">
                                100%
                              </span>
                              <div>
                                <div class="progress">
                                  <div
                                    class="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 100 }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle">
                            <button
                              class="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fa fa-ellipsis-v text-xs"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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

export default Transaction;
