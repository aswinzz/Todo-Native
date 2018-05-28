
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export const todoUpdate = ({ prop,value }) =>{
    return {
        type: 'TODO_UPDATE',
        payload: {prop,value}
    };
};

export const formReset = () =>{
  return {
    type: 'TODO_RESET'
  };
};

export const todoCreate = ({ task,duedate }) => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/todos`)
        .push({ task, duedate,status:false })
        .then(() => {
          dispatch({ type: 'TODO_CREATE' });
          Actions.main({ type: 'reset' });
        });
    };
  };

  export const todoSave = ({ task,duedate,uid }) => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
        .set({ task,duedate,status:false })
        .then(() => {
          dispatch({ type: 'TODO_SAVE' });
          Actions.main({ type: 'reset' });
        });
    };
  };

  export const todoComplete = ({task,duedate,uid})=>{
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
        .set({ task,duedate,status:true })
        .then(() => {
          dispatch({ type: 'TODO_SAVE' });
          Actions.main({ type: 'reset' });
        });
    };
  }

  export const todoFire = ({uid}) => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
        .remove()
        .then(() => {
          Actions.main({ type: 'reset' });
        });
    };
  };


  export const todoFetch = () => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/todos`)
        .on('value', snapshot => {
          dispatch({ type: 'TODO_FETCH_SUCCESS', payload: snapshot.val() });
        });
    };
  };