import React from "react";

function App() {
  return (
    <>
    <div className="jumbotron jumbotron-fluid mx-3 mt-3 p-0 position-relative bg-white">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light bg-light nav-position bg-transparent my-3 mx-5">
          <a className="navbar-brand navbar-font-left" href="!#">
            Trab
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link navbar-font-right" href="!#">
                Posts
              </a>
              <a className="nav-item nav-link navbar-font-right" href="!#">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://images.squarespace-cdn.com/content/59f3fb4ccf81e02892f7d3f8/1533760677102-FBQU82WAYD2D5P0UCG2I/Camera.png"
                alt="First slide"
                style={{ height: "600px" }}
              />
            </div>
          </div>
        </div>
        <div className="middle-cover d-flex justify-content-center align-items-center">
          <h1 className="display-4 text-light font-weight-bold">MEHUL MOREKR</h1>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
