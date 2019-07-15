import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../images/elia-logo.png";

import SigninForm from "../../components/login/SigninForm";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { signOut } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";

const styles = theme => ({
  navLoginButton: {
    color: "#999999",
    backgroundColor: "rgba(0,0,0,0)",
    border: "0",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.0)",
      border: "0"
    },
    fontFamily: "midan",
    fontSize: "24px",
    padding: "0px"
  },

  loginButton: {
    backgroundColor: "rgba(0,0,0,0)",
    border: "0",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.0)",
      border: "0"
    },
    fontFamily: "midan",
    fontSize: "24px"
  },

  menuButton: {
    flex: "1",
    backgroundColor: "rgba(0,0,0,0)",
    border: "0",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.0)",
      border: "0"
    },
    fontFamily: "DINNEXTARABIC",
    fontSize: "18px"
  },

  activeMenuButton: {
    flex: "1",
    border: "0",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.0)",
      border: "0"
    },
    fontFamily: "midan",
    fontSize: "30px",
    fontWeigt: "bold",
    color: "#019999"
  },

  textField: {
    fontFamily: "midan",
    fontSize: "24px"
  },

  dialogTitle: {
    textAlign: "center",
    fontFamily: "midan",
    fontSize: "24px",
    marginTop: "10px"
  },

  cssUnderline: {
    "&:after": {
      borderBottomColor: "black"
    }
  }
});

class Login extends React.Component {
  state = {
    open: true,
    signinForm: true,
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogin(this.state);
  };

  handleKeyPress = e => {
    if (e.key === "Enter" && e.target.id === "password") {
      this.props.handleLogin(this.state);
      // this.setState({ open: false });
    }
  };

  handleSigninForm = () => {
    this.setState({ signinForm: true });
  };

  handleSignupForm = () => {
    this.setState({ signinForm: false });
  };

  componentWillMount() {
    this.setState({
      signinForm: this.props.isLogin
    });
  }

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <Grid
        container
        justify="center"
        style={{ padding: "50px", minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={5}>
          <Paper style={{ padding: "30px" }}>
            <Grid container justify="center">
              <Grid item xs={12} sm={8}>
                <img src={logo} alt="logo" style={{ width: "100%" }} />
              </Grid>
            </Grid>
            <SigninForm
              handleLogin={this.props.signIn}
              authError={this.props.authError}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
