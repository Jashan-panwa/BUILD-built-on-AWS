import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import SectionFive from "./Components/SectionFive";
import SectionSix from "./Components/SectionSix";
import SectionSeven from "./Components/SectionSeven";
import Fotter from "./Components/Fotter";

const Home = () => {
    return (
        <div>
        <Banner />
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
        <Fotter/>
      </div>
    )
}

export default Home;