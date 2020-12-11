import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import AuthPage from "./components/AuthPage";
import CarsList from "./components/CarsList";
import {MapPage} from "./components/MapPage";

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key="auth" component = {AuthPage} title = "Authentication" initial = {true} />
            <Scene key="cars" component = {CarsList} title = "Cars" />
            <Scene key="map" component={MapPage} title="Map" />
        </Scene>
    </Router>
)
export default Routes
