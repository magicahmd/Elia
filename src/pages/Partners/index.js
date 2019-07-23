import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Support from '../../components/Partners/Support'
import PartnershipWith from "../../components/Partners/Partnership";
import Cooperation from "../../components/Partners/Cooperation";
import Media from "../../components/Partners/Media";

class Partners extends Component {
  state = {};

  render() {
    return (
      <Grid container justify="center">
        <Support />
        <PartnershipWith />
        <Cooperation />
        <Media />
      </Grid>
    );
  }
}

export default Partners;
