import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import RUserBox from '../../components/users/RUserBox';
import RequestContent from '../../components/requests/RequestContent';

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const styles = theme => ({
    root: {
        minHeight: '350px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '30px'
    },

    title: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '30px',
        color: '#414141',
        marginBottom: '30px'
    }

});

class Movie2020 extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { classes } = this.props;
        const { request, auth } = this.props;

        if (!auth.uid) return <Redirect to='/' />

        if (request)
            return (
                <div style={{ backgroundColor: '#F9F9F9', width: '100%', minHeight: '100vh' }}>
                    <div className={classes.root} >
                        <Grid container spacing={24} style={{ justifyContent: 'center' }}>
                            <RUserBox request={request} />
                            <RequestContent request={request} />
                        </Grid>
                    </div>
                </div>
            )

        else return (
            <div style={{ backgroundColor: '#F9F9F9', width: '100%', minHeight: '100vh' }}>
                <div className={classes.root} >
                    <Grid container spacing={24} style={{ justifyContent: 'center' }}>
                        Loading
                    </Grid>
                </div>
            </div>
        )
    }
}

Movie2020.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.movie_id;
    const submissions_2020 = state.firestore.data.submissions_2020;
    const request = submissions_2020 ? submissions_2020[id] : null
    return {
        request: request,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'submissions_2020'
    }])
)(withStyles(styles)(Movie2020))