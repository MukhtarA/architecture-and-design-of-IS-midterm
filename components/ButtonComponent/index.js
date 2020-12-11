import * as React from 'react';
import {Text, Pressable, View} from "react-native";
import styles from './styles';

const ButtonComponent = (props) => {

    const { type, text, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#ffc4b1';
    const textColor = type === 'primary' ? '#ffc4b1' : '#171A20CC';
    return(
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => {onPress()}}
            >
                <Text style={[styles.text, {color: textColor}]}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default ButtonComponent;
