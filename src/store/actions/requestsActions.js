export const createRequest = (request) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
   //const profile = getState().firebase.profile;
   // const authorId = getState().firebase.auth.uid;
    firestore.collection('submissions_2020').add({
      ...request,
      //authorFirstName: 'ahmd',
      //authorLastName: 'salhi',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_REQUEST_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_REQUEST_ERROR' }, err);
    });
  }
};