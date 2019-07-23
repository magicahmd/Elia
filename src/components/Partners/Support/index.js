import React from 'react'
import { Grid } from '@material-ui/core';
import PARTNER1 from '../../../images/Partners/SupportedBy/01.jpg'
import '../styles.scss'

const Support = () => {
    return (
        <Grid container justify="center" className="partners-container">
          <Grid item xs={12}>
              <p className="title">
                Supported By | بدعم من
              </p>
          </Grid>
          <Grid item lg={2} xs={6}>
            <img src={PARTNER1} alt="AL-Qattan"/>
          </Grid>  
        </Grid>
    )
}

export default Support;

