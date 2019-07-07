import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StarRatingComponent from 'react-star-rating-component';
import BoxDataLabel from '../BoxDataLabel'

import UserAvatar from './UserAvatar'

import lessonsIcon from '../../icons/lessons.png'
import moneyIcon from '../../icons/money.png'


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
        marginBottom: '5px',
    },
    dataContainer: {
        color: '#333333',
        alignItems: 'center',
        direction: 'rtl',
        textAlign: 'right',
    },
    dataTextTitle: {
        fontFamily: 'Midan',
        fontSize: '20px',
        color: '#333333',
        fontWeight: 'bold',
        marginBottom:'-40px'
    },

    dataText: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '15px',
        color: '#333333',
        marginBottom:'-80px'
    },
});

const UserBox = (props) => {
    const { classes,userData } = props;

    return (
        <Grid item className={classes.root} xs={11} sm={11} md={3} lg={3}>
            <Paper className={classes.paper}>

                <UserAvatar />
                <div className={classes.content}>{userData.firstName}</div>
                <StarRatingComponent
                    name="TeacherRate"
                    starCount={5}
                    value={4}
                    editing={false}
                    //onStarClick={(nextValue)=>console.log(nextValue)}
                    />


                <Grid container className={classes.dataContainer}>
                <BoxDataLabel title='أعطى' icon={lessonsIcon} data='7 دروس' />
                <BoxDataLabel title='100' icon={moneyIcon} data='شيكل/الساعة' />
                </Grid>
                

            </Paper>

        </Grid>
    )
}

UserBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserBox);