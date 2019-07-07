import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BoxDataLabel from '../BoxDataLabel'
import phoneIcon from '../../icons/phone-no.png'
import emailIcon from '../../icons/email.png'


import UserAvatar from './UserAvatar'

const styles = theme => ({
    root: {
        flexGrow: 1,
        fontFamily: 'midan',
    },

    paper: {
        padding: theme.spacing.unit * 4,
        minHeight: '220px'
    },

    content: {
        fontFamily: 'midan',
        fontSize: '28px',
        color: '#333333',
        marginTop: '20px'
    },

    dataContainer: {
        color: '#333333',
        alignItems: 'center',
        direction: 'rtl',
        textAlign: 'right',
    },
});

const RUserBox = (props) => {
    const { classes, request } = props;

    return (
        <Grid item className={classes.root} xs={11} sm={11} md={3} lg={3}>
            <Paper className={classes.paper}>

                <UserAvatar />
                <div className={classes.content}>{request.director}</div>
                <div style={{ textAlign: 'right', fontFamily: 'DINNEXTARABIC', fontSize: '15px', color: '#333333', marginBottom: '30px' }}>{request.directorBio}</div>

                <div style={{ direction: 'rtl' }}>
                    <BoxDataLabel title='الإيميل' icon={emailIcon} data={request.directorEmail} />
                </div>
                <br/>
                <div style={{ direction: 'rtl' }}>
                    <BoxDataLabel title='رقم الهاتف' icon={phoneIcon} data={request.directorPhone} />
                </div>
              

            </Paper>

        </Grid>
    )
}

RUserBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RUserBox);