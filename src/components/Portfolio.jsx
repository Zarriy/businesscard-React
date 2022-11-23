import zarriy from "../assets/zarriyy.jpeg";
import PersonalInfo from "./PersonalInfo";

function Portfolio() {
  return (
    <div className="portfolio-div">
      <img src={zarriy} alt="Zarriy person" className="p-img" />
      <PersonalInfo />
    </div>
  );
}
export default Portfolio;
