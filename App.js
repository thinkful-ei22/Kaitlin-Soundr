import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Input, CardSection, Card } from './src/components/common';

export default class App extends React.Component {

  render() {
    const { container, imageStye } = styles;

    return (
      <View style={container}>
        <Image style={imageStye} />
          <CardSection>
            <Input label="email" placeholder="email@email.com" />
          </CardSection>
          
          <CardSection>
            <Input label="password" placeholder="password" />
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStye: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
    marginTop: -20
  }
});
