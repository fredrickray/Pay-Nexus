import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";
function Store() {
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [store_link, setLink] = useState("");

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

  const product = () => {
    Axios.post("http://localhost/8080/store", {
      name: name,
      currency: currency,
      store_link: store_link,
    })
      .then((response) => {
        if (response) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You've created a new store successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then((window.location.href = "/store"));
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to create store!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                className="nav-link "
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
              <Link className="nav-link " to="/Store">
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
                className="nav-link active"
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
              <Link className="nav-link active" to="/Products">
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
                  New Store
                </li>
              </ol>
              <h6 class="font-weight-bolder text-black mb-0">New Store</h6>
            </nav>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}

        <div className="container-fluid py-4 text-align-center justify-content-center position-absolute">
          <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="card z-index-2 h-100">
                <div className="card-header pb-0 pt-3 bg-transparent">
                  <h6 className="text-capitalize text-center">
                    Create Your Store
                  </h6>
                  <p className="text-sm mb-0 text-center">
                    Sell Multiple product on a single page
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="chart">
                    <canvas
                      id="chart-line"
                      className="chart-canvas "
                      height="00"
                    />
                    <button
                      className="btn btn-icon btn-3 btn-primary mg-left-20"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalSignUp"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-fat-add"></i>
                      </span>
                      <span className="btn-inner--text">New Store</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModalSignUp"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalSignTitle"
              aria-hidden="true"
            >
              <div
                class="modal-dialog modal-dialog-centered modal-md"
                role="document"
              >
                <div class="modal-content">
                  <div class="modal-body p-0">
                    <div class="card card-plain">
                      <div class="card-header pb-0 text-left">
                        <h3 class="font-weight-bolder text-primary text-gradient">
                          Create Store
                        </h3>
                        <p class="mb-0">
                          Begin your journey with a multi store
                        </p>
                      </div>
                      <div class="card-body pb-3">
                        <form>
                          <label>Name</label>
                          <div class="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              aria-label="Name"
                              aria-describedby="name-addon"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>

                          <label>Currency</label>
                          <div class="input-group mb-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onchange={(e) => {
                                setCurrency(e.target.value);
                              }}
                            >
                              <option selected>Select...</option>
                              <option value="1">NGN</option>
                              <option value="2">USDT</option>
                            </select>
                            {/* <input
                              type="number"
                              class="form-control"
                              // placeholder="Email"
                              aria-label="Currency"
                              aria-describedby="currency-addon"
                            /> */}
                          </div>

                          <div class="mb-4">
                            <label
                              for="example-text-input"
                              class="form-control-label"
                            >
                              Store Link
                            </label>
                            <div className="input-group">
                              <span class="input-group-text" id="basic-addon3">
                                https://example.com/users/
                              </span>
                              <input
                                type="text"
                                id="basic-url"
                                aria-describedby="basic-addon3"
                                class="form-control"
                                aria-label="text"
                                onChange={(e) => {
                                  setLink(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          {/* col-md-8 text-center */}

                          <Dropzone
                            style={{ minWidth: "400px" }}
                            view={"list"}
                            onChange={updateFiles}
                            minHeight="195px"
                            onClean={handleClean}
                            value={files}
                            maxFiles={1}
                            //header={false}
                            // footer={false}
                            maxFileSize={2998000}
                            // label="Drag'n drop files here or click to browse"
                            label="Select Store logo"
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

                          <div className="d-flex align-items-center mt-6">
                            <button
                              className="btn btn-md"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={product}
                              className="btn btn-success btn-md ms-auto"
                            >
                              Create
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --> Modal End <-- */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Store;
