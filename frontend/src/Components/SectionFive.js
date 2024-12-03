import { Link } from "react-router";
import "../Components/SectionFive.css";
function SectionFive(){
   return (
     <div className="section-five-wrapper">
       <div className="section-five-heading">OUR PROJECTS</div>
       <div className="section-five-para">
         The href attribute requires a valid value to be accessible.
       </div>
       <div className="section-five-box">
         {/* ---------BOX 1--------- */}
         <div className="section-five-eachbox section-five-box-one">
           <div className="section-five-eachbox-shade">
             <Link to='/products'>VIEW MORE</Link>
           </div>
           <div className="section-five-eachbox-heading">SPIRAL STAIRS</div>
         </div>
         {/* ---------BOX 2--------- */}
         <div className="section-five-eachbox section-five-box-two">
           <div className="section-five-eachbox-shade">
              <Link to='/products'>VIEW MORE</Link>
           </div>
           <div className="section-five-eachbox-heading">MORDERN ART WORK</div>
         </div>
         {/* ---------BOX 3--------- */}
         <div className="section-five-eachbox section-five-box-three">
           <div className="section-five-eachbox-shade">
              <Link to='/products'>VIEW MORE</Link>
           </div>
           <div className="section-five-eachbox-heading">BARN STYLE</div>
         </div>
       </div>
     </div>
   );
}
export default SectionFive;