import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-native-elements';
import { StyleSheet, Text, Button, View, Dimensions, Animated, TouchableOpacity } from 'react-native';
import Counter from "./counter";
// import DirectionButton from './components/DirectionButton';

// BACKGROUND
import { ImageBackground } from 'react-native';
import Background from './assets/background.jpg';
import { render } from 'react-dom';

//MUSIC 
import { WebView } from 'react-native-webview';
import { Audio } from 'expo-av';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let waveCounter = 0
let moveCounter = 0

export default class App extends React.Component {
<<<<<<< HEAD
  
async componentDidMount(){
  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    playsInSilentModeIOS: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    shouldDuckAndroid: true,
    staysActiveInBackground: true,
    playsThroughEarpieceAndroid: true
  });

  this.sound = new Audio.Sound();

  const status = {
    shouldPlay: false
  };

  this.sound.loadAsync(require('./assets/music.mp3'), status, false);

  }

  playSound(){
    this.sound.playAsync;
  }
=======
>>>>>>> 69b3559555353a13acd0ace68b6baabd8823c4eb

  constructor(props) {
    super(props);
    console.log("constructor");
    // sauvegarde des variables d'état
    this.state = {
      EnemyPosition: [],
      positionX: 2 * windowWidth / 5,
      random: windowWidth / 5,
      positionY: -100
    };
  }

  //fonction qui fait bouger les ennemies 
  moveEnemy() {
    this.setState({ positionY: this.state.positionY + 4 }) //déplace l'ennemie avec un pas de 4
    moveCounter++
    setTimeout(() => {
      if (moveCounter < 1000 && this.state.positionY <= windowHeight) {
        this.moveEnemy() 
      } else if (waveCounter <= 10) {
        this.setState({ random: ((Math.floor(Math.random() * 3) + 1) * windowWidth / 5) }); //défini une place random
        this.setState({ positionY: -100 }) //réinitialise la position de l'ennemi
        this.moveEnemy()
        moveCounter = 0
        waveCounter++
      } else {
        waveCounter = 15
      }
    }, 7);
  }

  //fonction qui créé l'ennemie
  createEnemy() {
    this.setState({ random: ((Math.floor(Math.random() * 3) + 1) * windowWidth / 5) }); //créé la position random de l'ennemie
    let newly_added_EnemyPosition = {};
    // une fois la mise à jour de l'état, la fonction de rendu sera appelée
    this.setState({ EnemyPosition: [...this.state.EnemyPosition, newly_added_EnemyPosition] });
    //lance la fonction pour faire bouger l'ennemi
    this.moveEnemy()
    waveCounter++ //pour contrôler les vagues d'ennemis
  }




  render() {
    //vérifie les collisions et laisse un message si le joueur à perdu
    if (this.state.random == this.state.positionX && this.state.positionY == (windowHeight - 280)) {
      moveCounter = 1001 //fait arrêter les ennemis de bouger
      waveCounter = 20
      return (
        <View>
          <Text>You have lost haha</Text>
        </View>
      )
    }
    //pour placer le vaisseau à 3 positions différentes et correction de trajectoire
    if (this.state.positionX < windowWidth / 5) {
      this.setState({ positionX: windowWidth / 5 })
    } else if (this.state.positionX > 3 * windowWidth / 5 - 0.2 && this.state.positionX != 3 * windowWidth / 5) {
      this.setState({ positionX: 3 * windowWidth / 5 })
    } else if (this.state.positionX != 3 * windowWidth / 5 && this.state.positionX != 2 * windowWidth / 5 && this.state.positionX != windowWidth / 5) {
      this.setState({ positionX: 2 * windowWidth / 5 })
    }


    //créer un nouvel ennemy à chaque fois que createEnemy est appelé
    let myNewEnemy = this.state.EnemyPosition.map((index) => {
      return (
        <View key={index} style={{ marginLeft: this.state.random, top: this.state.positionY, overflow: 'visible', position: 'absolute' }}>
          <Image
            source={require('./assets/ennemi.png')}

            // (Math.floor(Math.random() * 5) * windowWidth / 5)
            style={{ width: 100, height: 100, }}
          />
        </View>

      )
    });


    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={Background} style={styles.image}>
          <Button 
            title="play sound"
            color="#3CDBBB1"
            onPress={this.playSound.bind(this)} />
        <Counter style={{ color: "#3CDBBB1" }}></Counter>
        
          <View style={{ flex: 1 }}>
            {myNewEnemy}
          </View>

          {/* Vaisseau */}
          <View style={{ position: 'absolute', bottom: 100, }}>
            <Image
              source={require('./assets/joueur.png')}
              style={{ width: 100, height: 100, marginLeft: this.state.positionX, bottom: 0, overflow: 'visible', }}
            />
          </View>
          {/* boutons pour se déplacer degauche à droite + spawn ennemis*/}
          <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-around', height: 100, }}>
            <Button
              onPress={() => this.setState({ positionX: this.state.positionX - windowWidth / 5 })}
              title="left button"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={(e) => { this.createEnemy() }}
              title="START"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={() => this.setState({ positionX: this.state.positionX + windowWidth / 5 })}
              title="right button"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});