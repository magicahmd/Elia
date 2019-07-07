import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        alignItems: 'center',
        textAlign: 'center',
        width: '250px',
    },

    stepTitle:{
        marginTop: '20px',
        marginBottom: '5px'
    },

    stepContent:{
        fontFamily: 'DINNEXTARABIC',
        fontSize: '15px',
        color: '#577083',
        marginBottom: '20px'
    }
});

const Step = (props) => {
    const { classes } = props;

    return (
        <Grid className={classes.root} item xs={12} sm={6} lg={3}>
        
            <img src={props.stepImage} alt="step" style={{ width: '20vh',}} />
            <div className={classes.stepTitle}>{props.stepTitle}</div>
            <div className={classes.stepContent}>{props.stepContent}</div>

        </Grid>
    )
}

Step.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Step);