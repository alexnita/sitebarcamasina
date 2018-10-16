import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuItem: {
    color: "#FFF",
    fontSize: 18,
    display: "inline-block"
  }
};

class Menu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Inchirieri barci si masini
            </Typography>
            <MenuList>
              <MenuItem className={classes.menuItem}>
                <Link to="/">Acasa</Link>
              </MenuItem>
              <MenuItem className={classes.menuItem}>Despre noi</MenuItem>
              <MenuItem className={classes.menuItem}>
                <Link to="/rent">Inchirieri</Link>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <Link to="/gallery">Galerie</Link>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <Link to="/comingsoon">In curand</Link>
              </MenuItem>
              <MenuItem className={classes.menuItem}>
                <Link to="/contact">Contact</Link>
              </MenuItem>
            </MenuList>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
