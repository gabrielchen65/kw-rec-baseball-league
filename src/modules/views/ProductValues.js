import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import family from './family.jpg';

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  containerColumn: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center"
  },
  containerRow: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: "flex",
    position: "relative",
    flexDirection: "row",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },

  image: {
    height: 400,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.containerColumn}>
        <Container className={classes.containerRow}>
          <img
            src={family}
            className={classes.image}
            alt="curvy lines"
          />
          <Container className={classes.containerColumn}>

            <Typography variant="h4" marked="center" className={classes.title} component="h2">
              League Introduction
            </Typography>
            <Typography>
              KW Rec Baseball offers a recreational brand of baseball to adult men and women living in Kitchener, Waterloo, Cambridge, and surrounding areas.<br/><br/>
              We play on full-sized baseball diamonds with grass infields and deep fences.<br/><br/>
              Regularly scheduled games are played on each Saturday, excluding long weekends, at either 10:00 am or 1:00 pm. Note: For 2022 season regular games will be played on Friday evenings. 
              See Registration page for more details. Rainouts may be played at a variety of times - Friday evening, Saturday late afternoon, or Sunday late afternoon or early evening. <br/><br/>
              Each team will play once a week throughout the summer for a total of 9 regular season games and 4 playoff games.
            </Typography>    
          </Container>
        </Container>
        
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
