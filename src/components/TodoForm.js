import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { todoUpdate } from '../actions';
import { CardSection, Input } from './common';
import DatePicker from 'react-native-datepicker';
class TodoForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Task"
            placeholder="What is to be done....?"
            value={this.props.task}
            onChangeText={value => this.props.todoUpdate({ prop: 'task', value })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Due Date</Text>
        <DatePicker
        style={{width: 200}}
        date={this.props.duedate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 50
          },
          dateInput: {
            marginLeft: 86
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={value => this.props.todoUpdate({ prop: 'duedate', value })}
      />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { task,duedate } = state.todoForm;

  return { task,duedate };
};

export default connect(mapStateToProps, { todoUpdate })(TodoForm);