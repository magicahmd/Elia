import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../../images/director.png'

const styles = theme => ({
    avatar:{
        width: '160px',
        borderRadius:'50%',
        border:'3px white solid',
        boxShadow: '1px 2px 1px grey',
        margin: '5px'
    }
})


const UserAvatar = (props) => {
    const { classes } = props;

    return (
        <img src={Avatar} alt="Avatar" className={classes.avatar} />
    )
}

UserAvatar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);