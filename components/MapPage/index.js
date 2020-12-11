import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Image} from "react-native";

const cars = [
    {
        image: require('../../assets/images/items/1.png'),
        coords: [43.262384125739075, 76.93736651034624]
    },
    {
        image: require('../../assets/images/items/2.png'),
        coords: [43.243630077785895, 76.89342120108873]
    },
    {
        image: require('../../assets/images/items/3.png'),
        coords: [43.23375062413694, 76.93410494442477]
    },
    {
        image: require('../../assets/images/items/4.png'),
        coords: [43.254495881790334, 76.92211885877651]
    },
    {
        image: require('../../assets/images/items/5.png'),
        coords: [43.243015406652255, 76.95592314725747]
    }
]

export const MapPage = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialCamera={{ center: { latitude: 43.25308, longitude: 76.92313 }, zoom: 6 }}
            >
                {cars.map((n, i) => (
                    <Marker coordinate={{ latitude: n.coords[0], longitude: n.coords[1] }} key={i}>
                        <View>
                            <Image style={{ width: 80, height: 50 }} source={n.image} />
                        </View>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
