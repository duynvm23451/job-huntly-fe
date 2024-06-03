import graphic from "../assets/graphic.svg";
import man from "../assets/image/man.png";
const HomepageHero = () => {
  return (
    <div className="absolute right-0 bottom-0">
      <img
        src={graphic}
        alt="graphic"
        className="absolute bottom-0 right-0 w-[1280px]"
      />
      <img src={graphic} alt="graphic" className="invisible w-[1280px]" />
      <img
        src={man}
        alt="man"
        className="absolute w-[800px] bottom-0 right-0 "
      />
    </div>
  );
};

export default HomepageHero;
