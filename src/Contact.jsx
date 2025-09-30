
// DITO KAYO MAG IIMPORT NG IMG NYO 
// AT DAPAT ANG IMG NYO AY NAKAUPLOAD SA IMG NA FOLDER
import im1 from "./img/img1.jpg";
import mir from "./img/MIR.jpg";
import jaz from "./img/jaz.jpg";
import rose from "./img/rose.jpg";
import jii from "./img/jii.jpg";
import je from "./img/je.jpg";
import mj from "./img/mj.jpg";
import jc from "./img/jc.jpg";

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
                    <p>Email: mulawinmiriam75@gmail.com <br></br>
                    Contact: 09629600206</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={rose} alt="" />
                  <div className="info">
                    <p>Email: dungorosebren34@gmail.com <br></br>
                    Contact: 09984266265</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={jaz} alt="" />
                  <div className="info">
                    <p>Email: cruzjazminee50@gmail.com <br></br>
                    Contact: 09217326390</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="id-container">
            <div className="row">

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={jii} alt="" />
                  <div className="info">
                    <p>Email: cabalejojehus55@gmail.com <br></br>
                    Contact: 09395942762</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={je} alt="" />
                  <div className="info">
                    <p>Email: clasinmaryje56@gmail.com <br></br>
                    Contact: 09684506926</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={jc} alt="" />
                  <div className="info">
                    <p>Email: cenidojesus2203308@gmail.com <br></br>
                    Contact: 09762516073</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="id-container">
            <div className="row justify-content-center">

              <div className="col-md-4">
                <div className="contact-card">
                  <img src={mj} alt="" />
                  <div className="info">
                    <p>Email: velasquezmichaeljabez24@gmail.com <br></br>
                    Contact: 099195873366</p>
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
