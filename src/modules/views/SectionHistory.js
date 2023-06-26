import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import kwBat from './kw-rec-bat.png'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(20),
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

function SectionHistory(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={4} >
          <Grid item md={3}>
            <img
                src={kwBat}
                className={classes.image}
                alt="kw bat legacy image"
            />
          </Grid>
          <Grid item md={9}>
            <div style={{textAlign: 'center'}}>
              <Typography variant="h4" marked="center" className={classes.title} component="h2">
              League History
              </Typography>
            </div>
            <Typography variant="body2">
            The idea of KW Rec Baseball was formed when a group of friends, all baseball enthusiasts, shared with each other that they missed playing baseball.<br/><br/>

            We realized that in the Kitchener-Waterloo area, there is only one league where adults can enjoy playing baseball. While it is an excellent option for those wanting to play a more competitive and higher level of baseball, those of us wanting to play a more recreational brand of baseball had no options other than switching to slo-pitch or some other brand of fastball/softball.<br/><br/>

            We had noticed for years that the vast majority of Kitchener and Waterloo Minor Baseball house league players who had surpassed the age limit did not have anywhere to go to play the same brand of baseball.<br/><br/>

            It was decided that we would form an organization where we could enjoy one friendly baseball game per week. We had no idea how much interest there would be, so in our trial year, 2011, we formed a two-team "league". Our goal was to find at least 22 players, or 11 players per team. We set the upper limit to 30 players, or 15 players per team, but did not anticipate finding that many players.<br/><br/>

            What we discovered is that there are a number of people out there who are eager to play baseball. We found some fastball players who wanted to try their hand at baseball. We found some players with a lot of baseball experience who haven't played in a number of years but were anxious to get back on the field. We found some baseball fans who had very little playing experience, but wanted to learn to play the game they love. And we found some players who were just past minor baseball age and were looking for a new place to play.<br/><br/>

            In 2011, we filled two teams of 15 players and we were forced to turn a number of players away to keep the size of the teams reasonable. We played 13 games and while we enjoyed the no pressure environment, all the players showed a good level of determination and effort. It was a nurturing environment with the more experienced players sharing their knowledge and the lesser experienced players benefiting with significant improvement.<br/><br/>

            In 2012, we expanded into a four-team league. Each team played 9 regular season games and 4 playoff games. We found that the four team format worked very well and expect to continue with four teams into the foreseeable future.<br/><br/>
            </Typography>
          </Grid>
        </Grid>
        
      </Container>
    </section>
  );
}

SectionHistory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SectionHistory);
