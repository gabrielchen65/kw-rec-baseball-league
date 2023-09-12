import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import ws1 from './ws1.jpeg'; import ws2 from './ws2.webp'; 
import ws3 from './ws3.jpg'; import ws4 from './ws4.jpeg';
import bj1 from './bj1.jpeg'; import bj2 from './bj2.jpeg';
import bj3 from './bj3.jpeg'; import bj4 from './bj4.jpeg';
import dj1 from './dj1.webp'; import dj2 from './dj2.jpg';
import dj3 from './dj3.jpeg'; import dj4 from './dj4.jpeg';
import ep1 from './ep1.jpg'; import ep2 from './ep2.jpeg';
import ep3 from './ep3.jpeg'; import ep4 from './ep4.jpeg';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    margin: "1%",
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

function ProductCategories(props) {
  const { classes } = props;
  const imageRatio = "23%";
  const imagesWS = [
    {
      url:
        ws1,
      title: "Kevin Jang",
      width: imageRatio
    },
    {
      url:
        ws2,
      title: "Dan Trudelle",
      width: imageRatio
    },
    {
      url:
        ws3,
      title: "Hunter Timmins",
      width: imageRatio
    },
    {
      url:
        ws4,
      title: "Ansh Farmah",
      width: imageRatio
    },
  ];
  const imagesBJ = [
    {
      url:
        bj1,
      title: "White Sox",
      width: imageRatio
    },
    {
      url:
        bj2,
      title: "Blue Jays",
      width: imageRatio
    },
    {
      url:
        bj3,
      title: "Dodgers",
      width: imageRatio
    },
    {
      url:
        bj4,
      title: "Expos",
      width: imageRatio
    },
  ];
  const imagesDJ = [
    {
      url:
        dj1,
      title: "White Sox",
      width: imageRatio
    },
    {
      url:
        dj2,
      title: "Blue Jays",
      width: imageRatio
    },
    {
      url:
        dj3,
      title: "Dodgers",
      width: imageRatio
    },
    {
      url:
        dj4,
      title: "Expos",
      width: imageRatio
    },
  ];
  const imagesEP = [
    {
      url:
        ep1,
      title: "White Sox",
      width: imageRatio
    },
    {
      url:
        ep2,
      title: "Blue Jays",
      width: imageRatio
    },
    {
      url:
        ep3,
      title: "Dodgers",
      width: imageRatio
    },
    {
      url:
        ep4,
      title: "Expos",
      width: imageRatio
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        White Sox
      </Typography>
      <div className={classes.images}>
        {imagesWS.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            href="/rosters"
            style={{
              width: image.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>

      <Typography variant="h4" marked="center" align="center" component="h2">
        Blue Jays
      </Typography>
      <div className={classes.images}>
        {imagesBJ.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            href="/rosters"
            style={{
              width: image.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>

      <Typography variant="h4" marked="center" align="center" component="h2">
        Dodgers
      </Typography>
      <div className={classes.images}>
        {imagesDJ.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            href="/rosters"
            style={{
              width: image.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>

      <Typography variant="h4" marked="center" align="center" component="h2">
        Expos
      </Typography>
      <div className={classes.images}>
        {imagesEP.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            href="/rosters"
            style={{
              width: image.width
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>

    
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategories);
