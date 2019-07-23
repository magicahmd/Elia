import React from "react";
import { Grid } from "@material-ui/core";
import PARTNER1 from "../../../images/Partners/PartnershipWith/01.png";
import PARTNER2 from "../../../images/Partners/PartnershipWith/02.jpg";
import PARTNER3 from "../../../images/Partners/PartnershipWith/03.jpg";
import PARTNER4 from "../../../images/Partners/PartnershipWith/04.png";
import PARTNER5 from "../../../images/Partners/PartnershipWith/05.jpg";
import PARTNER6 from "../../../images/Partners/PartnershipWith/06.jpg";
import PARTNER7 from "../../../images/Partners/PartnershipWith/07.png";
import PARTNER8 from "../../../images/Partners/PartnershipWith/08.jpg";
import PARTNER9 from "../../../images/Partners/PartnershipWith/09.png";
import PARTNER10 from "../../../images/Partners/PartnershipWith/10.jpg";
import "../styles.scss";

const Partnership = () => {
  return (
    <Grid container justify="center" className="partners-container">
      <Grid item xs={12}>
        <p className="title">Partnership With | بالشراكة مع</p>
      </Grid>
      <Grid container justify="center">
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER1} alt="Institut français de Jérusalem" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER2} alt="konsolosluk" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER3} alt="YMCA" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER4} alt="yunus emre" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER5} alt="YWCA" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER6} alt="AL-Saraya" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER7} alt="AL-Ma3mal" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER8} alt="AL-Laqlaq" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER9} alt="masar" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER10} alt="yabus" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Partnership;
