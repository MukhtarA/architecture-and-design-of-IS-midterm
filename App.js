import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";
import CarsList from "./components/CarsList";
import AuthPage from "./components/AuthPage";

export default function App() {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <Switch>
                    <Route exact path="/" component={AuthPage} />
                    <Route  exact path="/carsList" component={CarsList} />
                </Switch>
            </View>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
