import "./SectionOne.css";
import cabinet from "../Components/Images/cabinet.png";
import interior from "../Components/Images/interior-design.png";
import interior2 from "../Components/Images/interior-design-two.png";
import stairs from "../Components/Images/stairs.png";
function SectionOne() {
  return (
    <div className="wrapper-section-one">
      <div className="heading-section-one"> OUR SERVICES</div>
      <div className="para-section-one">
        Furniture, decor, and interior design elements play a crucial role in
      </div>
      <div className="box-section-one">
        {/* ---------BLOCK ONE-------- */}
        <div className="eachbox-section-one">
          <img src={cabinet} alt="image here" />
          <div className="eachbox-section-one-heading">FURNITURE</div>
          <div className="eachbox-section-one-para">
            Furniture, decor, and interior design elements play a crucial role
            in
          </div>
          <button>READ MORE</button>
        </div>
        {/* ---------BLOCK TWO-------- */}
        <div className="eachbox-section-one">
          <img alt="image here" src={interior}></img>
          <div className="eachbox-section-one-heading">OFFICE</div>
          <div className="eachbox-section-one-para">
            Furniture, decor, and interior design elements play a crucial role
            in
          </div>
          <button>READ MORE</button>
        </div>
        {/* ---------BLOCK THREE-------- */}
        <div className="eachbox-section-one">
          <img alt="image here" src={interior2}></img>
          <div className="eachbox-section-one-heading">HOME</div>
          <div className="eachbox-section-one-para">
            Furniture, decor, and interior design elements play a crucial role
            in
          </div>
          <button>READ MORE</button>
        </div>
        {/* ---------BLOCK FOUR-------- */}
        <div className="eachbox-section-one">
          <img alt="image here" src={stairs}></img>
          <div className="eachbox-section-one-heading">BEDROOM</div>
          <div className="eachbox-section-one-para">
            Furniture, decor, and interior design elements play a crucial role
            in
          </div>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}
export default SectionOne;
