import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-native-elements';
import { StyleSheet, Text, Button, View, Dimensions, Animated } from 'react-native';
// import DirectionButton from './components/DirectionButton';

// BACKGROUND
import { ImageBackground } from 'react-native';
import Background from './assets/bg.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Animation des ennemies
const EnemyAnimView = (props) => {
  const enemyAnim = useRef(new Animated.Value(-100)).current  // Initial value for deplacement: 0

  useEffect(() => {
    Animated.timing(
      enemyAnim,
      {
        toValue: windowHeight,
        duration: 6000,
      }
    ).start();
  }, [enemyAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        marginTop: enemyAnim,
        position: "absolute"       // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function App() {

  let [positionX, setPositionX] = useState(windowWidth / 5)

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={Background} style={styles.image}>
          <View style={{ flex: 1 }}>
            <EnemyAnimView>
              <Image
                source={require('./assets/Quasimodo.png')}
                style={{ width: 100, height: 100, marginLeft: windowWidth / 5 - windowWidth / 5, bottom: 0, overflow: 'visible', }}
              />
            </EnemyAnimView>
            <EnemyAnimView>
              <Image
                source={require('./assets/Quasimodo.png')}
                style={{ width: 100, height: 100, marginLeft: windowWidth / 5, bottom: 0, overflow: 'visible', }}
              />
            </EnemyAnimView>
            <EnemyAnimView>
              <Image
                source={require('./assets/Quasimodo.png')}
                style={{ width: 100, height: 100, marginLeft: 2 * windowWidth / 5, bottom: 0, overflow: 'visible', }}
              />
            </EnemyAnimView>
            <EnemyAnimView>
              <Image
                source={require('./assets/Quasimodo.png')}
                style={{ width: 100, height: 100, marginLeft: 3 * windowWidth / 5, bottom: 0, overflow: 'visible', }}
              />
            </EnemyAnimView>
            <EnemyAnimView>
              <Image
                source={require('./assets/Quasimodo.png')}
                style={{ width: 100, height: 100, marginLeft: 4 * windowWidth / 5, bottom: 0, overflow: 'visible', }}
              />
            </EnemyAnimView>

          </View>
          {/* Vaisseau */}
          <View style={{ flex: 2 }}>
            <Image
              source={require('./assets/fusee2.png')}
              style={{ width: 100, height: 100, marginLeft: positionX, bottom: 0, overflow: 'visible', }}
            />
          </View>
          {/* boutons pour se déplacer degauche à droite */}
          <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', height: 100, }}>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});