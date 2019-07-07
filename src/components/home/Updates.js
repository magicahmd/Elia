import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DroosiTable from './DroosiTable'

const styles = theme => ({
    root: {
        minHeight: '320px',
        textAlign: 'center',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        direction: 'rtl',
    },

    title: {
        fontFamily: 'DINNEXTARABIC',
        fontSize: '30px',
        color: '#414141',
        marginTop: '10px',
        marginBottom: '30px'
    }

});

const Updates = (props) => {
    const { classes } = props;

    return (
        <div style={{ width: '100%' }}>
            <div className={classes.root} >
                <p className={classes.title}>أحدث الحركات</p>
                <DroosiTable />
            </div>
        </div>

    )
}

Updates.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Updates);