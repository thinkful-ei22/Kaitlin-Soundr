import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo';
import { Button, CardSection } from './common';
import { PlayerIcon } from 'react-player-controls';

import Moonlight from '../songs/moonlight.mp3';

class SongPage extends Component {
  constructor(props)
    {
      super(props);
      this.audioPlayer = new Audio.Sound();

    }

  stopSound = async () => {
    try {
      // await this.audioPlayer.unloadAsync()
      // await this.audioPlayer.loadAsync(require("../songs/moonlight.mp3"));
      await this.audioPlayer.stopAsync()
      .then(this.setState({playing: false}));
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }

  playSound = async () => {
        try {
          await this.audioPlayer.unloadAsync()
          await this.audioPlayer.loadAsync(require("../songs/moonlight.mp3"));
          await this.audioPlayer.playAsync()
          .then(this.setState({playing: true}));
        } catch (err) {
          console.warn("Couldn't Play audio", err)
        }
    }

  songToggle() {
    if (!this.state.playing) {
      this.playSound()
    }
    if (this.state.playing) {
      this.stopSound()
    }
  }

  componentWillMount() {
    Expo.Audio.setIsEnabledAsync(true);
  }

  state = {
   name: '',
   uri: '',
   image: '',
   playing: false
  };

  render() {

    return (
      <View>
        <Text>I'm so tired</Text>
        <CardSection>
          <Button 
            onPress={ () => { this.songToggle() }}>
            Play Song
          </Button>
        </CardSection>
      </View>
    )
  }
}

export default SongPage;
