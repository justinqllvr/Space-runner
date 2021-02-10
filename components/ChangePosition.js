import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import { Button, View } from 'react-native';


const ChangePostion = () => {
    let [positionX, setPositionX] = useState(0)

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <Image
                    source={require('../assets/Quasimodo-PNG-HD.png')}
                    style={{ width: 100, height: 100, marginLeft: positionX, bottom: 0, overflow: 'visible', }}
                />
            </View>
            <View>
                <Button
                    onPress={() => setPositionX(positionX -= 10)}
                    title="left button"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => setPositionX(positionX += 10)}
                    title="right button"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>


    );
}

export default ChangePostion;