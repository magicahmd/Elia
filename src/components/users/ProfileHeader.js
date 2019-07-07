import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    requestHeader: {
        display: 'flex',
        fontFamily: 'Midan',
        fontSize: '30px',
        color: '#333333',
        borderBottom: '1px rgba(0,0,0,0.15) solid',
        padding: '0px 12px 20px',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl',
        marginBottom: '40px',
    },

});

const ProfileHeader = (props) => {
    const { classes } = props;

    return (
        <Grid container className={classes.requestHeader}>

            <Grid item xs={12} style={{ textAlign: 'right', }}>
              <span style={{ color: '#A2230A' }}>الملف الشخصي</span>    
            </Grid>

        </Grid>

    )
}

ProfileHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileHeader);