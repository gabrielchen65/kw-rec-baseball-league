import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import Card from '@material-ui/core/Card';
import { CardContent } from "@material-ui/core";


const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    //backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: "flex",
    position: "relative",
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
    marginBottom: theme.spacing(5),
    alignItems: 'center',
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  },
  card: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid: {
    alignItems: 'center',
    display: 'flex',
  },
});

function SectionIntroduction(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <div style={{textAlign: 'center'}}>
              <Typography variant="h4" marked="center" component="h2" className={classes.title} >
                League Rules
              </Typography>
            </div>
          </Grid>

          <Grid container spacing={5}>
            
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.item}>
                    <Typography variant="h6" className={classes.title}>
                      Open Lineup
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      every player bats in the lineup and players can freely substitute into defensive positions
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                    Number of Players
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    a team may play with a minimum 8 players in the lineup; less than 8 will result in a forfeit
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                    7 Inning Games
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    Although no inning can start more than two hours after the first pitch
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                    Per Inning Run Cap
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    There is a maximum of 7 runs scored in each half inning; once 7 runs are scored, the half inning is over
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                    No Malicious Contact 
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    plowing into the catcher, or any other types of malicious contact, will result in a game ejection, a review of the incident, and possible further suspension
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                    Metal Bats
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    metal bats are allowed, as well as composite bats; bats should be baseball bats, not softball bats
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                   Player Bats
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    non-wood bats that have not been supplied by KWRB (eg. owned by a player) must be BBCOR or BESR certified
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                    Pitchers
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    any individual pitcher will be limited to pitching a maximum of 4 innings per game
                  </Typography>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <div className={classes.item}>
                  <Typography variant="h6" className={classes.title}>
                    No Shorts
                  </Typography>
                  <Typography variant="body" gutterBottom>
                    long pants are required
                  </Typography>
                </div>
              </Card>
            </Grid>
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
