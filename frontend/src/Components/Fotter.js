import "../Components/Fotter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //TO GET ICONS
import {
  faInstagram,
  faWhatsapp,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; //TO GET SPECIFIC ICON
function Fotter() {
  return (
    <div className="footer-wrapper">
      <div className="footer-up">
        {/* ------------FOTTER UP LEFT---------- */}
        <div className="footer-up-left">
          {/* ------------FOTTER UP LEFT LEFT---------- */}
          <div className="footer-up-left-left">
            <div className="footer-up-left-heading">Let's Design Together</div>
            <div className="footer-up-left-para">
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still{" "}
            </div>
            <div className="footer-up-left-para">
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still{" "}
            </div>
          </div>
          {/* ------------FOTTER UP LEFT RIGHT---------- */}
          <div className="footer-up-left-right">
            <div className="footer-up-left-heading">Let Us Help You</div>
            <div className="footer-up-left-para">
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still{" "}
            </div>
            <div className="footer-up-left-para">
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still{" "}
            </div>
          </div>
        </div>
        {/* ------------FOTTER UP RIGHT---------- */}
        <div className="footer-up-right">
          {/* ------------FOTTER UP RIGHT UP---------- */}
          <div className="footer-up-right-up">
            {/* ------------FOTTER UP RIGHT UP LEFT---------- */}
            <div className="footer-up-right-up-left">
              <div className="footer-up-right-up-heading">INFORMATION</div>
              <ul className="footer-up-right-up-left-list">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href=""> Careers</a>
                </li>
                <li>
                  <a href="">Sell on Shopes</a>
                </li>
                <li>
                  <a href="">Pross & Cons</a>
                </li>
                <li>
                  <a href="">Competitions</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="footer-up-right-up-right">
              <div className="footer-up-right-up-heading">OUR MOTO</div>
              <div className="footer-up-right-up-para">
                he href attribute requires a valid value to be accessible.
                Provide a valid
              </div>
            </div>
          </div>
          <div className="footer-up-right-down">
            <input type="text" placeholder="Enter Your Email"></input>
            <button>SUSCRIBE</button>
          </div>
        </div>
      </div>
      {/*------------ICONS------------ */}
      <div className="footer-down">
        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faSnapchat} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
export default Fotter;
