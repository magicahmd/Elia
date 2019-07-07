import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    dataLabel: {
    },

    dataTextTitle: {
        textAlign:'right',
        fontFamily: 'Midan',
        fontSize: '20px',
        color: '#333333',
        fontWeight: 'bold',
        marginBottom:'0px'
    },

    dataText: {
        textAlign:'right',
        fontFamily: 'DINNEXTARABIC',
        fontSize: '15px',
        color: '#333333',
    },
});

const BoxDataLabel = (props) => {
    const { classes } = props;

    return (
            <Grid container className={classes.dataLabel}>
                <Grid item xs={2} style={{marginTop:'10px'}}>
                <img src={props.icon} alt="icon" style={{ width: '20px',}} />
                </Grid>
                <Grid item xs={10} >
                <div className={classes.dataTextTitle}>{props.title}</div>
                <div className={classes.dataText}>{props.data}</div>
                </Grid>
            </Grid>

    )
}

BoxDataLabel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoxDataLabel);