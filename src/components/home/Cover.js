import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import coverImage from '../../images/eliaCover.jpg'


const styles = theme => ({
    root: {
        backgroundColor: '#414141',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '350px',
    },
    coverImage: {
        backgroundImage: `url(${coverImage})`,
        backgroundPosition: 'center',
        minHeight: '350px',
        width: '100%',
        opacity: 0.45,
    },
    coverGrid: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    title: {
        fontSize: '26px',
        color: 'white',
        marginTop: '10px'
    }
});

const Cover = (props) => {
   // const { classes } = props;

    return (
        <img src={coverImage} alt="logo" style={{width:'100%' }} />

    )
}

Cover.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cover);