import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';


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
    color: amber[500],
  }

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
        <li className={listItemStyle}><NavLink to="/" className={classes.link} activeClassName={classes.activeLink} exact>الرئيسية</NavLink></li>
      </ul>
    );
  }
}

VisitorLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VisitorLinks);