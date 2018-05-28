import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Spinner,Button ,Card ,CardSection, Input } from './common';
import { passwordChanged,emailChanged,loginUser } from '../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
class LoginForm extends Component {

    componentWillMount(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          Actions.main();
          console.log('user is logged');
        }
      });
    }
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email,password}=this.props;
        this.props.loginUser({email,password});
    }


    renderError(){
        if(this.props.error){
            return (
                <View>
                    <Text style={styles.errorStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
    
        return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        );
      }
    

    render() {
        return (
          <Card>
            <CardSection>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>
    
            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>
    
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
    
            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
        );
      }
    }
    
    const styles = {
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }
    };
    
    const mapStateToProps = ({ auth }) => {
      const { email, password, error, loading } = auth;
    
      return { email, password, error, loading };
    };
    
    export default connect(mapStateToProps, {
      emailChanged, passwordChanged, loginUser
    })(LoginForm);