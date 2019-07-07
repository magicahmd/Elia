import React from 'react';
import { Navbar } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import magicAce from '../../images/magicAce.png'


const styles = theme => ({

});


class DroosiFooter extends React.Component {

    render() {

        //const { classes } = this.props;

        return (
            <Navbar inverse collapseOnSelect style={{ marginBottom: '0px', borderRadius: '0px', border: '0px', minHeight: '60px' }}>

                <div style={{ display: 'flex',marginLeft:'25px' }}>
                    <img src={magicAce} alt="MAGIC" style={{ height: '40px', marginTop: '10px' }} />
                    <span style={{ fontSize: '12px', marginLeft: '12px', marginTop:'20px', color: '#EEEEEE', display: 'inline' }}>Copyright © 2019 AHMD SALHI</span>
                </div>

            </Navbar>
        );
    }
}

DroosiFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DroosiFooter);