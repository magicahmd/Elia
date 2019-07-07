import authReducer from './authReducer'
import requestsReducer from './requestsReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  request: requestsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer