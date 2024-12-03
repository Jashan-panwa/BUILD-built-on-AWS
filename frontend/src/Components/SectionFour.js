import "../Components/SectionFour.css";
function SectionFour(){
    return (
      <div className="section-four-wrapper">
        <div className="section-four-wrapper-shade">
          <div className="heading-section-four">WHO WE ARE?</div>
          <div className="para-section-four">DESIGNERS & INNOVATORS</div>
          <div className="content-section-four">
            he href attribute requires a valid value to be accessible. Provide a
            valid, navigable address as the href value. If you cannot provide a
            valid href, but still need the element to resemble a link, use a
            button and change it with appropriate styles. Learn more:
            https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
            jsx-a11y/anchor-is-valid Line 38:15: The href attribute requires a
            valid value to be accessible. Provide a valid, navigable address as
            the href value. If you cannot provide a valid href, but still need
            the element to resemble a link, use a button and change it with
            appropriate styles. Learn more:
            https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
            jsx-a11y/anchor-is-valid
          </div>
          <button className="btn-section-four">GET A QUOTE</button>
        </div>
      </div>
    );
}
export default SectionFour;