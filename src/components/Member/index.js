import React from "react";
import { Grid } from "@material-ui/core";

import "./styles.scss";

const Member = ({ image, name, position }) => {
  return (
    <Grid item md={2} sm={4} xs={10} className="member-container ">
      <img src={image} alt="ICRC" />
      <p className="name">{name}</p>
      <p className="position">{position}</p>
    </Grid>
  );
};

export default Member;
