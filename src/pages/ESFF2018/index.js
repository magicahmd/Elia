import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Slider from "../../components/ESFF2018/Slider";
import Catalogue from "../../components/ESFF2018/Catalogue";
import Bio from "../../components/ESFF2018/Bio";
import Videos from "../../components/ESFF2018/Videos";
import Winners from "../../components/ESFF2018/Winners";

class ESFF2018 extends Component {
  state = {};

  render() {
    return (
        <Grid container justify="center">
          <Slider />
          <Catalogue />
          <Bio />
          <Videos />
          <Winners />
        </Grid>
    );
  }
}

export default ESFF2018;
