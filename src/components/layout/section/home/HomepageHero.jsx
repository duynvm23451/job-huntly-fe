import graphic from "@/assets/graphic.svg";
import man from "@/assets/image/man.png";
const HomepageHero = () => {
  return (
    <div className="absolute -right-28 bottom-0 z-10">
      <img
        src={graphic}
        alt="graphic"
        className="absolute bottom-0 right-0 w-[1280px] scale-75"
      />
      <img
        src={graphic}
        alt="graphic"
        className="invisible w-[1280px] scale-75"
      />
      <img
        src={man}
        alt="man"
        className="absolute w-[840px] bottom-0 right-8 scale-75"
      />
    </div>
  );
};

export default HomepageHero;
