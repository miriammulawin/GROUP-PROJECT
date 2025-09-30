// DITO KAYO MAG IIMPORT NG IMG NYO 
// AT DAPAT ANG IMG NYO AY NAKAUPLOAD SA IMG NA FOLDER
import im1 from "./img/img1.jpg";
import mir from "./img/MIR.jpg";
import jaz from "./img/jaz.jpg";
import rose from "./img/rose.jpg";
import jii from "./img/jii.jpg";
import je from "./img/je.jpg";
import mjpic from "./img/mjpic.jpg";

function About() {
return (
  <>
    <div className="about">
      <div className="bn text-black text-center ">
        <br />
        <p className="lead mt-4 py-3">
          We are passionate about creating meaningful experiences and sharing
          our journey with you. Explore our gallery, meet our team, and learn
          more about what we do.
        </p>
        <hr />
      </div>

      <div className="container px-5 py-5 mt-3">
        <div className="row g-5 mb-5 ">
            
          {/* ETO YUNG MGA CARD
           GAYAHIN NYO YUNG SAKIN IUPLOAD NYO YUNG 2BY2 IMAGE NYO
           THEN MAG LAGAY KAYO 1 SENTENCE NG DESCRIPTION NYO OR ANYTHING BASTA RELATED SA COURSE NATIN */}
          <div className="col-md-3 col-sm-6">
            <div className="card">

              {/* dito nmn nyo tatawagin yung image na inimport nyo by calling kung
              anong name ng image na inimport nyo */}
              <img src={mir} alt="" className="image card-img-top" />
              <div className="card-body text-center mt-3 bdy">
                <h6>Miriam B. Mulawin</h6>
                <p className="description px-3 mt-3">
                  A dedicated IT student who believes that every line of code
                  brings her closer to achieving her goals
                </p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>

          {/* PEBI */}
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img src={rose} alt="" className="image card-img-top" />
              <div className="card-body text-center mt-3 bdy">
                <h6>Rose Bren A. Dungo</h6>
                <p className="description px-3 mt-3">
                 A determined IT student preparing to be part of the digital future.
                </p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>

          {/* CRUZ  */}
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img src={jaz} alt="" className="image card-img-top" />
              <div className="card-body text-center mt-3 bdy">
                <h6>Jazmine L. Cruz</h6>
                <p className="description px-3 mt-3">
                 An IT student who sees technology as a tool to 
                 turn small ideas into big possibilities
                </p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>

          {/* CLASIN */}
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img src={je} alt="" className="image card-img-top" />
              <div className="card-body text-center mt-3 bdy">
                <h6>Maryje M. Clasin</h6>
                <p className="description px-3 mt-3">
                  Information Technology turns imagination into innovation, 
                  building bridges between people and possibilities
                </p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-5 mt-2 mb-5">
          {/* CABALEJO */}
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img src={jii} alt="" className="image card-img-top" />
              <div className="card-body text-center mt-3 bdy">
                <h6>Jehus N. Cabalejo</h6>
                <p className="description px-3 mt-3">
                  As an IT student, I'm defining my future with every line of code I write.
                </p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>

          {/* CENIDO */}
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img src={im1} alt="" className="image card-img-top" />
              <div className="card-body text-center mt-3 bdy ">
                <h6>Miriam B. Mulawin</h6>
                <p className="description px-3 mt-3">
                  A dedicated IT student who believes that every line of code
                  brings her closer to achieving her goals
                </p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>

          {/* VELASQUEZ */}
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <img src={mjpic} alt="" className="image card-img-top" />
              <div className="card-body text-center mt-3 bdy">
                <h6>Michael Jabez S. Velasquez</h6>
                <p className="description px-3 mt-3">
                  As both an artist and IT student, I am passionate about transforming 
                  ideas into creative, functional solutions that bridge design and technology.
                </p>
                <button className="btn">View Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default About;
