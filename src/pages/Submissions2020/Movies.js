import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieView from "./MovieView";

const styles = theme => ({
  root: {
    minHeight: "100vh",
    textAlign: "center",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "20px"
  },

  title: {
    fontFamily: "DINNEXTARABIC",
    fontSize: "30px",
    color: "#414141",
    marginTop: "15px"
  }
});

const Movies = ({ classes, submissions }) => {
  return (
    <div style={{ backgroundColor: "#E8E6E6", width: "100%" }}>
      <div className={classes.root}>
        <p className={classes.title}>Submissions - 2020</p>
        {submissions && <p>({submissions.length} FILMS)</p>}
        <Grid
          container
          spacing={24}
          style={{ justifyContent: "center", direction: "rtl" }}
        >
          {submissions &&
            submissions.map(request => {
              return <MovieView request={request} key={request.id} />;
            })}
        </Grid>
        {!submissions && <p style={{ margin: "20px" }}>Loading...</p>}
      </div>
    </div>
  );
};

Movies.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Movies);
