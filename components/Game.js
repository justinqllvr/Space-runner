import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native-elements';
import ChangePostion from './ChangePosition';
import Ennemy from './Ennemy';
// import DirectionButton from './components/DirectionButton';

class Game extends React.Component {
    constructor(props) {
        super(props)
        //   this.state = {
        //     left
        //   }
    }

    



    render() {
        return (
            <View style={styles.container}>
                <Ennemy></Ennemy>
                <ChangePostion style={styles.changePositionStyle}></ChangePostion>
                <Button
                    onPress={() => this.start()}
                    title="start"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <StatusBar style="auto" />
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
        overflow: 'visible',
    },
    ObjectPostion1: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: 100,
        bottom: 100,
        opacity: 1,
    },
    ObjectPostion2: {
        position: 'absolute',
        left: 300,
    },
    ObjectPostion3: {
        position: 'absolute',
        left: 500,
    },
    changePositionStyle: {
        // width: 70,
        // marginTop: 70,
    },
});

export default Game