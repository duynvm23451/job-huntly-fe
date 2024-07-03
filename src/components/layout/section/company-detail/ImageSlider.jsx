import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRight2Icon from "@/components/icons/ArrowRight2Icon";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="h-60 m-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-6">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover h-60 w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
