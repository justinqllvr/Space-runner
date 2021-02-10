import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import { Button, View } from 'react-native';


const ChangePostion = () => {
    let [positionX, setPositionX] = useState(10)
    


    return (
        <View>
            <Image
                source={require('../assets/Quasimodo-PNG-HD.png')}
                style={{ width: 50, height: 50, position: 'absolute', left: positionX, bottom: 300}}
            />

            <Button
                onPress={()=>setPositionX(positionX -= 100)}
                title="left button"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=>setPositionX(positionX += 100)}
                title="right button"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>

    );
}

export default ChangePostion;