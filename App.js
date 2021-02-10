import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import { Button, View, Dimensions } from 'react-native';
// import DirectionButton from './components/DirectionButton';


export default function App() {
  
  const windowWidth = Dimensions.get('window').width;
  let [positionX, setPositionX] = useState(windowWidth/5)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <Image
          source={require('./assets/Quasimodo-PNG-HD.png')}
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
    </View>
  );
}
