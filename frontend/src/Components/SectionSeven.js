import "../Components/SectionSeven.css";
function SectionSeven() {
  return (
    <div className="section-7-wrapper">
      <div className="section-7-wrapper-shade">
        <div className="section-7-up">CONTACT US</div>
        <div className="section-7-mid">
          <div className="section-7-mid-left">
            {/*------------ FORM BEGIN -------------*/}
            <input
              type="text"
              className="section-7-form"
              placeholder="Name"
            ></input>
            <input
              type="text"
              className="section-7-form"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className="section-7-form"
              placeholder="Phone Number"
            ></input>
            <input
              type="text"
              className="section-7-form section-7-form-last"
              placeholder="Message"
            ></input>
            {/* -----------------FORM END ------------------*/}
          </div>
          <div className="section-7-mid-right"></div>
        </div>
        <button className="section-7-down">SEND</button>
      </div>
    </div>
  );
}
export default SectionSeven;
