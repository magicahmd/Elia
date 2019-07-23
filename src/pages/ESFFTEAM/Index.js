import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import YousefSalhi from "../../images/EliaTeam/YousefSalhi.png";
import AkramDwaik from "../../images/EliaTeam/AkramDwaik.png";
import LaithTahboub from "../../images/EliaTeam/LaithTahboub.png";
import Member from "../../components/Member";

class ESFFTEAM extends Component {
  state = {};

  render() {
    return (
      <Grid container justify="center">
          <p className="title">ESFF TEAM MEMBERS</p>
        <Grid container justify="center" spacing={16}>
          <Member
            image={YousefSalhi}
            name="Yousef Salhi"
            position="Founder, Festival Director"
          />
          <Member
            image={AkramDwaik}
            name="Akram Dwaik"
            position="Executive Director"
          />
          <Member
            image={LaithTahboub}
            name="Laith Tahboub"
            position="Artistic Coordinator"
          />
        </Grid>
      </Grid>
    );
  }
}

export default ESFFTEAM;
