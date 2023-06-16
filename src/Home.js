import React, { Fragment } from "react";
import withRoot from "./modules/withRoot";

// components
import NavbarView from "./modules/views/NavbarView";
import ProductHero from "./modules/views/ProductHero";
import SectionIntroduction from "./modules/views/SectionIntroduction";
import SectionHistory from "./modules/views/SectionHistory";
import SectionRules from "./modules/views/SectionRules";
import SectionRosters from "./modules/views/SectionRosters";
import SectionStats from "./modules/views/SectionStats";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";

const Home = () => (
  <Fragment>
    <NavbarView />
    <ProductHero />
    <SectionIntroduction />
    <SectionRules />
    <SectionRosters />
    <SectionStats />
    <SectionHistory />
    <ProductHowItWorks />
    <ProductCTA />
    <ProductSmokingHero />
    <AppFooter />
  </Fragment>
);

export default withRoot(Home);
