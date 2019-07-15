import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Grid } from "@material-ui/core";
import NewestCourses from "../../components/home/NewestCourses";

const Submissions2019 = props => {
  const { requests, auth } = props;
  return (
    <Grid container>{auth.uid && <NewestCourses requests={requests} />}</Grid>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    requests: state.firestore.ordered.requests
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "requests", orderBy: ["createdAt", "desc"] }])
)(Submissions2019);
