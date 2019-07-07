import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import RequestHeader from './RequestHeader'
import DataLabel from '../DataLabel'

import filmIcon from '../../icons/film.png'
import locationIcon from '../../icons/location.png'
import languageIcon from '../../icons/language.png'
import linkIcon from '../../icons/link-symbol.png'
import passwordIcon from '../../icons/password.png'
import appointmentIcon from '../../icons/appointment.png'
import createdDateIcon from '../../icons/createdDate.png'

const styles = theme => ({
    root: {
        flexGrow: 1,
        fontFamily: 'midan',
    },

    header:{
        display: 'flex',
        fontFamily: 'Midan',
        fontSize: '40px',
        color: '#333333',
        textAlign: 'right',
        borderBottom: '1px rgba(0,0,0,0.15) solid',
        padding: '0px 12px 16px',
        justifyContent: 'center',
    },

    paper: {
        padding: theme.spacing.unit * 2,
        marginBottom: '10px',
        minHeight: '600px'
    },

    region: {
        fontFamily: 'midan',
        fontSize: '30px',
        color: '#A2230A'
    },

    address: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '14px',
        color: '#577083',
    },

    content: {
        marginTop: '35px',
        fontFamily: 'midan',
        fontSize: '25px',
        textAlign: 'right',
    },

    dataContainer: {
        display: 'flex',
        fontFamily: 'Midan',
        fontSize: '20px',
        color: '#333333',
        padding: '0px 12px 16px',
        alignItems: 'center',
        direction: 'rtl',
        textAlign: 'right',
        borderBottom: '1px rgba(0,0,0,0.15) solid',
    },

});

const RequestContent = (props) => {
    const { classes } = props;
    const { request } = props;

    return (
        <Grid item className={classes.root} xs={12} sm={11} md={5} lg={5}>

            <Paper className={classes.paper}>

                <RequestHeader request={request} />

                <Grid container className={classes.dataContainer}>
                <DataLabel title='البلد المُنتج' icon={locationIcon} data={request.country} />
                <DataLabel title='فئة الفيلم' icon={filmIcon} data={request.category} />
                <DataLabel title='اللغة' icon={languageIcon} data={request.language} />
                <DataLabel title='مدة الفيلم' icon={appointmentIcon} data={request.duration} />
                <DataLabel title='سنة إنتاج الفيلم' icon={createdDateIcon} data={request.year} />
                <DataLabel title='رابط الفيلم' icon={linkIcon} data={request.movieLink} />
                {request.moviePassword && <DataLabel title='كلمة المرور' icon={passwordIcon} data={request.moviePassword} />}
                </Grid>

            </Paper>

        </Grid>
    )
}

RequestContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestContent);