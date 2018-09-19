import React from 'react';
import { View } from 'react-native';

// functional component, solely presentational
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { CardSection };
