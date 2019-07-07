import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const styles = theme => ({

    

  horList: {
    direction: 'rtl',
    listStyleType: 'none',
    marginTop: '14px'
  },

  verList: {
    direction: 'rtl',
    listStyleType: 'none',
  },

  horListItem: {
    display: 'inline',
    marginRight: '35px',
  },

  verListItem: {
    marginTop: '20px',
    marginBottom: '20px',
    marginRight: '-40px',
  },

  link: {
    
    '&:link,&:visited,&:active': {
      textDecoration: 'none',
      color: '#999999',
    },

    '&:hover,': {
      color: 'white',
      textDecoration: 'none'
    },
  },

  activeLink:{

    '&:link,&:visited,&:active': {
      textDecoration: 'none',
      color: '#999999',
    },

    '&:hover,': {
      color: 'white',
      textDecoration: 'none'
    },
    
},

  

});

class VisitorLinks extends React.Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { classes } = this.props;
    let listStyle;
    let listItemStyle;

    if (this.state.width >= 768) {
      listStyle = classes.horList;
      listItemStyle = classes.horListItem;
    }

    else {
      listStyle = classes.verList;
      listItemStyle = classes.verListItem;
    }

    return (

      <ul className={listStyle}>
        <li className={listItemStyle}><NavLink to='/' className={classes.link} activeClassName={classes.activeLink} exact>الرئيسية</NavLink></li>
        <li className={listItemStyle}><NavLink to='/profile' className={classes.link} activeClassName={classes.activeLink} exact >الملف الشخصي</NavLink></li>
        <li className={listItemStyle}><NavLink to='/' className={classes.link} onClick={this.props.signOut}>تسجيل الخروج</NavLink></li>
      </ul>
    );
  }
}

VisitorLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(null, mapDispatchToProps)( withStyles(styles)(VisitorLinks))
