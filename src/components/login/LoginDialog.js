import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
import logo from '../../images/elia-logo.png';


import SigninForm from './SigninForm'
import SingupForm from './SignupForm'

const styles = theme => ({

    navLoginButton:{
      color: '#999999',
        backgroundColor:'rgba(0,0,0,0)',
        border: '0',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.0)',
          border:'0',
        },
        fontFamily: 'midan',
        fontSize: '24px',
        padding: '0px'
    },

    loginButton:{
        backgroundColor:'rgba(0,0,0,0)',
        border: '0',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.0)',
          border:'0',
        },
        fontFamily: 'midan',
        fontSize: '24px',
    },

    menuButton:{
      flex: '1',
      backgroundColor:'rgba(0,0,0,0)',
      border: '0',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.0)',
        border:'0',
      },
      fontFamily: 'DINNEXTARABIC',
      fontSize: '18px',
  },

  activeMenuButton:{
    flex: '1',
    border: '0',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.0)',
      border:'0',
    },
    fontFamily: 'midan',
    fontSize: '30px',
    fontWeigt: 'bold',
    color: '#019999',
},
  
    textField:{
        fontFamily: 'midan',
        fontSize: '24px',
    },

    dialogTitle:{
        textAlign:'center',
        fontFamily: 'midan',
        fontSize: '24px',
        marginTop:'10px'
    },

    cssUnderline: {
        '&:after': {
          borderBottomColor: 'black',
        },
      },

});

class LoginDialog extends React.Component {

  state = {
    open: false,
    signinForm: true,
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.id ==='password') {
      this.props.handleLogin(this.state);
     // this.setState({ open: false });
    }
  }

  handleSigninForm = () => {
    this.setState({signinForm:true})
  }

  handleSignupForm = () => {
    this.setState({signinForm:false})
  }

  componentWillMount(){
    this.setState({
      signinForm: this.props.isLogin,
    })
  }

  render() {
    const { classes } = this.props;
    const form = this.state.signinForm ?  <SigninForm handleLogin={this.props.handleLogin} authError={this.props.authError} /> : <SingupForm />;
    const singinClass = this.state.signinForm ?  classes.activeMenuButton : classes.menuButton ;
    //const singupClass = !this.state.signinForm ?  classes.activeMenuButton : classes.menuButton ;

    return (
      <span>
        <button onClick={this.handleClickOpen} className={classes.navLoginButton}>
          LOGIN
        </button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >

        <div style={{display:'flex',direction:'rtl',borderBottom:'1px solid #ccc'}}>
        <Button onClick={this.handleSigninForm} className={singinClass}>
          Login
        </Button>
      {/*
      <Button onClick={this.handleSignupForm} className={singupClass}>
         التسجيل
        </Button>
      */}
        
        </div>

        <img src={logo} alt="logo" style={{ width: '40vh', margin:'10px auto', }} />
        
        {form}

        </Dialog>
      </span>

      
    );
  }
}

LoginDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LoginDialog);