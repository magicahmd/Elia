import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Cover from "../components/home/Cover";

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100%',
  }
});

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Cover />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
