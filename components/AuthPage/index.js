import ButtonComponent from "../ButtonComponent";
import {View, Image, Text, TextInput, Button} from "react-native";
import React from "react";
import styles from './styles'
import Input from "../Input";
import { Actions } from "react-native-router-flux";

const AuthPage = (props, {history}) => {
    const [text, setText] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [warning, setWarning] = React.useState('');

    const changeEmail = e => setEmail(e);
    const changePassword = e => setPassword(e);
    const onSubmit = () => {
        if(email.length >= 6 && password.length >= 6)
            setWarning('Logged in successfully!')
        else
            setWarning('Email and password must be 6 chars at least')
    }



    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Text>{warning}</Text>
            <View style={{ paddingHorizontal: 20, width: "100%" }}>
                <Input placeholder={'Email'} style={{ ...styles.input, marginTop: 250 }} onChangeText={changeEmail} />
                <Input placeholder={'Password'} securityTextEntry style={styles.input} onChangeText={changePassword} />
            </View>


            <View style={{ ...styles.buttonsContainer, padding: 13 }}>
                <ButtonComponent
                    type="primary"
                    text="Log in"
                    onPress={onSubmit}
                />
                <ButtonComponent
                    type="secondary"
                    text="Map"
                    onPress={() => Actions.map()}
                />
                <ButtonComponent
                    type="primary"
                    text="Available cars"
                    onPress={() => Actions.cars()}
                />
            </View>
        </View>
    );
};

export default AuthPage;
