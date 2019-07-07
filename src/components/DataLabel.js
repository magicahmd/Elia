import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    dataLabel: {
        marginBottom: '50px',
    },

    dataTextTitle: {
        fontFamily: 'Midan',
        fontSize: '20px',
        color: '#333333',
        fontWeight: 'bold',
    },

    dataText: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '15px',
        color: '#333333',
        width: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow:'ellipsis'
    },
});

const DataLabel = (props) => {
    const { classes } = props;

    return (
            <Grid container item xs={12} sm={6} className={classes.dataLabel}>
                <Grid item xs={2} >
                <img src={props.icon} alt="icon" style={{ width: '20px',}} />
                </Grid>
                <Grid item xs={10} >
                <div className={classes.dataTextTitle}>{props.title}</div>
                <div className={classes.dataText}>{props.data}</div>
                </Grid>
            </Grid>

    )
}

DataLabel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataLabel);