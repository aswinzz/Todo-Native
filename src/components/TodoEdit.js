import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Spinner,Button ,Card ,CardSection, Input ,Confirm} from './common';
import { connect } from 'react-redux';
import { todoUpdate,todoCreate,todoSave,todoFire,todoComplete } from '../actions';
import TodoForm from './TodoForm';
import _ from 'lodash';

class TodoEdit extends Component{
    state={showModal:false,showComplete:false};
    componentWillMount() {
        _.each(this.props.todo, (value, prop) => {
          this.props.todoUpdate({ prop, value });
        });
      }

    onSave(){
        const {task,duedate}=this.props;
        this.props.todoSave({task,duedate,uid:this.props.todo.uid})
    }

    onFire(){
        this.props.todoFire({uid:this.props.todo.uid})
    }

    onComplete(){
        const {task,duedate}=this.props;
        this.props.todoComplete({task,duedate,uid:this.props.todo.uid});
    }

    render(){
        return (
            <Card>
                <TodoForm/>
                <CardSection>
                    <Button onPress={this.onSave.bind(this)}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button disabled={this.props.todo.status} onPress={()=>this.setState({showComplete:!this.state.showComplete})}>Complete</Button>
                </CardSection> 
                <CardSection>
                    <Button onPress={()=>this.setState({showModal:!this.state.showModal})}>Delete</Button>
                </CardSection> 
                <Confirm visible={this.state.showModal} onAccept={this.onFire.bind(this)} onDecline={()=>this.setState({showModal:!this.state.showModal})}>
                    Are You Sure You Want To Delete This?? 
                </Confirm>
                <Confirm visible={this.state.showComplete} onAccept={this.onComplete.bind(this)} onDecline={()=>this.setState({showComplete:!this.state.showComplete})}>
                    Are You Sure You Want To Complete This? You cannot revert back! 
                </Confirm>
            </Card>
            
        );
    }

}

const mapStateToProps = (state)=>{
    const {task,duedate}=state.todoForm;
    return {task,duedate};
}
export default connect(mapStateToProps,{todoUpdate,todoComplete,todoSave,todoFire})(TodoEdit);