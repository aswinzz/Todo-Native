import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Spinner,Button ,Card ,CardSection, Input } from './common';
import { connect } from 'react-redux';
import { todoUpdate,todoCreate ,formReset} from '../actions';
import TodoForm from './TodoForm';

class CreateTodo extends Component {
    componentWillMount(){
        this.props.formReset();
    }
    onButtonPress(){
        const {task,duedate}=this.props;

        this.props.todoCreate({task,duedate});
        
    }

    render() {
        return (
            <Card>
                <TodoForm {...this.props}/>
                <CardSection><Button onPress={this.onButtonPress.bind(this)}>Create</Button></CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:20
    }
};

const mapStateToProps = (state) => {
    const {task,duedate} = state.todoForm;
    return {task,duedate};
};

export default connect(mapStateToProps,{todoUpdate,formReset,todoCreate})(CreateTodo);