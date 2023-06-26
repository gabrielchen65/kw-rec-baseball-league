import React, { Fragment } from "react";
import withRoot from "./modules/withRoot";

// components
import NavbarView from "./modules/views/NavbarView";
import ProductHeroSmall from "./modules/views/ProductHeroSmall";
import SectionRosters from "./modules/views/SectionRosters";
import AppFooter from "./modules/views/AppFooter";

const Rosters = () => (
  <Fragment>
    <NavbarView />
    <ProductHeroSmall name={"Rosters"}/>
    <SectionRosters />
  </Fragment>
);

export default withRoot(Rosters);
