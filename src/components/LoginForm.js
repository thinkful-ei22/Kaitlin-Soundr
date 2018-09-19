import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  // getting info from the inputs
  // first, set a state
  state = { 
    email: '',
    password: '',
    // add a new error key/value for catch error
    error: '',
    loading: false
  }

  onButtonPress() {
    const { email, password } = this.state;

    // deletes the error message when attempting to login again after a bad login
    // clear out existing errors and flip loading tag to true
    this.setState( { error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      // if they succeed
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        // create an account if login fails
        firebase.auth().createUserWithEmailAndPassword(email, password)
          // if new user is successfully created
          .then(this.onLoginSuccess.bind(this))
          // show an error message if everything else fails
          .catch(this.onLoginFail.bind(this))
      })
  }

  // when a user successfully logs in
  onLoginSuccess() {
    this.setState({ 
      email: '',
      password: '',
      error: '', 
      loading: false 
    });
  }

  // when a user fails to login
  onLoginFail() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    })
  }

  // show button OR spinner
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    } 

    // else is unecessary but usable
    return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log In
        </Button>
    )
  }

  render() {
    return (
    <Card>
      <CardSection>
        <Input 
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      
      <CardSection>
        {this.renderButton()}
      </CardSection>

    </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;