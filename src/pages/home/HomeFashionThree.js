import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";

const HomeFashionThree = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Bmmx | Home</title>
        <meta
          name="description"
          content="Bici motos mexicanas bmmx "
        />
      </MetaTags>
      <LayoutTwo
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* product grid */}
        
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeFashionThree;
