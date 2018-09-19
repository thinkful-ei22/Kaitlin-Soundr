import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo';
import { Button, CardSection } from './common'

import Moonlight from '../songs/moonlight.mp3';

class SongPage extends Component {
  constructor(props)
    {
      super(props);
      this.audioPlayer = new Audio.Sound();

    }

  playSound = async () => {
        try {
          await this.audioPlayer.unloadAsync()
          await this.audioPlayer.loadAsync(require("../songs/moonlight.mp3"));
          await this.audioPlayer.playAsync();
        } catch (err) {
          console.warn("Couldn't Play audio", err)
        }
    }

  componentWillMount() {
    Expo.Audio.setIsEnabledAsync(true);
  }

  state = {
   name: '',
   uri: '',
   image: ''
  };

  render() {

    // const soundObject = new Expo.Audio.Sound();
    async function playAudio(file) {
      try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(file);
      await sound.playAsync(); 
      // // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

    return (
      <View>
        <Text>I'm so tired</Text>
        <CardSection>
          <Button 
            onPress={ () => { this.playSound(Moonlight) }}>
            Play Song
          </Button>
        </CardSection>
        <Text>https://od.lk/s/MTFfMjExODAyNTRf/moonlight.mp3</Text>
      </View>
    )
  }
}

export default SongPage;
