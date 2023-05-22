import React from "react";
import Constants from "expo-constants"
import { Text, View } from "react-native-web";
import RepositoryList from "./RepositoryList.jsx";


const Main = () => {
    return (
    <View style = {{marginTop: Constants.statusBarHeight, flexGrow :1, padding: 20}}>
        <RepositoryList />
    </View>
    )
} 

export default Main;