import React from 'react'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import pdfFile from '../../../images/ELIA_CATALOGUE_2018.pdf'
import Pdf from "../../Pdf";

import './styles.scss'

const Catalogue = () => {
    return (
        <Grid container className="catalogue-container">
            <Grid item xs={12}>
              <p className="title">
                ELIA SHORT FILMS CATALOGUE 2018
              </p>
            </Grid>
            <Grid container justify="center">
                <Link to={pdfFile} target="_blank" download>
                    <button className="btn btn-1 btn-1a">
                        DOWNLOAD CATALOGUE
                    </button>
                </Link>
            </Grid>
            <Pdf />
        </Grid>
    )
}

export default Catalogue;
