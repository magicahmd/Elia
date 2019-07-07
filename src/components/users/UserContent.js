import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ProfileHeader from './ProfileHeader'
import DataLabel from '../DataLabel'
import UserBio from './UserBio'


import schoolIcon from '../../icons/school.png'
import classesIcon from '../../icons/classes.png'
import universityIcon from '../../icons/university.png'
import experienceIcon from '../../icons/applicants.png'
import tawjihiIcon from '../../icons/tawjihi.png'
import majorIcon from '../../icons/grade.png'
import hobbiesIcon from '../../icons/hobbies.png'
import coursesIcon from '../../icons/major.png'



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

const UserContent = (props) => {
    const { classes } = props;

    return (
        <Grid item className={classes.root} xs={12} sm={11} md={5} lg={5}>

            <Paper className={classes.paper}>

                <ProfileHeader />

                <Grid container className={classes.dataContainer}>
                <DataLabel title='المدرسة' icon={schoolIcon} data='المدرسة' />
                <DataLabel title='معدل التوجيهي' icon={tawjihiIcon} data='معدل التوجيهي' />
                <DataLabel title='معلم للصفوف' icon={classesIcon} data='المرحلة' />
                <DataLabel title='الجامعة' icon={universityIcon} data='الجامعة' />
                <DataLabel title='التخصص' icon={majorIcon} data='التخصص' />
                <DataLabel title='سنوات الخبرة' icon={experienceIcon} data='سنوات الخبرة' />
                <DataLabel title='الهوايات' icon={hobbiesIcon} data='الهوايات' />
                <DataLabel title='المواد القادر على تدريسها' icon={coursesIcon} data='المواد' />

                </Grid>

                <UserBio />

            </Paper>

        </Grid>
    )
}

UserContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserContent);