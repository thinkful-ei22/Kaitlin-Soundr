import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Input, CardSection, Header } from './src/components/common';
import firebase from 'firebase';

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyC_oh4mbrFwd4QiIgvr0cx56_qDJqAIWck',
        authDomain: 'soundr-c9b50.firebaseapp.com',
        databaseURL: 'https://soundr-c9b50.firebaseio.com',
        projectId: 'soundr-c9b50',
        storageBucket: 'soundr-c9b50.appspot.com',
        messagingSenderId: '773454528049'
    })
  }

  render() {
    const { container, imageStye } = styles;

    return (
      <View>
        <Header headerText="Soundr" />
          <View style={container}>
            <Image style={imageStye} />
          </View>
            <CardSection>
              <Input label="email" placeholder="email@email.com" />
            </CardSection>
            
            <CardSection>
              <Input label="password" placeholder="password" secureTextEntry />
            </CardSection>
            
            <CardSection>
              <Button>
                Log In
              </Button>
            </CardSection> 
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStye: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
  }
});
