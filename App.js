import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import { StyleSheet, Text, Button, View, Dimensions } from 'react-native';
// import DirectionButton from './components/DirectionButton';

// BACKGROUND
import { ImageBackground } from 'react-native';
import Background from './assets/bg.png';

export default function App() {
  
  const windowWidth = Dimensions.get('window').width;
  let [positionX, setPositionX] = useState(windowWidth/5)

  return (
    <View style={{ flex: 1 }}>
    <ImageBackground source={Background} style={styles.image}>

      <View style={{ flex: 2 }}>
        <Image
          source={require('./assets/fusee2.png')}
          style={{ width: 100, height: 100, marginLeft: positionX, bottom: 0, overflow: 'visible', }}
        />
      </View>
      <View>
        <Button
          onPress={() => setPositionX(positionX -= windowWidth / 5)}
          title="left button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => setPositionX(positionX += windowWidth / 5)}
          title="right button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
image:{
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center"
},
});