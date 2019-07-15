import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  loginButton: {
    width: "100%",
    marginTop: "15px",
    borderRadius: "50px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#019999",
    border: "0",
    "&:hover": {
      backgroundColor: "#018786",
      border: "0"
    },
    fontFamily: "midan",
    fontSize: "22px"
  },

  textField: {
    fontFamily: "midan",
    fontSize: "24px"
  },

  cssUnderline: {
    "&:after": {
      borderBottomColor: "black"
    }
  }
});

class SigninForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
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

  render() {
    const { classes } = this.props;
    return (
      <DialogContent>
        <form onSubmit={this.handleSubmit}>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                placeholder="Email"
                type="email"
                fullWidth
                InputProps={{
                  classes: {
                    input: classes.textField,
                    underline: classes.cssUnderline
                  },

                  startAdornment: (
                    <InputAdornment>
                      <AccountCircle style={{ marginRight: "10px" }} />
                    </InputAdornment>
                  )
                }}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <TextField
                margin="dense"
                id="password"
                placeholder="Password"
                type="password"
                fullWidth
                InputProps={{
                  classes: {
                    input: classes.textField,
                    underline: classes.cssUnderline
                  },

                  startAdornment: (
                    <InputAdornment>
                      <VpnKey style={{ marginRight: "10px" }} />
                    </InputAdornment>
                  )
                }}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </Grid>
          </Grid>
          {this.props.authError && (
            <div
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                textAlign: "center"
              }}
            >
              خطأ في تسجيل الدخول
            </div>
          )}

          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Button
                onClick={this.handleSubmit}
                className={classes.loginButton}
              >
                LOG IN
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    );
  }
}

SigninForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SigninForm);
