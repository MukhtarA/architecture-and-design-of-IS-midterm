import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import ButtonComponent from "../ButtonComponent";
import styles from './styles';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.tagline}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <ButtonComponent
                    type="primary"
                    text="Log in"
                    onPress={() => {
                        console.warn("Log in");
                    }}
                />

                <ButtonComponent
                    type="secondary"
                    text="Sign up"
                    onPress={() => {
                        console.warn("Sign up");
                    }}
                />
            </View>

        </View>
    );
};

export default CarItem;
