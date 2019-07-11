import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { PDFReader } from 'reactjs-pdf-reader';
import pdfFile from '../../images/ELIA_CATALOGUE_2018.pdf'
import './styles.scss'
 
class Pdf extends Component {
  state = {
  }
 
  render() { 
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={10} className="scrollbar" id="style-1">
            <PDFReader url={pdfFile} showAllPage width={1400} />
        </Grid>
      </Grid>
    );
  }
}

export default Pdf;