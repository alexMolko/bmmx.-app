import React from "react";
import Swiper from "react-id-swiper";
import sliderData from "../../data/hero-sliders/hero-slider-ten.json";
import HeroSliderTenSingle from "../../components/hero-slider/HeroSliderTenSingle.js";

const HeroSliderTen = () => {
  const params = {
    effect: "coverflow",
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <div className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img `}
         style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/img/bmmx/logo_prop2.jpg"})`  }}>
          <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <HeroSliderTenSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderTen;