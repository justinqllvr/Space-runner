import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-native-elements';
import { StyleSheet, Text, Button, View, Dimensions, Animated } from 'react-native';
import Counter from "./counter";
// import DirectionButton from './components/DirectionButton';

// BACKGROUND
import { ImageBackground } from 'react-native';
import Background from './assets/bg.png';
import { render } from 'react-dom';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let waveCounter = 0
let moveCounter = 0


// Animation des ennemies
// const EnemyAnimView = (props) => {
//   const enemyAnim = useRef(new Animated.Value(-100)).current  // Initial value for deplacement: 0

//   useEffect(() => {
//     Animated.timing(
//       enemyAnim,
//       {
//         toValue: windowHeight,
//         duration: 6000,
//       }
//     ).start();
//   }, [enemyAnim])

//   return (
//     <Animated.View                 // Special animatable View
//       style={{
//         marginTop: enemyAnim,
//         position: "absolute"       // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }



export default class App extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor");
    // sauvegarde des variables d'état
    this.state = {
      EnemyPosition: [],
      positionX: windowWidth / 5,
      random: windowWidth / 5,
      positionY: -100
    };
  }

  //fonction qui fait bouger les ennemies 
  moveEnemy() {
    
    this.setState({ positionY: this.state.positionY + 1 })
    moveCounter++
    console.log(this.state.positionY)
    setTimeout(() => {
      if (moveCounter < 500 && this.state.positionY <= 370) {
        this.moveEnemy()
      } else if (waveCounter <= 5) {
        this.setState({ random: ((Math.floor(Math.random() * 3) + 1) * windowWidth / 5) });
        this.setState({ positionY: -100 })
        // this.createEnemy()
        this.moveEnemy()
        moveCounter = 0
        waveCounter++
      } else {
        waveCounter = 8
      }
    }, 10);
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
    if (this.state.random == this.state.positionX && this.state.positionY == 320) {
      moveCounter = 501
      waveCounter = 8
      return (
        <View><Text>You have lost haha</Text></View>
      )
    }
    //pour placer le vaisseau à 3 positions différentes
    if (this.state.positionX < windowWidth / 5) {
      this.setState({ positionX: windowWidth / 5 })
    } else if (this.state.positionX > 3 * windowWidth / 5) {
      this.setState({ positionX: 3 * windowWidth / 5 })
    }

    //créer un nouvel ennemy à chaque fois que createEnemy est appelé
    let myNewEnemy = this.state.EnemyPosition.map((index) => {
      return (
        <View key={index} style={{ marginLeft: this.state.random, top: this.state.positionY, overflow: 'visible', position: 'absolute' }}>
          <Image
            source={require('./assets/ennemi.gif')}

            // (Math.floor(Math.random() * 5) * windowWidth / 5)
            style={{ width: 100, height: 100, }}
          />
        </View>

      )
    });

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={Background} style={styles.image}>
          <Counter></Counter>
          <View style={{ flex: 1 }}>
            {myNewEnemy}
          </View>

          {/* Vaisseau */}
          <View style={{ position: 'absolute', bottom: 100, }}>
            <Image
              source={require('./assets/joueur.gif')}
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