import "../Components/SectionSix.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //TO GET ICONS
import {faQuoteRight } from "@fortawesome/free-solid-svg-icons"; //TO GET SPECIFIC ICON
function SectionSix(){
    return (
      <div className="section-six-wrapper">
        <div className="section-6-head">WHAT OUR CLIENT'S SAY</div>
        <div className="section-6-para">
          Note that the development build is not optimized.
        </div>
        <div className="section-6-box">
          {/* ----BOX1--- */}
          <div className="section-6-box-top">
            <div className="section-6-box-top1 section-6-comment-box">
              <div className="section-6-comment-box-image section6-img-1">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="section-6-IMG-icon"
                />
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <div className="section-6-comment-box-content">
                <div className="section-6-comment-box-content-heading">
                  heading
                </div>
                <div className="section-6-comment-box-content-para">
                  Note that the development build is not optimized. To create
                </div>
                <div className="section-6-comment-box-content-para">
                  Note that the development build is not optimized. To create
                </div>
              </div>
            </div>
            <div className="section-6-box-top2"></div>
          </div>
          {/* ----BOX2--- */}
          <div className="section-6-box-bottom">
            <div className="section-6-box-bottom1">
              <div className="section-6-box-bottom1-dots">&lt;&lt;</div>
              <div className="section-6-box-bottom1-dots section-6-box-bottom1-dots-center">
                O
              </div>
              <div className="section-6-box-bottom1-dots">&gt;&gt;</div>
            </div>
            <div className="section-6-box-bottom2 section-6-comment-box">
              <div className="section-6-comment-box-image section6-img-2">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="section-6-IMG-icon"
                />
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <div className="section-6-comment-box-content">
                <div className="section-6-comment-box-content-heading">
                  heading
                </div>
                <div className="section-6-comment-box-content-para">
                  Note that the development build is not optimized. To create
                </div>
                <div className="section-6-comment-box-content-para">
                  Note that the development build is not optimized. To create
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SectionSix;