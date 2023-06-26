import React, { Fragment } from "react";
import withRoot from "./modules/withRoot";

// components
import NavbarView from "./modules/views/NavbarView";
import ProductHeroSmall from "./modules/views/ProductHeroSmall";
import SectionSchedule from "./modules/views/SectionSchedule";
import SectionRosters from "./modules/views/SectionRosters";
import AppFooter from "./modules/views/AppFooter";

const Schedule = () => (
  <Fragment>
    <NavbarView />
    <ProductHeroSmall name={"Schedule"}/>
    <SectionSchedule />
  </Fragment>
);

export default withRoot(Schedule);
