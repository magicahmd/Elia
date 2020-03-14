import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FollowAt from "react-social-media-follow";

import coverImage from "../../images/Elia2020.jpg";
import Parallax from "../../components/Parallax";
import { Grid } from "@material-ui/core";
import { container, title } from "../../assets/styles/material-kit-react";
import classNames from "classnames";
import EliaInfo from "./Sections/EliaInfo";
import SelectionCommittee from "./Sections/SelectionCommittee";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    zIndex: "12",
    margin: "20px",
    ...container
  },
  socialMedia: {
    position: "absolute",
    top: "100px",
    right: "6px",
    zIndex: "100" 
  },
  title: {
    ...title,
    display: "inline-block",
    fontSize: "50px",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    fontFamily: "midan",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
});

const links = [
  'https://www.facebook.com/EliaESFF/',
  'https://www.instagram.com/eliafestival',
];

const Home = props => {
  const { classes } = props;

  return (
    <div>
      <Grid container justify="center" className={classes.socialMedia}>
        <FollowAt links = {links} color="#222222" hoverColor="white" />
      </Grid>
      <Parallax filter image={coverImage}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                ELIA SHORT FILMS FESTIVAL
                <br />
                مهرجان إيليا للأفلام القصيرة
              </h1>
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <EliaInfo />
          {/* <SelectionCommittee /> */}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
