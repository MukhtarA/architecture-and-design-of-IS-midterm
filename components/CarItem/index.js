import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import ButtonComponent from "../ButtonComponent";
import styles from './styles';
import {Actions} from "react-native-router-flux";

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
                    text="Back to Map"
                    onPress={() => Actions.map()}
                />

                <ButtonComponent
                    type="secondary"
                    text="Home page"
                    onPress={() => Actions.auth()}
                />
            </View>

        </View>
    );
};

export default CarItem;
