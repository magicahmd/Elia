import React from "react";
import { Grid } from "@material-ui/core";
import Winner1 from '../../../images/ESFF2018/WINNER1.png'
import Winner2 from '../../../images/ESFF2018/WINNER2.png'
import Winner3 from '../../../images/ESFF2018/WINNER3.png'
import Winner4 from '../../../images/ESFF2018/WINNER4.png'
import Winner5 from '../../../images/ESFF2018/WINNER5.png'

const Winners = () => {
  return (
    <Grid container className="winners-container" style={{ background: "#e9e9e9" }}>
      <Grid item xs={12}>
        <p className="title">Winners</p>
      </Grid>
      <Grid container justify="center" spacing={8} style={{ padding: "8px" }}>
        <Grid item xs={12} sm={5}>
          <img src={Winner1} alt="winner 1" style={{width: '100%'}}/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={Winner2} alt="winner 2" style={{width: '100%'}}/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={Winner3} alt="winner 3" style={{width: '100%'}}/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={Winner4} alt="winner 4" style={{width: '100%'}}/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={Winner5} alt="winner 5" style={{width: '100%'}}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Winners;
