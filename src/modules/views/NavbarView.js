import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from "react-router-dom";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  rightLinkActive: {
    fontSize: 16,
    color: theme.palette.secondary.dark,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

const NavbarView = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftLinkActive} />
          <Link
            variant='caption'
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {"K-W Recreational Baseball"}
          </Link>
{/*           <NavLink
            className={({isActive}) => 
                isActive? classes.rightLinkActive : classes.rightLink}
            to="/"
            end
          >
            {"K-W Recreational Baseball"}
          </NavLink> */}
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/rosters"
            >
              {"Rosters"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/schedule"
            >
              {"Schedule"}
            </Link>
{/*             <NavLink
              className={({isActive}) => 
                isActive? classes.rightLinkActive : classes.rightLink}
              to="/rosters"
            >
              {"RosterNV "}
            </NavLink>
            <NavLink
              className={({isActive}) => 
                isActive? classes.rightLinkActive : classes.rightLink}
              to="/schedule"
            >
              {"ScheduleNV "}
            </NavLink> */}
{/*             <div>
              <Button className={classes.rightLink} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  Menu
              </Button>
              <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                  <MenuItem onClick={handleClose}>League Introduction</MenuItem>
                  <MenuItem onClick={handleClose}>Rules</MenuItem>
                  <MenuItem onClick={handleClose}>Rosters 2023</MenuItem>
                  <MenuItem onClick={handleClose}>Stats</MenuItem>
                  <MenuItem onClick={handleClose}>Game Logs</MenuItem>
                  <MenuItem onClick={handleClose}>History</MenuItem>
                  <MenuItem onClick={handleClose}>Registration</MenuItem>
                  <MenuItem onClick={handleClose}>FAQ</MenuItem>
                  <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                  <MenuItem onClick={handleClose}>Links</MenuItem>
              </Menu>
            </div> */}

            {/* <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Sign Up"}
            </Link> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
};

NavbarView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavbarView);
