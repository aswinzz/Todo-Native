import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
export const emailChanged = (text) =>{
    return {
        type: 'email_changed',
        payload: text
    };
};

export const passwordChanged = (text) =>{
    return {
        type: 'password_changed',
        payload: text
    };
};

export const loginUser = ({email,password})=>{
    return (dispatch) => {
        dispatch({type:'LOGIN_USER'});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user=>{
            dispatch({type: 'LOGIN_USER_SUCCESS',payload:user});
            Actions.main();
        })
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user=>{
                dispatch({type: 'LOGIN_USER_SUCCESS',payload:user});
                Actions.main();
            })
            .catch(()=>{dispatch({type:'LOGIN_USER_FAIL'})});
        });
    };
};