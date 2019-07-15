import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import RequestForm from "../components/requests/RequestForm";
import RequestFormAr from "../components/requests/RequestFormAr";
import { connect } from "react-redux";
import { createRequest } from "../store/actions/requestsActions";

const styles = theme => ({
  root: {
    minHeight: "350px",
    textAlign: "center",
    backgroundColor: "#F9F9F9"
  },

  title: {
    fontFamily: "DINNEXTARABIC",
    fontSize: "30px",
    color: "#414141",
    marginBottom: "30px"
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
    backgroundColor: "rgba(0,0,0,0)",
    border: "0",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.0)",
      border: "0"
    },
    fontFamily: "DINNEXTARABIC",
    fontSize: "18px",
    color: "#D4AF37",
    fontWeight: "bold"
  }
});

class CreateRequest extends Component {
  state = {
    isEnglish: true
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleLanguageToAr = () => {
    this.setState({ isEnglish: false });
  };

  handleLanguageToEn = () => {
    this.setState({ isEnglish: true });
  };

  render() {
    const { classes } = this.props;
    const enClass = this.state.isEnglish
      ? classes.activeMenuButton
      : classes.menuButton;
    const arClass = !this.state.isEnglish
      ? classes.activeMenuButton
      : classes.menuButton;
    return (
      <Grid container className={classes.root}>
        <div
          style={{
            display: "flex",
            direction: "rtl",
            width: "30%",
            margin: "10px auto"
          }}
        >
          <Button onClick={this.handleLanguageToAr} className={arClass}>
            العربية
          </Button>

          <Button onClick={this.handleLanguageToEn} className={enClass}>
            English
          </Button>
        </div>

        <Grid container spacing={24} style={{ justifyContent: "center" }}>
          {this.state.isEnglish && (
            <RequestForm handleCreateRequest={this.props.createRequest} />
          )}

          {!this.state.isEnglish && (
            <RequestFormAr handleCreateRequest={this.props.createRequest} />
          )}
        </Grid>
      </Grid>
    );
  }
}

CreateRequest.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    createRequest: request => dispatch(createRequest(request))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(CreateRequest));
