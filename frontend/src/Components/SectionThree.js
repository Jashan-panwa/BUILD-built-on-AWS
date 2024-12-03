import "../Components/SectionThree.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //TO GET ICONS
import { faSearch} from "@fortawesome/free-solid-svg-icons"; //TO GET SPECIFIC ICON
function SectionThree() {
  return (
    <div className="sectionthree-wrapper">
      <div className="sectionthree-heading">OUR FURNITURES</div>
      <div className="sectionthree-para">
        Redundant alt attribute. Screen-readers already announce `img` tags as
        an image
      </div>
      <div className="sectionthree-box">
        {/* -------BOX 1-------- */}
        <div className="sectionthree-eachbox">
          <div className="sectionthree-imgbox img1">
            <div className="sectionthree-search">
              <a href="#" className="a-section-three">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
          </div>
          <div className="eachbox-heading">
            cannot provide a valid href, but still need the element
          </div>
          <div className="eachbox-para">
            {" "}
            Line 17:15: The href attribute requires a valid value to be
            accessible. Provide a valid, navigable address as the href value. If
            you cannot provide a valid href, but still need the element to
            resemble a link, use a button and change it with appropriate styles.
            Learn more:
          </div>
        </div>
        {/* -------BOX 2-------- */}
        <div className="sectionthree-eachbox ">
          <div className="sectionthree-imgbox img2">
            <div className="sectionthree-search">
              <a href="#" className="a-section-three">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
          </div>
          <div className="eachbox-heading">
            cannot provide a valid href, but still need the elementalue to be
          </div>
          <div className="eachbox-para">
            Line 17:15: The href attribute requires a valid value to be
            accessible. Provide a valid, navigable address as the href value. If
            you cannot provide a valid href, but still need the element to
            resemble a link, use a button and change it with appropriate styles.
            Learn more:
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionThree;
