import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Cover from '../components/home/Cover'
//import How from '../components/home//How'
//import Updates from '../components/home//Updates'
import NewestCourses from '../components/home/NewestCourses'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Home = (props) => {

    const { classes } = props;
    const { requests } = props;
    const { auth } = props;


    return (
        <div className={classes.root}>
            <Cover />

            <Grid container>

                {/*
                <Updates />
                <How />
            */}

            {auth.uid && <NewestCourses requests={requests} /> }

            </Grid>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        requests: state.firestore.ordered.requests
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'requests', orderBy: ['createdAt','desc'], }
    ])
)(withStyles(styles)(Home))