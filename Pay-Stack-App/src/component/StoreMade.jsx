import React, { useState } from "react";
import { Link } from "react-router-dom";
// import  Axios from "axios";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";

function StoreMade() {
  // const [productName, setName] = useState("");
  // const [productDescription, setDescription] = useState("")
  // const [price, setPrice] = useState("")
  // const [quantity,  setQuantity] = useState("")
  // const [image, setImage] = useState("")

  // const create = ()=> {
  //   Axios.post("http://localhost:8080/product",
  //     {name: productName, description: productDescription, price: price, quantity: quantity}).then((response) => {
  //       console.log(response)
  //     })
  // }

  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };

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
              <Link
                className="nav-link "
                to="/Products"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseproduct"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-bag-17 text-warning text-sm opacity-10" />
                </div>
                <span className="text-uppercase  font-weight-bolder">
                  Store Fronts
                </span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseproduct">
              <Link
                className="nav-link active"
                to="/Products"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsestore"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  {/* <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" /> */}
                </div>
                <span className="nav-link-text ms-1 font-weight-bold">
                  Store
                </span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapsestore">
              <Link className="nav-link " to="/NewStore">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-shop text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">
                  New Store
                </span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapsestore">
              <Link className="nav-link active" to="/Store">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-shop text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">
                  Store List
                </span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseproduct">
              <Link
                className="nav-link"
                to="/Products"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-bold">
                  Product
                </span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseExample">
              <Link className="nav-link " to="/NewProduct">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-scissors text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">
                  New Product
                </span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseExample">
              <Link className="nav-link" to="/Products">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-scissors text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">
                  Product Page
                </span>
              </Link>
            </li>

            <li className="nav-item collapse" id="collapseExample">
              <Link className="nav-link " to="/EditProduct">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-scissors text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1 font-weight-light">
                  Edit Product
                </span>
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
                  Store
                </li>
                <li
                  class="breadcrumb-item text-sm text-black active"
                  aria-current="page"
                >
                  Store List
                </li>
              </ol>
              <h6 class="font-weight-bolder text-black mb-0">Store List</h6>
            </nav>

            <div
              class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
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
              </ul>
            </div>
            
          </div>
        </nav>
        {/* <!-- End Navbar --> */}

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Name
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Order
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Revenue
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Link
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
                                  src="https://i5.walmartimages.com/asr/33a91dba-ccf1-4544-b482-8fad58c6d5f4_1.f28368ccac65e664d34bfb1342627e26.jpeg?odnBg=ffffff"
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
                            <p class="text-xs font-weight-bold mb-0">0</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              <a href="k">Preview</a>
                            </span>
                          </td>
                          <td class="align-middle">
                            <button
                              type="button"
                              className="btn bg-success  my-2 btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalSignUp"
                            >
                              Create
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="exampleModalSignUp"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalSignTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered modal-md"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-body p-0 ">
                            <div className="container ">
                              {/* <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center"> */}
                              {/* <div className="col-xl-4 col-lg-5 col-md-7 mx-auto"> */}
                              <div className="card z-index-0">
                                <div className="card-header text-center pt-4">
                                  <h5>New Product</h5>
                                </div>
                                <div className="card-body ">
                                  <form>
                                    <div className="mb-4">
                                      <label
                                        htmlFor="example-text-input"
                                        className="form-control-label"
                                      >
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="The name of your product"
                                        aria-label="Name"
                                      />
                                    </div>

                                    <div className="mb-4">
                                      <div class="form-group">
                                        <label for="exampleFormControlTextarea1">
                                          Description
                                        </label>
                                        <textarea
                                          class="form-control"
                                          id="exampleFormControlTextarea1"
                                          rows="3"
                                        ></textarea>
                                      </div>
                                    </div>

                                    <div className="mb-4">
                                      <div class="col-md-3">
                                        <div class="form-group">
                                          <label
                                            for="example-text-input"
                                            class="form-control-label"
                                          >
                                            Currency
                                          </label>
                                          <select
                                            className="form-select"
                                            aria-label="Default select example"
                                          >
                                            <option selected>NGN</option>
                                            <option value="1">USD</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-md-20">
                                      <div class="form-group">
                                        <label
                                          for="example-text-input"
                                          class="form-control-label"
                                        >
                                          price
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder=""
                                          aria-label="price"
                                        />
                                      </div>
                                    </div>

                                    <div className="mb-4">
                                      <div class="col-md-5">
                                        <div class="form-group">
                                          <label
                                            for="example-text-input"
                                            class="form-control-label"
                                          >
                                            Quantity
                                          </label>
                                          <select
                                            className="form-select"
                                            aria-label="Default select example"
                                          >
                                            <option selected>Unlimited</option>
                                            <option value="1">Limited</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>

                                    <hr className="horizontal dark mt-0" />
                                    <div className="d-flex align-items-center">
                                      <button
                                        className="btn btn-md"
                                        data-bs-dismiss="modal"
                                      >
                                        Cancel
                                      </button>
                                      <button className="btn btn-success btn-md ms-auto">
                                        Next
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              {/* </div> */}
                              {/* </div> */}
                            </div>
                            {/* <div className="card card-plain ">
                              <div className="card-header pb-0 text-center ">
                                <h3 className=" text-primary text-gradient">
                                  New Product
                                </h3>
                              </div>
                              <div class="card-body pb-3">
                                <form>
                                  <label>Name</label>
                                  <div className="input-group mb-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Name"
                                      aria-label="Name"
                                      aria-describedby="name-addon"
                                    />
                                  </div>

                                  <label>Currency</label>
                                  <div class="input-group mb-3">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>Select...</option>
                                      <option value="1">NGN</option>
                                      <option value="2">USDT</option>
                                    </select>
                                  </div>

                                  <div className="mb-4">
                                    <label
                                      htmlFor="example-text-input"
                                      className="form-control-label"
                                    >
                                      Store Link
                                    </label>
                                    <div className="input-group">
                                      <span
                                        className="input-group-text"
                                        id="basic-addon3"
                                      >
                                        https://example.com/users/
                                      </span>
                                      <input
                                        type="text"
                                        id="basic-url"
                                        aria-describedby="basic-addon3"
                                        class="form-control"
                                        aria-label="text"
                                      />
                                    </div>
                                  </div>
                                  <div class="col col-md-8">
                                    <button
                                      type="button"
                                      className="btn  w-50 my-4 mb-5 mr-40 btn-rounded"
                                      data-bs-dismiss="modal"
                                    >
                                      Cancel
                                    </button>

                                    <button
                                      type="button"
                                      class="btn bg-success w-50 my-4 mb-5 btn-rounded"
                                    >
                                      Create
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --> Modal End <-- */}
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Name
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Order
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Revenue
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Link
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
                                  src="https://i5.walmartimages.com/asr/33a91dba-ccf1-4544-b482-8fad58c6d5f4_1.f28368ccac65e664d34bfb1342627e26.jpeg?odnBg=ffffff"
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
                            <p class="text-xs font-weight-bold mb-0">0</p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              23/04/18
                            </span>
                          </td>
                          <td class="align-middle">
                            <button
                              type="button"
                              className="btn bg-success  my-2 btn-rounded"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalSignUp"
                            >
                              Create
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              // id="exampleModalSignUp"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalSignTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-md"
                role="document"
              >
                {/* First Page of Tab */}
                <div className="modal-content">
                  <div className="modal-body p-0 ">
                    <div className="container tab-content" id="tabContent">
                      {/* <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center"> */}
                      {/* <div className="col-xl-4 col-lg-5 col-md-7 mx-auto"> */}
                      <div className="card z-index-0">
                        <div className="card-header text-center pt-4">
                          <h5>New Product</h5>
                        </div>
                        <div
                          className="card-body tab-content"
                          id="myTabContent"
                        >
                          <form>
                            <div className="mb-4">
                              <label
                                htmlFor="example-text-input"
                                className="form-control-label"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="The name of your product"
                                aria-label="Name"
                              />
                            </div>

                            <div className="mb-4">
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">
                                  Description
                                </label>
                                <textarea
                                  class="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                ></textarea>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Currency
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option selected>NGN</option>
                                    <option value="1">USD</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-20">
                              <div class="form-group">
                                <label
                                  for="example-text-input"
                                  class="form-control-label"
                                >
                                  price
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  aria-label="price"
                                />
                              </div>
                            </div>

                            <div className="mb-4">
                              <div class="col-md-5">
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Quantity
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option selected>Unlimited</option>
                                    <option value="1">Limited</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <hr className="horizontal dark mt-0" />
                            <div
                              className="d-flex align-items-center  nav-tabs"
                              id="tabContent"
                              role="tablist"
                            >
                              <button
                                className="btn btn-md"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                className="btn btn-success btn-md ms-auto"
                                data-bs-toggle="tab"
                                data-bs-target="image-tab-zone"
                                id="image-tab"
                                role="tab"
                                type='button'
                                aria-controls="image-tab-pane"
                                aria-selected="false"
                              >
                                Next
                              </button>
                            </div>
                          </form>

                          <form
                            className="tab-pane fade"
                            id="image-tab-pane"
                            role="tabpanel"
                            aria-labelledby="image-tab"
                            tabindex="0"
                          >
                            <Dropzone
                              style={{ minWidth: "400px" }}
                              //view={"list"}
                              onChange={updateFiles}
                              minHeight="195px"
                              onClean={handleClean}
                              value={files}
                              maxFiles={5}
                              //header={false}
                              // footer={false}
                              maxFileSize={2998000}
                              //label="Drag'n drop files here or click to browse"
                              //label="Suleta tus archivos aquí"
                              accept=".png,image/*"
                              // uploadingMessage={"Uploading..."}
                              url="https://my-awsome-server/upload-my-file"
                              //of course this url doens´t work, is only to make upload button visible
                              //uploadOnDrop
                              //clickable={false}
                              fakeUploading
                              //localization={"FR-fr"}
                              disableScroll
                            >
                              {files.length > 0 &&
                                files.map((file) => (
                                  <FileItem
                                    {...file}
                                    key={file.id}
                                    onDelete={onDelete}
                                    onSee={handleSee}
                                    //localization={"ES-es"}
                                    resultOnTooltip
                                    preview
                                    info
                                    hd
                                  />
                                ))}
                            </Dropzone>

                            <FullScreenPreview
                              imgSource={imageSrc}
                              openImage={imageSrc}
                              onClose={(e) => handleSee(undefined)}
                            />

                            <hr className="horizontal dark mt-0" />
                            <div className="d-flex align-items-center mt-12">
                              <button
                                className="btn btn-md"
                                data-bs-dismiss="modal"
                              >
                                Back
                              </button>
                              <button className="btn btn-success btn-md ms-auto">
                                Create
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* First Page of Tab */}

                {/* Second Page of Tab */}
                {/* <div className="card-body tab-content" > */}

                {/* </div> */}
                {/* End of Second Page of Tab */}
              </div>
            </div>
            {/* --> Modal End <-- */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default StoreMade;
