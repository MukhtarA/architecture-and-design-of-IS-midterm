import ButtonComponent from "../ButtonComponent";
import {View, Image, TextInput, Button} from "react-native";
import React from "react";
import styles from './styles'
import Input from "../Input";

const AuthPage = (props, {history}) => {
    const [text, setText] = React.useState('');

    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

            <Input placeholder={'Email'} style={styles.input}/>
            <Input placeholder={'Password'} securityTextEntry style={styles.input}/>

            <View style={styles.buttonsContainer}>
                <ButtonComponent
                    type="primary"
                    text="Log in"
                    onPress={() => history.push("/products")}
                />
                <ButtonComponent
                    type="secondary"
                    text="Sign up"
                    onPress={() => this.history.push("/carsList")}
                />
            </View>
        </View>
    );
};

export default AuthPage;
