
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
    </>
  );
}
export default Home;
