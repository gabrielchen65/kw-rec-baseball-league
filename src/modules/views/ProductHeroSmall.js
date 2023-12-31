import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ArrowDownwardIcon } from "@material-ui/icons";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayoutSmall from "./ProductHeroLayoutSmall";
import baseballField from './baseballField.jpg';

const backgroundImage =
  "https://res.cloudinary.com/dnguyen/image/upload/ar_16:9,b_rgb:7c7979,c_fill,e_oil_paint:0,g_auto,z_1.2/v1567927617/namphuong/background_kcopck.jpg";

const styles = theme => ({
  background: {
    backgroundImage: `url(${baseballField})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    height: 200,
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function ProductHeroSmall(props) {
  const { classes } = props;

  return (
    <ProductHeroLayoutSmall backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2">
        {props.name}
      </Typography>
    </ProductHeroLayoutSmall>
  );
}

ProductHeroSmall.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHeroSmall);
