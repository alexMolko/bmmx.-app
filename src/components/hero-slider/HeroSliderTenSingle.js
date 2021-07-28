import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderTenSingle = ({ data, sliderClass }) => {
  return (
    <div className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img  ${
            sliderClass ? sliderClass : ""
          }`}
         
        >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12  ml-auto">
            <div className="slider-content-3 slider-animated-1 text-center" >
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <img
                className="animated img-fluid"
                style = {{maxWidth: "60%"}}
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"   
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Ver catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

HeroSliderTenSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderTenSingle;
