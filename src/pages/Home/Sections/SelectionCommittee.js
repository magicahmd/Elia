import React from "react";
import { Grid } from "@material-ui/core";
import Member1 from '../../../images/SelectionCommitte/01.png'
import Member2 from '../../../images/SelectionCommitte/02.png'
import Member3 from '../../../images/SelectionCommitte/03.png'
import Member4 from '../../../images/SelectionCommitte/04.png'
import Member5 from '../../../images/SelectionCommitte/05.png'
import Member6 from '../../../images/SelectionCommitte/06.png'

const SelectionCommittee = () => {
  return (
    <Grid container justify="center">
      <p className="title">SELECTION COMMITTEE | لجنة الاختيار</p>
      <Grid container justify="center" spacing={8}>
        <Grid item xs={12} sm={6}>
          <img src={Member1} alt="Member 1" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Member2} alt="Member 2" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Member3} alt="Member 3" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Member4} alt="Member 4" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Member5} alt="Member 5" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Member6} alt="Member 6" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectionCommittee;
