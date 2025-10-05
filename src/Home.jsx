import code from "./img/code.jpg";
function Home() {
  return (
    <>
    


      <div className="section" id="home">
        <div className="banner position-relative">
          <img src={code} alt="Banner" className="img-fluid w-100 banner-img" />

          <div className="banner-text position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1 className="display-1 fw-bold">Hello World</h1>
            <p className="lead">Welcome to our awesome website!</p>

            <button className="learnmore"> Learn More..</button>
          </div>
        </div>
      </div>

      <div className="offer-section py-5 bg-light mb-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">We Offer</h2>
          <p className="mb-5  text-muted">
            Explore the services and solutions we provide to help you succeed.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    We build modern, responsive, and user-friendly websites
                    tailored to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Mobile Apps</h5>
                  <p className="card-text">
                    Custom mobile applications for Android and iOS with smooth
                    user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">IT Solutions</h5>
                  <p className="card-text">
                    From consulting to deployment, we provide end-to-end IT
                    solutions for businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>


      </div>

    

     
    </>
  );
}
export default Home;
