import React from "react";
import { Grid } from "@material-ui/core";
import PARTNER1 from "../../../images/Partners/MediaSponsor/01.png";
import PARTNER2 from "../../../images/Partners/MediaSponsor/02.jpg";
import PARTNER3 from "../../../images/Partners/MediaSponsor/03.png";
import PARTNER4 from "../../../images/Partners/MediaSponsor/04.png";
import PARTNER5 from "../../../images/Partners/MediaSponsor/05.jpg";
import "../styles.scss";

const Media = () => {
  return (
    <Grid container justify="center" className="partners-container">
      <Grid item xs={12}>
        <p className="title">Media Sponsor | الراعي الإعلامي</p>
      </Grid>
      <Grid container justify="center">
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER1} alt="24FM" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER2} alt="caravan" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER3} alt="YaboosFM" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER4} alt="rumman" />
        </Grid>
        <Grid item lg={1} md={2} xs={6}>
          <img src={PARTNER5} alt="ro'ya" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Media;
