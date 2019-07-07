import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    requestNotes: {
        display: 'flex',
        fontFamily: 'Midan',
        fontSize: '30px',
        color: '#333333',
        padding: '0px 12px 50px',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl',
    },

    notesText:{
        fontFamily: 'DINNEXTARABIC',
        fontSize: '16px',
        color: '#333333',
        marginTop: '30px'
    }


});

const RequestNotes = (props) => {
    const { classes } = props;

    return (
        <Grid container className={classes.requestNotes}>

            <Grid item xs={12} style={{ textAlign: 'right', }}>
               <p>الملاحظات:</p>  
               <p className={classes.notesText}>الملاحظات إن وجدت</p> 
            </Grid>

        </Grid>

    )
}

RequestNotes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestNotes);