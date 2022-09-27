import React from "react";
// import "../Error.css"

function Error() {

  const Home = ()=> {
    window.location.href = "/Home"
  }


  return (
    <div className="error-page">
      <main className="main-content mt-0">
        <div
          className="page-header min-vh-100"
          style={{ backgroundImage: "url('../assets/img/carousel-3.jpg')" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-7 mx-auto text-center">
                <h1 className="display-1 text-bolder text-primary">Error 404</h1>
                <h2>Erm. Page not found</h2>
                <p className="lead">
                  We suggest you to go to the homepage while we solve this
                  issue.
                </p>
                <button type="button" onClick={Home} className="btn bg-gradient-dark mt-4">
                  Go to Homepage
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    // <div>
    //   <a href>
    //     <header class="top-header"></header>

    //     {/* <!--dust particel--> */}
    //     <div>
    //       <div class="starsec"></div>
    //       <div class="starthird"></div>
    //       <div class="starfourth"></div>
    //       <div class="starfifth"></div>
    //     </div>
    //     {/* <!--Dust particle end---> */}

    //     <div class="lamp__wrap">
    //       <div class="lamp">
    //         <div class="cable"></div>
    //         <div class="cover"></div>
    //         <div class="in-cover">
    //           <div class="bulb"></div>
    //         </div>
    //         <div class="light"></div>
    //       </div>
    //     </div>
    //     {/* <!-- END Lamp --> */}
    //     <section class="error">
    //       {/* <!-- Content --> */}
    //       <div class="error__content">
    //         <div class="error__message message">
    //           <h1 class="message__title">Page Not Found</h1>
    //           <p class="message__text">
    //             We're sorry, the page you were looking for isn't found here. The
    //             link you followed may either be broken or no longer exists.
    //             Please try again, or take a look at our.
    //           </p>
    //         </div>
    //         <div class="error__nav e-nav">
    //           <a href target="_blanck" class="e-nav__link">
    //             {" "}
    //           </a>
    //         </div>
    //       </div>
    //       {/* <!-- END Content --> */}
    //     </section>
    //   </a>
    // </div>
  );
}

export default Error;
