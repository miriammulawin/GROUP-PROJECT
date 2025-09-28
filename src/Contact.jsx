
// DITO KAYO MAG IIMPORT NG IMG NYO 
// AT DAPAT ANG IMG NYO AY NAKAUPLOAD SA IMG NA FOLDER
import im1 from "./img/img1.jpg";
import mir from "./img/MIR.jpg";
function Contact() {
  return (
    <>
      <div className="section" id="contact">
        <div className="contact">
          <p className="ctitle text-center ">
            Your thoughts matter to us, feel free to drop us a message anytime.{" "}
          </p>
          <div />

          <div className="id-container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-card">
                  {/* dito nmn nyo tatawagin yung image na inimport nyo by calling kung
                  anong name ng image na inimport nyo */}
                  <img src={mir} alt="" />
                  <div className="info">
                    <p>Email: mulawinmiriam75@gmail.com Contact: 09629600206</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={mir} alt="" />
                  <div className="info">
                    <p>Email: mulawinmiriam75@gmail.com Contact: 09629600206</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={mir} alt="" />
                  <div className="info">
                    <p>Email: mulawinmiriam75@gmail.com Contact: 09629600206</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="id-container">
            <div className="row">

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={mir} alt="" />
                  <div className="info">
                    <p>Email: mulawinmiriam75@gmail.com Contact: 09629600206</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={mir} alt="" />
                  <div className="info">
                    <p>Email: mulawinmiriam75@gmail.com Contact: 09629600206</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={mir} alt="" />
                  <div className="info">
                    <p>Email: mulawinmiriam75@gmail.com Contact: 09629600206</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="id-container">
            <div className="row justify-content-center">

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={mir} alt="" />
                  <div className="info">
                    <p>Email: mulawinmiriam75@gmail.com Contact: 09629600206</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
export default Contact;
