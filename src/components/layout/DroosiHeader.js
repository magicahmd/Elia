import React from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

//import VisitorLinks from './VisitorLinks'
//import UserLinks from './UserLinks'
import LoginDialog from '../login/LoginDialog';

import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { signOut } from '../../store/actions/authActions'
import logo from '../../images/elia-logo.png'
import { Link } from 'react-router-dom'


const styles = theme => ({
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

  horList: {
    fontFamily:'midan',
    fontSize:'24px',
    listStyleType: 'none',
    marginTop: '24px',
  },

  verList: {
    listStyleType: 'none',
  },

  horListItem: {
    display: 'inline',
    marginLeft: '50px'

  },

  verListItem: {
    marginTop: '20px',
    marginBottom: '20px',
    marginRight: '-40px',
  },

});


class DroosiHeader extends React.Component {

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
    const { auth } = this.props;

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

    // const links = auth.uid ? <UserLinks /> : <VisitorLinks />;


    return (
      <Navbar inverse collapseOnSelect style={{ marginBottom: '0px', borderRadius: '0px', border: '0px' }}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/' className={classes.link} style={{ height: '80px' }}>
              <img src={logo} alt="logo" style={{ height: '100%' }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle style={{ marginTop: '20px' }} />
        </Navbar.Header>
        <Navbar.Collapse >

          <ul className={listStyle}>
            <li className={listItemStyle}><Link to='/' className={classes.link}>HOME</Link></li>
            <li className={listItemStyle}><Link to='/submit' className={classes.link}><span style={{color:'#019999'}}>SUBMIT 2019</span></Link></li>
            
          {!auth.uid &&  <li className={listItemStyle}>
          <LoginDialog
              handleLogin={this.props.signIn}
              auth={this.props.auth}
              authError={this.props.authError}
              isLogin={true}
            /></li>}

{auth.uid && <li className={listItemStyle}><Link to='/' className={classes.link} onClick={this.props.signOut}>LOG OUT</Link></li>
}


          </ul>

          

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

DroosiHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DroosiHeader))
