import "./Nav.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //TO GET ICONS
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; //TO GET SPECIFIC ICON
import BUILD_LOGO from "../Components/Images/BUILD_LOGO.png";
function Nav() {
  return (
    <nav>
      <a href="index.html" className="logo-area">
        <div>
          <img src={BUILD_LOGO} alt="LOGO" />
        </div>
        <div className="logo-area-text">BUILD</div>
      </a>
      <div>
        <ul className="nav-list">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">SERVICES</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/products">SHOP</Link>
          </li>
          <li>
            <a href="" className="call">
              CALL US +91 XXXXXXXXXXX
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
          <li>
            <a href="">LOGIN</a>
          </li>
        </ul>
      </div>
      {/* <div className="responsive">
        <FontAwesomeIcon icon={faBars} className="hamburger" />
        <FontAwesomeIcon icon={faTimes} className="cross" />
      </div> */}
    </nav>
  );
}
export default Nav;
