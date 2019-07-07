import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UserBox from '../components/users/UserBox';
import UserContent from '../components/users/UserContent';

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

const Profile = (props) => {
    const { classes } = props;
    const { auth, profile } = props;

    if (!auth.uid) return <Redirect to='/' /> 

    return (
        <div style={{ backgroundColor: '#F9F9F9', width: '100%' }}>
            <div className={classes.root} >
                <Grid container spacing={24} style={{justifyContent:'center'}}>

                    <UserBox userData = {profile} />
                    <UserContent />

                </Grid>
            </div>
        </div>

    )
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

export default connect(mapStateToProps)(withStyles(styles)(Profile))
