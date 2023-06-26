import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import family from './family.jpg';
import adultRec from './adult_rec_baseball_game.jpeg'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(0),
    display: "flex",
    position: "relative",
    //alignItems: "center"
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
    height: 'auto',
    maxWidth: '100%',
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

function SectionIntroduction(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={4} >
          <Grid item sm={12} md={6}>
            <img
                src={family}
                className={classes.image}
                alt="family event"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <div style={{textAlign: 'center'}}>
              <Typography variant="h4" marked="center" className={classes.title} component="h2">
              League Introduction
              </Typography>
            </div>
            <Typography variant="body">
              KW Rec Baseball offers a recreational brand of baseball to adult men and women living in Kitchener, Waterloo, Cambridge, and surrounding areas.<br/><br/>
              We play on full-sized baseball diamonds with grass infields and deep fences.<br/><br/>
              Regularly scheduled games are played on each Saturday, excluding long weekends, at either 10:00 am or 1:00 pm. Note: For 2022 season regular games will be played on Friday evenings. 
              See Registration page for more details. Rainouts may be played at a variety of times - Friday evening, Saturday late afternoon, or Sunday late afternoon or early evening. <br/><br/>
              Each team will play once a week throughout the summer for a total of 9 regular season games and 4 playoff games.
            </Typography>
          </Grid>
          <Grid item sm={12} md={5}>
            <Typography variant='h6'>What To Expect</Typography>
            <Typography variant="body">
              <ul>
                <li>7 inning games</li>
                <li>everyone bats and everyone gets equal time in the field</li>
                <li>players of various skill levels and experience</li>
                <li>a wide range of players' ages (19+)</li>
                <li>two qualified umpires at each game</li>
                <li>a friendly atmosphere with players enjoying themselves</li>
                <li>league provided bats, balls, bases, and catcher's equipment</li>
                <li>a numbered team shirt for each player</li>
                <li>pitching, catching, running, throwing, and hitting!!</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <img
                  src={adultRec}
                  className={classes.image}
                  alt="adult rec league"
              />
          </Grid>
        </Grid>
        
      </Container>
    </section>
  );
}

SectionIntroduction.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionIntroduction);
