import React from 'react'
import { Grid } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import IMG1 from '../../../images/ESFF2018/IMG1.jpg'
import IMG2 from '../../../images/ESFF2018/IMG2.jpg'
import IMG3 from '../../../images/ESFF2018/IMG3.jpg'
import IMG4 from '../../../images/ESFF2018/IMG4.jpg'
import 'react-awesome-slider/dist/styles.css';
import './styles.scss'

const Slider = () => {
    return (
        <Grid item xs={12}>
            <AwesomeSlider className="aws-btn">
              <div data-src={IMG1} />
              <div data-src={IMG2} />
              <div data-src={IMG3} />
              <div data-src={IMG4} />
            </AwesomeSlider>
        </Grid>
    )
}

export default Slider;
