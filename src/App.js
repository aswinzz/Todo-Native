import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';
class Main extends Component {
    componentWillMount(){
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCT3GDktcu4ora9h9dhNE8aewotq4q6HHs",
            authDomain: "todo-6e76b.firebaseapp.com",
            databaseURL: "https://todo-6e76b.firebaseio.com",
            projectId: "todo-6e76b",
            storageBucket: "todo-6e76b.appspot.com",
            messagingSenderId: "450945546522"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        );
    }
}

export default Main;