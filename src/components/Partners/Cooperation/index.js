import React from "react";
import { Grid } from "@material-ui/core";
import PARTNER1 from "../../../images/Partners/InCooperation/01.jpg";
import PARTNER2 from "../../../images/Partners/InCooperation/02.png";
import PARTNER3 from "../../../images/Partners/InCooperation/03.png";
import PARTNER4 from "../../../images/Partners/InCooperation/04.png";
import PARTNER5 from "../../../images/Partners/InCooperation/05.png";
import PARTNER6 from "../../../images/Partners/InCooperation/06.png";
import PARTNER7 from "../../../images/Partners/InCooperation/07.png";
import PARTNER8 from "../../../images/Partners/InCooperation/08.png";
import "../styles.scss";

const Cooperation = () => {
  return (
    <Grid container justify="center" className="partners-container">
      <Grid item xs={12}>
        <p className="title">In Cooperation | بالتعاون مع</p>
      </Grid>
      <Grid container justify="center">
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER1} alt="ICRC" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER2} alt="Eithar" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER3} alt="h264" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER4} alt="salaud morisset" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER5} alt="mad solutions" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER6} alt="REDSTAR" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER7} alt="Palestine Film insitute" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER8} alt="traveling" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cooperation;
