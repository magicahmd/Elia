import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RequestView from '../requests/RequestView';

const styles = theme => ({
    root: {
        minHeight: '350px',
        textAlign: 'center',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '20px',
    },

    title: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '30px',
        color: '#414141',
        marginTop: '15px',
    }

});

const NewestCourses = ({ classes, requests }) => {
    return (
        <div style={{ backgroundColor: '#E8E6E6', width: '100%' }}>
            <div className={classes.root} >
                <p className={classes.title}>The Newest Submissions</p>
                { requests && <p>({requests.length} FILMS)</p> }
                <Grid container spacing={24} style={{ justifyContent: 'center',direction: 'rtl' }}>

                    {requests && requests.map(request => {
                        return (
                            <RequestView
                            request={request}
                            key={request.id}
                            />
                        )
                    })}

                </Grid>
            </div>
            <div style={{ minHeight: '10px' }}></div>
        </div>

    )
}

NewestCourses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewestCourses);