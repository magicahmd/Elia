import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Grid } from "@material-ui/core";
import Movies from "./Movies";

const Submissions2020 = props => {
  const { submissions, auth } = props;
  return (
    <Grid container>{auth.uid && <Movies submissions={submissions} />}</Grid>
  );
};

const mapStateToProps = state => {  
  return {
    auth: state.firebase.auth,
    submissions: state.firestore.ordered.submissions_2020
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "submissions_2020", orderBy: ["createdAt", "desc"] }])
)(Submissions2020);
