import React from "react";
import { Navbar } from "react-bootstrap";
//import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import eliaLogo from "../../images/ESFF-logo.png";

const styles = theme => ({
  navbar: {
    marginBottom: "0px",
    borderRadius: "0px",
    border: "0px",
    minHeight: "60px"
  },
  content: {
    display: "flex",
    marginLeft: "25px"
  },
  img: {
    height: "40px",
    marginTop: "10px"
  },
  text: {
    fontSize: "12px",
    marginLeft: "12px",
    marginTop: "20px",
    color: "#EEEEEE",
    display: "inline"
  }
});

class DroosiFooter extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Navbar inverse collapseOnSelect className={classes.navbar}>
        <div className={classes.content}>
          <img src={eliaLogo} alt="MAGIC" className={classes.img} />
          <span className={classes.text}>
            ESFF ELIA SHORT FILM FESTIVAL 2018-2020 © by Ahmad Salhi
          </span>
        </div>
      </Navbar>
    );
  }
}

DroosiFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DroosiFooter);
