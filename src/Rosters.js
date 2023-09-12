import React, { Fragment } from "react";
import withRoot from "./modules/withRoot";

// components
import NavbarView from "./modules/views/NavbarView";
import ProductHeroSmall from "./modules/views/ProductHeroSmall";
import RostersPage from "./modules/views/RostersPage";

const Rosters = () => (
  <Fragment>
    <NavbarView />
    <ProductHeroSmall name={"Rosters"}/>
    <RostersPage />
  </Fragment>
);

export default withRoot(Rosters);
