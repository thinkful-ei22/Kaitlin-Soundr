import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import firebase from 'firebase';
import { Header, Card, Button, CardSection, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import SongPage from './src/components/SongPage';

export default class App extends React.Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyC_oh4mbrFwd4QiIgvr0cx56_qDJqAIWck',
        authDomain: 'soundr-c9b50.firebaseapp.com',
        databaseURL: 'https://soundr-c9b50.firebaseio.com',
        projectId: 'soundr-c9b50',
        storageBucket: 'soundr-c9b50.appspot.com',
        messagingSenderId: '773454528049'
    });

    firebase.auth().onAuthStateChanged((user) => {
      // if logged in, 'user' will be an object
      // if logged out, 'user' will be null or undefined
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  // helper conditional - render login OR logout

  renderContent() {
    // switch instead of if/else
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <SongPage />
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        )
      case false: 
          return (
          <View>
            <View style={styles.container}>
              <Image style={styles.imageStye} />
            </View>
            <LoginForm />
          </View>
          )
      default:
          return <View style={styles.spinnerStyleMain}><Spinner size="large" /></View>
    }
  }

  render() {
    const { container, imageStye } = styles;

    return (
      <View>
        <Header headerText="Soundr" />
          {this.renderContent()}
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
  },   
  spinnerStyleMain: {
    marginTop: 30
  }
});
