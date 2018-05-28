import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView,View,Text } from 'react-native';
import { todoFetch } from '../actions';
import ListItem from './ListItem';
import { CardSection } from './common/index';
import { Icon ,Badge } from 'react-native-elements';

class TodoList extends Component {
  componentWillMount() {
    this.props.todoFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ todos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(todos);
  }

  renderRow(todo) {
    return <ListItem todo={todo} />;
  }

  render() {
    return (
      <View>
      <CardSection>
      <Text style={{paddingLeft:80}}>Total : </Text>
      <Badge
        value={this.props.total}
        textStyle={{ color: 'white' }}
      />
      <Text style={{paddingLeft:40}}>Completed : </Text>
      <Badge
        value={this.props.complete}
        textStyle={{ color: 'white' }}
      />
      </CardSection>
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
     
      </View>
    );
  }
}

const mapStateToProps = state => {
  var total=0;
  var complete=0;
  const todos = _.map(state.todos, (val, uid) => {
    total++;
    if(val.status){
      complete++;
    }
    return { ...val, uid };
  });

  return { todos,complete,total};
};

export default connect(mapStateToProps, { todoFetch })(TodoList);