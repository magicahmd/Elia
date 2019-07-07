import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import amber from '@material-ui/core/colors/amber';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';


const styles = theme => ({

    requestHeader: {
        display: 'flex',
        fontFamily: 'Midan',
        fontSize: '30px',
        color: '#333333',
        borderBottom: '1px rgba(0,0,0,0.15) solid',
        padding: '0px 12px 22px',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl',
        marginBottom: '40px',
    },

    applyingButton: {
        color: 'white',
        backgroundColor: amber[400],
        '&:hover': {
          backgroundColor: amber[500],
        },
        fontFamily: 'midan',
        fontSize: '24px',
        width: '100%'
    },

    applyiedButton: {
        color: 'white',
        backgroundColor: lightGreen[500],
        '&:hover': {
          backgroundColor: lightGreen[600],
        },
        fontFamily: 'midan',
        fontSize: '24px',
        width: '100%'
    },

    QuitButton: {
        color: 'white',
        backgroundColor: red[700],
        '&:hover': {
          backgroundColor: red[800],
        },
        fontFamily: 'midan',
        fontSize: '24px',
        width: '100%'
    },

    QuitedButton: {
        color: 'white',
        backgroundColor: 'black',
        fontFamily: 'midan',
        fontSize: '24px',
        width: '100%'
    },

});

const RequestHeader = (props) => {

    const { classes } = props;
    const { request } = props;

    return (
        <Grid container className={classes.requestHeader}>

            <Grid item xs={12} sm={12} style={{ textAlign: 'right', fontSize:'40px'}}>
            <span>{request.title}</span>    
            </Grid>

            <Grid item xs={12} sm={12} style={{ textAlign: 'right', fontFamily: 'DINNEXTARABIC',fontSize: '15px',color: '#333333'}}>
            <span>{request.synopsis}</span>    
            </Grid>

        </Grid>

    )
}

RequestHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestHeader);