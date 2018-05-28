import React from 'react';
import { Scene,Router,Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import TodoEdit from './components/TodoEdit';
const RouterComponent = () =>{
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene key="todoList" rightTitle="  Add" onRight={()=>Actions.createTodo()} component={TodoList} title="Todo" initial/>
                    <Scene key="createTodo" component={CreateTodo} title="Create Task"/>
                    <Scene key="todoEdit" component={TodoEdit} title="Edit Task"/>   
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;