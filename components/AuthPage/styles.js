import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
    },
        buttonsContainer: {
            position: 'absolute',
            bottom: 250,
            width: '100%',
            backgroundColor: 'white',
        },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 50,
        top: 150,

    },
    input: {
        top: 300,
        marginVertical: 8,
        width: '90%',
    }
}
);
export default styles;
