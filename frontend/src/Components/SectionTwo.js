import "../Components/SectionTwo.css";
import cradel from "../Components/Images/cradle.png";
function SectionTwo(){
    return (
      <div className="sectionTwo-wrapper">
        <div className="sectionTwo-left">
          <div className="sectionTwo-left-heading">ABOUT US</div>
          <div className="sectionTwo-left-para">
            Line 36:11: Redundant alt attribute. Screen-readers already announce
            `img` tags as an image. You don’t need to use the words `image`,
            `photo,` or `picture` (or any specified custom words) in the alt
            prop jsx-a11y/img-redundant-alt Line 46:11: Redundant alt attribute.
            Screen-readers already announce `img` tags as an image. You don’t
            need to use the words `image`, `photo,` or `picture` (or any
            specified custom words) in the alt prop jsx-a11y/img-red
          </div>
          <button className="sectionTwo-left-button">READ MORE</button>
        </div>
        <div className="sectionTwo-right">
          <img src={cradel}></img>
        </div>
      </div>
    );
}
export default SectionTwo;