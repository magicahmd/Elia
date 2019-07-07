import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import filmLogo from '../../images/film-logo.png'

const styles = theme => ({
    root: {
        flexGrow: 1,
        fontFamily: 'midan',
    },

    paper: {
        padding: theme.spacing.unit * 2,
    },

    region: {
        fontFamily: 'midan',
        fontSize: '30px',
    },

    address: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '14px',
        color: '#577083',
    },

    content: {
        marginTop: '10px',
        fontFamily: 'midan',
        fontSize: '25px',
        textAlign: 'left',
    },

    applying: {
        display: 'flex',
        fontFamily: 'DINNEXTARABIC',
        fontSize: '15px',
        color: '#577083',
        textAlign: 'right',
        marginTop: '15px'
    },

    button: {
        backgroundColor: '#019999',
        '&:hover': {
            backgroundColor: '#018786',
        },
        color: 'white',
        fontFamily: 'midan',
        fontSize: '22px',
        width: '100%',
    },

});

const requestView = ({ classes, request }) => {
    return (
        <Grid item className={classes.root} xs={11} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>


                <img src={filmLogo} alt="location" style={{ width: '20vh', }} />
                <div className={classes.region}>{request.title}</div>
                <div className={classes.address}>{request.director}</div>

                <div className={classes.applying}>

                <Link to={'/request/'+request.id} style={{ textDecoration: 'none', width:'100%' }}>
                            <Button variant="contained" color="primary" className={classes.button} >
                                View
                             </Button>
                        </Link>

                </div>




            </Paper>

        </Grid>
    )
}

requestView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(requestView);