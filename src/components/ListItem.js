import React, { Component } from 'react';
import { ListView,Text, View ,TouchableWithoutFeedback} from 'react-native';
import { Spinner,Button ,Card ,CardSection, Input } from './common';
import { passwordChanged,emailChanged,loginUser,todoFetch } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
class ListItem extends Component{

    onRowPress(){
        Actions.todoEdit({todo:this.props.todo});
    }
    renderFunction(){
        const {task}=this.props.todo;
        if(this.props.todo.status){
            return (
                <CardSection style={styles.completeStyle}>
                <Text style={styles.titleStyle}>
                    {task}
                </Text>
                </CardSection>
            );
        }
        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {task}
                </Text>
            </CardSection>
        );

    }
    render(){
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>
                {this.renderFunction()}
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft:15
    },
    completeStyle:{
      backgroundColor:'green'
    }
  };

export default ListItem;