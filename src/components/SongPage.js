import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
      await this.audioPlayer.pauseAsync()
      .then(this.setState({playing: false}));
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }


  resumeSound = async () => {
    try {
      await this.audioPlayer.playAsync()
      .then(this.setState({playing: true}));
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

    if (this.state.playing === null) {
      this.playSound()
    }
    if (this.state.playing === false) {
      this.resumeSound()
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
   playing: null
  };

  render() { 
    let buttonMessage = 'Play Song';
    if (this.state.playing === true) {
      buttonMessage = 'Pause Song'
    }
    if (this.state.playing === false) {
      buttonMessage = 'Resume Song'
    }

    return (
      <View>
        <CardSection>

          <View style={styles.imageContainer}>
            <Image source={{uri: "https://cdnw.nickpic.host/xhl59A.jpg"}} style={styles.imageStyle}></Image>
          </View>
        </CardSection>

        <CardSection>
           <Button 
            onPress={ () => { this.songToggle() }}>
            {buttonMessage}
          </Button>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  imageStyle: {
    width: 300, 
    height: 300,
    borderRadius: 150
  }
}

export default SongPage;
